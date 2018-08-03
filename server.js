var http = require("http");
var https = require("https");
var gcm = require('node-gcm');
var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var session = require('express-session');
ObjectId = require('mongodb').ObjectID;
var readConfig = require('./readConfig');
var twolevelunion = require('./testunion');
var rest = require('./sendhttprequest');

var port = 80;

var MongoClient = require('mongodb').MongoClient;
var mongourl = "mongodb://localhost:27017/";
var sess={};
var config = readConfig();
var sender = new gcm.Sender('AIzaSyCvXEDrsI3wHWWft-IcrTzd1bWcAkOJKx4');
var ordertimeout = 900000;
var orderalert = 300000;


console.log(config);

app.use(session({
	secret: 'somesecret',
	resave: false,
  saveUninitialized: false,
	cookie:{
		maxAge: null
	}
}));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
	extended:true
}));

app.use(express.static('public'));

app.get('/',function(req,res){
  res.send("Hello there, welcome here");
});

app.all("/user/*",function(req,res,next){
    sess = req.session;
		if(sess != null && sess.loggedin == true){
			next();
			console.log("checked it");
		}
		else {
			res.redirect('/login.html');
		}
});

app.use('/user',express.static('secured'));

var sess;

function extractinfofornotif(table,number,message){
	MongoClient.connect(mongourl,function(err,db){
		if(err)
			throw err;
		var dbo = db.db("khanabot");

		//sendnotification("Conditional message","fromnumber")
		console.log(table,number,message);
		dbo.collection(table).findOne({"number":number},function(err,mres){
				if(err)
				throw err;
				if(mres){
					if(mres.notificationid){
						sendnotification(message ,mres.notificationid);
					}
				}
		});

		db.close();
	});
}

function writeorderstatus(id,status,fromnumber,tonumber){
	MongoClient.connect(mongourl,function(err,db){
		if(err)
			throw err;
		var dbo = db.db("khanabot");

		dbo.collection("restaurants").update({"number":tonumber,"orders.id":id},{$set:
		{"orders.$.status":status}},{upsert:false},
			function(err,mres){
				if(err)
				throw err;
				console.log("restaurant order updated");
		});

		dbo.collection("users").update({"number":fromnumber,"orders.id":id},{$set:
		{"orders.$.status":status}},{upsert:false},
			function(err,mres){
				if(err)
				throw err;
				console.log("user order updated");
		});

		db.close();
	});

}

function checkandwrite(id,status,fromnumber,tonumber){
	tonumber = parseInt(tonumber);
	MongoClient.connect(mongourl,function(err,db){
	  if(err)
	  throw err;
	  dbo = db.db("khanabot");

		dbo.collection("restaurants")
		    .findOne({"number": tonumber},
		             {projection: { orders: { $elemMatch: { "id" : id} } } },
		             function(errT, resultT) {
			              console.log(resultT);
		        		if(resultT.orders[0].status == "Pending"){
									writeorderstatus(id,status,fromnumber,tonumber);
									extractinfofornotif("users",parseInt(fromnumber),"Your order has been "+status);
								}
		        	  db.close();
		});

	});
}

function checkacceptancetodecline(tonumber,id){
	console.log("checking for inconsistency");
	tonumber = parseInt(tonumber);
	MongoClient.connect(mongourl,function(err,db){
	  if(err)
	  throw err;
	  dbo = db.db("khanabot");

		dbo.collection("restaurants")
		    .findOne({"number": tonumber},
		             {projection: { orders: { $elemMatch: { "id" : id} } } },
		             function(errT, resultT) {
			              console.log(resultT);
		        		if(resultT.orders[0].status == "Pending"){
									writeorderstatus(resultT.orders[0].id,"Declined",
										parseInt(resultT.orders[0].fromnumber),parseInt(resultT.orders[0].tonumber));

									extractinfofornotif("users",parseInt(resultT.orders[0].fromnumber),
										"Your order has been auto declined, sorry for inconvenience");

									extractinfofornotif("restaurants",parseInt(resultT.orders[0].tonumber),
										"The order has been declined as you did not respond.");
								}
		        	  db.close();
		});

	});
}

function checkacceptancetoalert(order){
	console.log("checking for inconsistency");
	tonumber = parseInt(order.tonumber);
	MongoClient.connect(mongourl,function(err,db){
	  if(err)
	  throw err;
	  dbo = db.db("khanabot");

		dbo.collection("restaurants")
		    .findOne({"number": tonumber},
		             {projection: { orders: { $elemMatch: { "id" : order.id} } } },
		             function(errT, resultT) {
			              console.log(resultT);

		        		if(resultT.orders[0].status == "Pending"){
									sendmessagetorestaurant(tonumber,order.id,order.mode,order.summary,order.total,"")
									sendmessagetorestaurant(7488663497,order.id,order.mode,order.summary,order.total,order.tonumber)
								}
		        	  db.close();
		});

	});
}

function sendnotification(message,recipient){
	console.log(recipient);
	var message = new gcm.Message( {
	    collapseKey: 'demo',
	    priority: 'high',
	    contentAvailable: true,
	    delayWhileIdle: true,
	    timeToLive: 3,
	    data: {
	        key1: 'message1',
	        key2: 'message2'
	    },
	    notification: {
	        title: "Khanabot",
	        icon: "homeicon",
	        sound:"margun",
	        body: message
	    }
	});

	message.delay_while_idle = 1;
	var registrationIds = [];
	registrationIds.push(recipient);
	sender.send(message, registrationIds,/* 4,*/ function (err, result) {
	console.log(result);
	});
}

function sendmessagetorestaurant(number,order,mode,summary,total,tonumber){
	console.log("sending message to rest");
	let url = "https://2factor.in/API/R1/?module=TRANS_SMS&apikey=53a00358-7bf4-11e8-a895-0200cd936042&to="+
	number+"&from=khanab&templatename=order+plsce&var1="+order+"&var2="+mode+"&var3="+summary+"&var4="+total+"&var5="+tonumber;
	https.get(url,function(res){
	  let data = '';
	  res.on("data",(chunk)=>{
	    data+=chunk;
	  });
	  res.on("end",()=>{
	    console.log(data);
	  });
	  res.on("error",(error)=>{
	    console.log(error);
	  });
	});
}

function getotp(number){
	var otp = Math.floor(Math.random()*10)+""+ Math.floor(Math.random()*10)+""+Math.floor(Math.random()*10)+""+
	Math.floor(Math.random()*10)+""+Math.floor(Math.random()*10);
	console.log(otp);

	https.get("https://2factor.in/API/V1/53a00358-7bf4-11e8-a895-0200cd936042/SMS/"+number+"/"+otp+"/khanabot",function(res){
	  let data = '';
	  res.on("data",(chunk)=>{
	    data+=chunk;
	  });
	  res.on("end",()=>{
	    console.log(data);
	  });
	  res.on("error",(error)=>{
	    console.log(error);
	  });
	})

	return otp;
}

function updateuuid(req,res,number,collection){
	sess = req.session;
	//uuid = Math.floor(Math.random()*999999999999 + 1000000000000);
	uuid = require('crypto').randomBytes(128).toString('hex');
	query={};
	query.number = number;
	MongoClient.connect(mongourl,function(err,db){
			if(err)
			throw err;

			var dbo = db.db("khanabot");
			dbo.collection(collection).update(query,{$set:{uuid:uuid}},{upsert:true},function(err,mres){
					if(err)
					throw err;
					console.log("uuidupdated");
					sess.number = number;
					sess.uuid = uuid;
					sess.loggedin = true;
					res.send({uuid:uuid});
			});
	});
}

app.post('/login',function(req,res){
	var query = {};
	query.number = parseInt(req.body.number);
	sess = req.session;
	query.uuid = req.body.uuid;
	MongoClient.connect(mongourl,function(err,db){
		if(err)
		throw err;
		dbo = db.db("khanabot");

		dbo.collection("users").findOne(query,function(err,mres){
			if(err)
			throw err;
			if(mres==null){
				res.send({loggedin:false});
			}
			else{
				//console.log(mres);
				sess.number = query.number;
				sess.uuid = query.uuid;
				sess.loggedin = true;
				res.send({loggedin:true});
			}
			db.close();
		});
	});
});

app.post('/loginrest',function(req,res){
	var query = {};
	query.number = parseInt(req.body.number);
	sess = req.session;
	query.uuid = req.body.uuid;
	MongoClient.connect(mongourl,function(err,db){
		if(err)
		throw err;
		dbo = db.db("khanabot");

		dbo.collection("restaurants").findOne(query,function(err,mres){
			if(err)
			throw err;
			if(mres==null){
				res.send({loggedin:false});
			}
			else{
				sess.number = query.number;
				sess.uuid = query.uuid;
				sess.loggedin = true;
				res.send({loggedin:true});
			}
			db.close();
		});
	});
});

app.get('/appversion',function(req,res){
	res.send({version:"2.0.0"});
});

app.get('/checkstatus',function(req,res){
		sess = req.session;
		if(sess && sess.loggedin){
			res.send({loggedin:true});
		}
		else
		res.send({loggedin:false});
});

app.post('/number',function(req,res){
		insertme = {};
		checkme = {};
		sess = req.session;
		insertme.number = parseInt(req.body.number);
		checkme.number = insertme.number;
		insertme.otp = getotp(insertme.number);
		date = new Date();
		insertme.date = date.getTime();
		console.log(insertme);
		MongoClient.connect(mongourl,function(err,db){
				if(err)
				throw err;
				dbo = db.db("khanabot");

				dbo.collection("usersotp").update(checkme,insertme,{upsert:true},function(err,mres){
						if(err)
						throw err;
						sess.number = insertme.number;
						res.send({otp:"sent"});
						console.log("otp sent at "+ insertme.date);
						//console.log(mres);
						db.close();
				});
		});
});

app.post('/otp',function(req,res){
		checkme={};
		sess = req.session;
		checkme.number = parseInt(sess.number);
		checkme.otp = req.body.otp;
		date = new Date();
		date = date.getTime();
		console.log(checkme);
		MongoClient.connect(mongourl,function(err,db){
				if(err)
				throw err;

				dbo = db.db("khanabot");
				console.log("db taken");
				dbo.collection("usersotp").findOne(checkme,function(err,mres){
						if(err)
						throw err;

						if(mres == null)
						res.send({otp:"invalid"});
						else{
							if(date - mres.date <=180000){
									updateuuid(req,res,checkme.number,"users");
							}
							else {
								res.send({otp:"timeout"});
							}
						}
						db.close();
						console.log("db closed");
				});
		});
});

app.post('/otprest',function(req,res){
		checkme={};
		sess = req.session;
		checkme.number = parseInt(sess.number);
		checkme.otp = req.body.otp;
		date = new Date();
		date = date.getTime();
		console.log(checkme);
		MongoClient.connect(mongourl,function(err,db){
				if(err)
				throw err;

				dbo = db.db("khanabot");
				console.log("db taken");
				dbo.collection("usersotp").findOne(checkme,function(err,mres){
						if(err)
						throw err;

						if(mres == null)
						res.send({otp:"invalid"});
						else{
							if(date - mres.date <=180000){
									updateuuid(req,res,checkme.number,"restaurants");
							}
							else {
								res.send({otp:"timeout"});
							}
						}
						db.close();
						console.log("db closed");
				});
		});
});

app.get('/logout',function(req,res){
    sess = req.session;
    if(sess && sess.loggedin== true){
      sess.loggedin=false;
      sess.number = "";
      sess.uuid = "";
    }
    req.session.destroy(function(err){
      if(err)
      throw err;
      console.log("session destroyed");
    });
    res.send({loggedout:"true"});
});

app.get('/savenotificationid',function(req, res){
	sess=req.session;
	if(sess && sess.loggedin==true){
		var notificationid = req.query.notificationid;
		MongoClient.connect(mongourl,function(err,db){
			if(err)
				throw err;
			var dbo = db.db("khanabot");
			//If want to save location of user
			dbo.collection("users").update({"number":parseInt(sess.number)},{
				$set : {
					"notificationid":notificationid
				}
			},{
				upsert:true
			},
			function(err,mres){
				if(err)
				throw err;
				console.log("notificationid updated");
				res.send({"notificationid":"updated"});
			});

			db.close();
		});
	}
	else{
		res.send({loggedin:false});
	}

});

app.get('/savenotificationidpradeep',function(req, res){
	sess=req.session;
	sess.loggedin=true;
	if(sess && sess.loggedin==true){
		var notificationid = req.query.notificationid;
		var number = parseInt(req.query.number);
		MongoClient.connect(mongourl,function(err,db){
			if(err)
				throw err;
			var dbo = db.db("khanabot");
			//If want to save location of user
			dbo.collection("restaurants").update({"number":number},{
				$set : {
					"notificationid":notificationid
				}
			},{
				upsert:false
			},
			function(err,mres){
				if(err)
				throw err;
				console.log("notificationid of pradeep updated");
				res.send({"notificationidpradeep":"updated"});
			});

			db.close();
		});
	}
	else{
		res.send({loggedin:false});
	}

});

app.get('/savenotificationidrest',function(req, res){
	sess=req.session;
	if(sess && sess.loggedin==true){
		var notificationid = req.query.notificationid;
		var number = parseInt(sess.number);
		MongoClient.connect(mongourl,function(err,db){
			if(err)
				throw err;
			var dbo = db.db("khanabot");
			//If want to save location of user
			dbo.collection("restaurants").update({"number":number},{
				$set : {
					"notificationid":notificationid
				}
			},{
				upsert:false
			},
			function(err,mres){
				if(err)
				throw err;
				console.log("notificationid of restaurant updated");
				res.send({"notificationid":"updated"});
			});

			db.close();
		});
	}
	else{
		res.send({loggedin:false});
	}

});

app.post('/sharelocation',function(req,res){
	sess = req.session;

	if(sess && sess.loggedin){
		var lat = parseFloat(req.body.lat);
		var long = parseFloat(req.body.long);
		if(req.body.gLocation){
			gLocation = req.body.gLocation;
			sess.gLocation=gLocation;}
		else {
			gLocation="";
		}
		sess.lat = lat;
		sess.long = long;
		var Location={};
		Location.lat=lat;
		Location.long=long;
		Location.gLocation=gLocation;

		MongoClient.connect(mongourl,function(err,db){
			if(err)
				throw err;
			var dbo = db.db("khanabot");

			dbo.collection("restaurants").find({
				/*"Location.lat":{$gt:lat-config.dlatitude,$lt:lat+config.dlatitude},
				"Location.long":{$gt:long-config.dlongitude,$lt:long+config.dlongitude}*/"status":"on"}).
				project({orders:0, _id:0,notificationid:0,uuid:0}).toArray(function(err,mres){
					res.send(mres);
					console.log(mres);
					console.log(lat,long);
      	});

			//If want to save location of user
			dbo.collection("users").update({"number":parseInt(sess.number)},{
				$set : {
					"Location":Location
				}
			},{
				upsert:false
			},
			function(err,mres){
				if(err)
				throw err;
				console.log("updated location");
			});

			db.close();
		});
	}
	else{
		res.send({loggedin:false});
	}
});

app.post('/locationrest',function(req,res){
	sess = req.session;

	if(sess && sess.loggedin){

		var location = req.body.location;
		location = JSON.parse(location);
		location.lat= parseFloat(location.lat);
		location.long=parseFloat(location.long);

		MongoClient.connect(mongourl,function(err,db){
			if(err)
				throw err;
			var dbo = db.db("khanabot");

			//If want to save location of user
			dbo.collection("restaurants").update({"number":parseInt(sess.number)},{
				$set : {
					"Location":location
				}
			},{
				upsert:false
			},
			function(err,mres){
				if(err)
				throw err;
				res.send({location:"updated"});
				console.log("updated location in restaurant");
			});

			db.close();
		});
	}
	else{
		res.send({loggedin:false});
	}
});

app.get('/savelocation',function(req,res){
	sess = req.session;

	if(sess && sess.loggedin){
		var lat = parseFloat(req.query.lat);
		var long = parseFloat(req.query.long);
		var locality;
		var houseorflatno;
		if(req.query.gLocation)
			gLocation = req.query.gLocation;
		else {
			gLocation="";
		}
		if(req.query.locality)
			locality = req.query.locality;
		else {
			locality="";
		}
		if(req.query.houseorflatno)
			houseorflatno = req.query.houseorflatno;
		else {
			houseorflatno="";
		}
		var Location={};
		Location.lat=lat;
		Location.long=long;
		Location.gLocation=gLocation;
		Location.locality=locality;
		Location.houseorflatno=houseorflatno;

		MongoClient.connect(mongourl,function(err,db){
			if(err)
				throw err;
			var dbo = db.db("khanabot");
			//If want to save location of user
			dbo.collection("users").update({"number":parseInt(sess.number)},{
				$push : {
					"savedLocations":Location
				}
			},{
				upsert:false
			},
			function(err,mres){
				if(err)
				throw err;
				console.log("updated location");
				res.send({"location":"saved"});
			});

			db.close();
		});
	}
	else{
		res.send({loggedin:false});
	}
});

app.get('/restaurantpage',function(req,res){
	sess = req.session;
	if(sess && sess.loggedin){
		var number = parseFloat(req.query.number);

		MongoClient.connect(mongourl,function(err,db){
			if(err)
				throw err;
			var dbo = db.db("khanabot");

			dbo.collection("restaurants").find({
				"number":number}).toArray(function(err,mres){
				res.send(mres);
				console.log(number);
      });
		});
	}
	else{
		res.send({loggedin:false});
	}
});

app.get('/profilepage',function(req,res){
	sess = req.session;

	if(sess && sess.loggedin){
		var number = parseInt(req.query.number);

		MongoClient.connect(mongourl,function(err,db){
			if(err)
				throw err;
			var dbo = db.db("khanabot");

			dbo.collection("users").find({
				"number":number}).toArray(function(err,mres){
				res.send(mres);
				console.log(number);
      });
		});
	}
	else{
		res.send({loggedin:false});
	}
});

app.get('/addtocart',function(req,res){
	sess = req.session;

	if(sess && sess.loggedin){
		var number = parseInt(req.query.number);
		var cart = req.query.cart;
		console.log(cart);
		cart = JSON.parse(cart);

		MongoClient.connect(mongourl,function(err,db){
			if(err)
				throw err;
			var dbo = db.db("khanabot");

			dbo.collection("users").update({"number":number},{$set:{cart:cart}},
			function(err,mres){
						if(err)
						throw err;
						res.send({cart:"added"});
						//console.log(mres);
						db.close();
				});
		});
	}
	else{
		res.send({loggedin:false});
	}
});

app.post('/requestorder',function(req,res){
	sess = req.session;
	console.log("something came");
	if(sess && sess.loggedin){
		console.log("something came in");
		var mode = req.body.mode;
		var time = req.body.time;
		var order = req.body.order;
		var gLocation = sess.gLocation;
		//console.log(order);

		order = JSON.parse(order);
		console.log(mode,time);

		while(order.length > 0){
			temporder=[];
			tempnumber = order[0].number;
			for(var j=0; j<order.length;j++){
				if(order[j].number == tempnumber){
					temporder.push(order[j]);
					order.splice(j,1);
					j--;
				}
			}
			//console.log(temporder);
			processrequest(mode,temporder,time,gLocation);

		}
		res.send({"orders":"requested"});

	}
	else{
		res.send({loggedin:false});
	}
});

function processrequest(mode,order,time,gLocation){
	MongoClient.connect(mongourl,function(err,db){
		if(err)
			throw err;
		var dbo = db.db("khanabot");
		var orders = {};
		orders.mode = mode;
		orders.time = time;
		orders.order = order;
		orders.status ="Pending";
		orders.fromnumber = parseInt(sess.number);
		orders.tonumber = parseInt(order[0].number);
		orders.gLocation = gLocation;
		var date = new Date();
		orders.id = date.getTime()+""+parseInt(parseInt(sess.number)%10000);
		//console.log(orders);
		var total = 0;
		var summary = "";
		for(var i =0; i<order.length;i++){
			var price = order[i].price[parseInt(order[i].index)] * parseInt(order[i].quantity)
			total+=price;
			summary += order[i].name +" x "+order[i].quantity +" = "+price+", ";
		}
		summary = summary + mode +" in time : " + time
		console.log(summary);
		console.log(total);
		orders.summary = summary;
		orders.total = total;

		dbo.collection("restaurants").update({"number":parseInt(orders.tonumber)},{
				$push : {
					"orders":orders
				}
			},{
				upsert:false
			},
			function(err,mres){
				if(err)
				throw err;
				console.log("updated in restaurants");
		});


		//If want to save location of user
		dbo.collection("users").update({"number":parseInt(sess.number)},{
			$push : {
				"orders":orders
			}
		},{
			upsert:false
		},
		function(err,mres){
			if(err)
			throw err;
			console.log("updated in users");
		});


		//sendnotification("There is a new order kindly see the order","tonumber_res");
		// dbo.collection("restaurants").findOne({"number":parseInt(orders.tonumber)},function(err,mres){
		// 		if(err)
		// 		throw err;
		// 		if(mres){
		// 			if(mres.notificationid){
		// 				sendnotification("There is a new order kindly see the order",mres.notificationid);
		// 			}
		// 		}
		// });

		extractinfofornotif("restaurants",parseInt(orders.tonumber),"There is a new order kindly see the order");

		console.log("timer started");

		setTimeout(function(){
			checkacceptancetoalert(orders);
		},orderalert);

		setTimeout(function(){
			checkacceptancetodecline(orders.tonumber,orders.id);
		},ordertimeout);

		db.close();
	});
}

app.get('/changeorderstatuspradeep',function(req,res){
	sess = req.session;
	sess.loggedin = true;
	if(sess && sess.loggedin){
		var id = req.query.id;
		var status = req.query.status;
		var fromnumber = parseInt(req.query.fromnumber);
		var tonumber = parseInt(req.query.tonumber);

		res.send({status:"changed"});

		MongoClient.connect(mongourl,function(err,db){
			if(err)
				throw err;
			var dbo = db.db("khanabot");
			dbo.collection("users").update({"number":fromnumber,"orders.id":id},{$set:
			{"orders.$.status":status}},{upsert:false},
				function(err,mres){
					if(err)
					throw err;
					console.log("user order updated");
			});

			dbo.collection("restaurants").update({"number":tonumber,"orders.id":id},{$set:
			{"orders.$.status":status}},{upsert:false},
				function(err,mres){
					if(err)
					throw err;
					console.log("restaurant order updated");
			});

			//sendnotification("Conditional message","fromnumber")

			dbo.collection("users").findOne({"number":fromnumber},function(err,mres){
					if(err)
					throw err;
					if(mres){
						if(mres.notificationid){
							sendnotification("Your order has been "+status,mres.notificationid);
						}
					}
			});

			db.close();
		});
	}
	else{
		res.send({loggedin:false});
	}
});

app.get('/changeorderstatusrest',function(req,res){
	sess = req.session;
	if(sess && sess.loggedin){
		var id = req.query.id;
		var status = req.query.status;
		var fromnumber = parseInt(req.query.fromnumber);
		var tonumber = parseInt(sess.number);

		res.send({status:"changed"});

		if(status=="Accepted"){
			checkandwrite(id,status,fromnumber,tonumber);
		}
		else{
			writeorderstatus(id,status,fromnumber,tonumber);
			extractinfofornotif("users",parseInt(fromnumber),"Your order has been "+status);
		}


		// MongoClient.connect(mongourl,function(err,db){
		// 	if(err)
		// 		throw err;
		// 	var dbo = db.db("khanabot");

			//sendnotification("Conditional message","fromnumber")

			// dbo.collection("users").findOne({"number":fromnumber},function(err,mres){
			// 		if(err)
			// 		throw err;
			// 		if(mres){
			// 			if(mres.notificationid){
			// 				sendnotification("Your order has been "+status,mres.notificationid);
			// 			}
			// 		}
			// });

		// 	db.close();
		// });

	}
	else{
		res.send({loggedin:false});
	}
});

app.get('/orderhistory',function(req,res){
	sess = req.session;

	if(sess && sess.loggedin){
		console.log("in order history");
		MongoClient.connect(mongourl,function(err,db){
			if(err)
				throw err;
			var dbo = db.db("khanabot");
			var orders =[];
			dbo.collection("users").findOne({"number":parseInt(sess.number)},
			function(err,mres){
				if(err)
				throw err;
				var dborders = mres.orders;
				if(dborders){
					for(var i=0; i<10; i++){
						//console.log(orders);
						if(dborders.length - i -1 >=0)
						orders.push(dborders[dborders.length -i - 1]);
						else {
							break;
						}
					}
				}
				//console.log(orders);
				res.send(orders);
			});

			db.close();
		});
	}
	else{
		res.send({loggedin:false});
	}
});

app.get('/orderhistorypradeep',function(req,res){
	sess = req.session;
	sess.loggedin = true;
	if(sess && sess.loggedin){
		var number = parseInt(req.query.number);
		MongoClient.connect(mongourl,function(err,db){
			if(err)
				throw err;
			var dbo = db.db("khanabot");
			var orders =[];
			dbo.collection("restaurants").findOne({"number":number},
			function(err,mres){
				if(err)
				throw err;
				var dborders = mres.orders;
				console.log(dborders);
				if(dborders){
					for(var i=0; i<50; i++){
						//console.log(orders);
						if(dborders.length - i -1 >=0)
						orders.push(dborders[dborders.length -i - 1]);
						else {
							break;
						}
					}
				}
				console.log(orders);
				res.send(orders);
			});

			db.close();
		});
	}
	else{
		res.send({loggedin:false});
	}
});

app.get('/orderhistoryrest',function(req,res){
	sess = req.session;
	if(sess && sess.loggedin){
		var number = parseInt(sess.number);
		MongoClient.connect(mongourl,function(err,db){
			if(err)
				throw err;
			var dbo = db.db("khanabot");
			var orders =[];
			dbo.collection("restaurants").findOne({"number":number},
			function(err,mres){
				if(err)
				throw err;
				var dborders = mres.orders;
				if(dborders){
					for(var i=0; i<50; i++){
						//console.log(orders);
						if(dborders.length - i -1 >=0)
						orders.push(dborders[dborders.length -i - 1]);
						else {
							break;
						}
					}
				}
				//console.log(orders);
				res.send(orders);
			});

			db.close();
		});
	}
	else{
		res.send({loggedin:false});
	}
});

app.get('/getstatus',function(req,res){
	sess = req.session;
	if(sess && sess.loggedin){
		var number = parseInt(sess.number);
		MongoClient.connect(mongourl,function(err,db){
			if(err)
			throw err;
			var dbo = db.db("khanabot");
			dbo.collection("restaurants").findOne({"number":number},
			function(err,mres){
				if(err)
				throw err;
				if(mres.status){
					let status = mres.status;
					res.send({status:status});
				}
				else
					res.send({status:"off"});
			});

			db.close();
		});
	}
	else{
		res.send({loggedin:false});
	}
});

app.get('/setstatus',function(req,res){
	sess = req.session;
	if(sess && sess.loggedin){
		var number = parseInt(sess.number);
		var status = req.query.status;
		MongoClient.connect(mongourl,function(err,db){
			if(err)
			throw err;
			var dbo = db.db("khanabot");
			dbo.collection("restaurants").update({"number":number},{$set:{status:status}},
			function(err,mres){
				if(err)
				throw err;
				res.send({status:status});
			});

			db.close();
		});
	}
	else{
		res.send({loggedin:false});
	}
});

app.get('/currenttime',function(req,res){
	let date = new Date();
	date = date.getHours();
	res.send({currenttime:date});
});

var server = app.listen(port,function(req,res){
  console.log("server started on "+ port);
})

process.on('SIGINT',()=>{
	console.log("sigint called");
	server.close();
})
