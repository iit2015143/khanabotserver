
var MongoClient = require('mongodb').MongoClient;
var mongourl = "mongodb://localhost:27017/";
var dataminer={};
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
                      for(j=0; j<doc.orders[i].order.length;j++){
                        console.log(doc.orders[i].order[j]);
                        if(dataminer.hasOwnProperty(doc.orders[i].order[j].name)){
                          dataminer[doc.orders[i].order[j].name]++;
                        }
                        else {
                          dataminer[doc.orders[i].order[j].name]=0;
                        }
                      }
                    }
                    printdataminer();
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
