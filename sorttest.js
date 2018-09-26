var MongoClient = require('mongodb').MongoClient;
var mongourl = "mongodb://localhost:27017/";

MongoClient.connect(mongourl,function(err,db){
	if(err)
	throw err;
	var dbo = db.db("khanabot");
  dbo.collection("restaurants").find({
    /*"Location.lat":{$gt:lat-config.dlatitude,$lt:lat+config.dlatitude},
    "Location.long":{$gt:long-config.dlongitude,$lt:long+config.dlongitude}*/}).
    project({number:1,rating:1}).sort({rating:-1}).toArray(function(err,mres){
      console.log(mres);
  });
  db.close();
});
