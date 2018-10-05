var MongoClient = require('mongodb').MongoClient;
var mongourl = "mongodb://localhost:27017/";


var makkhans = {
	//"_id" : ObjectId("02"),
	"Location" : {
		"lat" : 25.430529,
		"long" : 81.766967
	},

	"orders":[],

	"status":"on",
	"admin":"on",

	"Offers" : [/*{ "name" : "Free delivery", "image" : "spring_roll_1.jpg" }*/],
	"availability" : {
		"uptime" : 18,
		"downtime" : 8
	},
	"image":"makkhans_1.jpg",
	"number" : 7488663497,
	"feature" : "Value For Money",
	"name" : "Makkhans",
  	"rating":4,
  	"HotDeals":[
	//{
		// name:"Chicken_Biryani",
		// price:[180],
		// description:"Specifically for IIITA. Take it soon. Tandoor Paratha After 6 PM To 11 PM",
		// image: "chicken_biryani_3.jpg"
	//},

	//{
		// name:"Butter_Chicken",
		// price:[300],
		// description:"Specifically for IIITA. Take it soon.Tandoor Paratha After 6 PM To 11 PM",
		// image : "butter_chicken_4.jpg"
	//}

  ],

  "TopRated":[

  	//{Category:"Veg_Main_Course",SubCategory:"Paneer_Chow-Chow",Ind:0}

  ],

	"menu" : {


		"Drinks" : {


			"Lemonade" : {
				"price" : [25],
				"category" : ["Veg","Drinks"],
				"image" : "makkhans_1.jpg"
			},

			"Coke" : {
				"price" : [25],
				"category" : ["Veg","Drinks"],
				"image" : "makkhans_1.jpg"
			},
		},

		"Non_Veg_Starters" : {


			"Chicken_Popcorn" : {
				"price" : [70],
				"category" : ["Non-Veg"],
				"image" : "makkhans_1.jpg"
			},

			"Crispy_Chicken" : {
				"price" : [80],
				"category" : ["Non-Veg"],
				"image" : "makkhans_1.jpg"
			},

			"Chicken_Chilli" : {
				"price" : [60],
				"category" : ["Non-Veg"],
				"image" : "makkhans_1.jpg"
			}
    },

		"Veg_Starters" : {


			"Cheese_Ball" : {
				"price" : [100],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},

			"Chilli_Potato" : {
				"price" : [60],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},

			"Golden_Baby_Corn" : {
				"price" : [60],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},

			"Thandi_Kheer" : {
				"price" : [50],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			}

		}
	}
}
/*
MongoClient.connect(mongourl,function(err,db){
	if(err)
	throw err;
	var dbo = db.db("khanabot");
	dbo.collection('restaurants').insert(makkhans,function(err,mres){
	  if(err)
	  throw err;
	  console.log("Wrote Your fucking object");
	});
});
*/

MongoClient.connect(mongourl,function(err,db){
	if(err)
	throw err;
	var dbo = db.db("khanabot");
	dbo.collection('restaurants').update({number:makkhans.number},{$set:{name:makkhans.name,rating:makkhans.rating,orders:makkhans.orders,
	"Location":makkhans.Location,availability:makkhans.availability,HotDeals:makkhans.HotDeals,TopRated:makkhans.TopRated,
	menu:makkhans.menu,image:makkhans.image,Offers:makkhans.Offers}},function(err,mres){
	  if(err)
	  throw err;
	  console.log("Wrote Your fucking object");
	});
	db.close();
	console.log(makkhans.menu);
});
