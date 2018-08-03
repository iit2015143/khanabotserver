var MongoClient = require('mongodb').MongoClient;
var mongourl = "mongodb://localhost:27017/";

MongoClient.connect(mongourl,function(err,db){
  if(err)
  throw err;
  dbo = db.db("khanabot");


  //dbo.collection("restaurants").findOne({"number":8574418045, "orders": { $elemMatch: { "id" : "15325332734427755" } } },
    //                      {"number":1, "orders.$":1},function(err,mres){
      //                    if(err)
        //                  throw err;
          //                console.log(mres);
            //              // if(mres)
                        // if(mres.orders.status == "Pending")
            //              console.log("still pending do something");
         //             db.close();
  //});

dbo.collection("restaurants")
    .findOne({"number": 8574418045}, 
             {projection: { orders: { $elemMatch: { "id" : "15325332734427755"} } } },
             function(errT, resultT) {
	console.log(resultT.orders);
	if(resultT.orders[0].status == "Declined")
		console.log("declined");
	db.close();
});

});
