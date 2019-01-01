var MongoClient = require('mongodb').MongoClient;
var mongourl = "mongodb://localhost:27017/";

MongoClient.connect(mongourl,function(err,db){
    if(err)
    throw err;
    dbo = db.db("khanabottesting");

			dbo.collection("restaurants")
		    	.findOne({"number": 9389521155},
			             {projection: { orders: { $elemMatch: { "id" : "15422458821269089"} } } },
			             function(errT, resultT) {
				                console.log(resultT);
			        		if(resultT.orders[0].status == "Pending"){
										writeorderstatus(id,status,fromnumber,tonumber);
										updatedatabasefordeclined(id,"customer",fromnumber,tonumber);
										res.send({"status":"changed"});
										extractinfofornotif("restaurants",parseInt(resultT.orders[0].tonumber),
											"The order " + id + " has been declined by the customer.");
									}
									else{
										res.send({"status":"Already " + resultT.orders[0].status});
									}
			        	  db.close();
			});
});
