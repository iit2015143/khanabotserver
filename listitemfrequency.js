
var MongoClient = require('mongodb').MongoClient;
var mongourl = "mongodb://localhost:27017/";
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
                   console.log(doc);
                   count++;
                   console.log(count);

                 });
              db.close();
  });

});
