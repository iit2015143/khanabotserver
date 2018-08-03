var MongoClient = require('mongodb').MongoClient;
var mongourl = "mongodb://localhost:27017/";

MongoClient.connect(mongourl,function(err,db){
    if(err)
    throw err;
    var dbo = db.db("khanabot");
    dbo.collection('restaurants').findOne({"number":8574418045},function(err,mres){
      if(err)
      throw err;
      for(var i=0; i<50;i++){
        if(mres.orders.length - i - 1 >= 0){
          console.log(mres.orders[mres.orders.length - i - 1]);
        }
      }
    });
});
