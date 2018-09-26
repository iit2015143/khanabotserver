var MongoClient = require('mongodb').MongoClient;
var mongourl = "mongodb://localhost:27017/";


var rock_on = {
	//"_id" : ObjectId("02"),
	"Location" : {
		"lat" : 25.430529,
		"long" : 81.766967
	},

	"Offers" : [],

	"availability" : {
		"uptime" : 11,
		"downtime" : 23
	},
	"image":"chicken_biryani_1.jpg",
	"number" : 7488663497,
	"feature" : "Value For Money",
	"name" : "Eat On",
  	"rating":4.2,
	"HotDeals":[
	{
		name:"Chicken Biryani",
		price:[110],
		description:"Specifically for IIITA. Take it soon. Tandoor Paratha After 6 PM To 11 PM",
		image: "chicken_biryani_1.jpg"
	}

  ],

  "TopRated":[],

  	"menu" : {


		"Non_Veg" : {


			"Chicken_Biryani" : {
				"price" : [60,110],
				"category" : ["Non-Veg","Fried","Rice","North_Indian"],
				"image" : "chicken_biryani_1.jpg"
				
			},
		}
	}
  	
}

console.log(rock_on);

MongoClient.connect(mongourl,function(err,db){
	if(err)
	throw err;
	var dbo = db.db("khanabot");
	dbo.collection('restaurants').update({number:rock_on.number},{$set:{name:rock_on.name,rating:rock_on.rating,
	"Location":rock_on.Location,availability:rock_on.availability,HotDeals:rock_on.HotDeals,TopRated:rock_on.TopRated,
	menu:rock_on.menu,image:rock_on.image,Offers:rock_on.Offers}},function(err,mres){
	  if(err)
	  throw err;
	  console.log("Wrote Your fucking object");
	});
});


