
var MongoClient = require('mongodb').MongoClient;
var mongourl = "mongodb://localhost:27017/";
var dataminer={};
var gTotal = 0;
var numOrders = 0;
MongoClient.connect(mongourl,function(err,db){
  if(err)
  throw err;
  dbo = db.db("khanabot");
  count = 0;


  dbo.collection("restaurants")
      .find({},
               {projection: {orders:1,number:1,name:1} },
               function(errT, resultT) {
                 resultT.each(function(err,doc){
                   if(doc && doc.hasOwnProperty("orders"))
                    for(i=0; i<doc.orders.length;i++){
		      numOrders++;
		      if(!isNaN(doc.orders[i].total)){
		      gTotal += parseInt(doc.orders[i].total);
		      //console.log(doc.orders[i].total);
		      //console.log("gTotal "+gTotal);
		      }
		      temptotal = 0;
                      for(j=0; j<doc.orders[i].order.length;j++){
                        //console.log(doc.orders[i].order[j]);
			temptotal += doc.orders[i].order[j].price * doc.orders[i].order[j].quantity;
                        if(dataminer.hasOwnProperty(doc.orders[i].order[j].name)){
                          dataminer[doc.orders[i].order[j].name]++;
                        }
                        else {
                          dataminer[doc.orders[i].order[j].name]=0;
                        }
                      }
		     if(temptotal != doc.orders[i].total)
			console.log(doc.orders[i]);
			console.log(doc.orders[i].total,temptotal);
                    }
                    //printdataminer();
		    //console.log("Total is "+gTotal);
		    //console.log(numOrders);
                 });
              console.log("before close")
              db.close();
              console.log(dataminer);
              console.log("after close");
  });

});
console.log("atend");
function printdataminer(){
  console.log(dataminer);
}
