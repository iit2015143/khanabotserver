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

	"Offers" : [{ "name" : "", "image" : "khanabotnightposter.png" }],
	"availability" : {
		"uptime" :20,
		"downtime" : 5
	},
	"image":"khanabotnight.jpg",
	"number" :7988576314 ,
	"feature" : "Value For Money",
	"name" : "Khanabot Groceries",
  	"rating":3.8,
  	"HotDeals":[
	{
		name:"Pineapple Cake",
		price:[349],
		description:"Specifically for IIITA. Take it soon. Tandoor Paratha After 6 PM To 11 PM",
		image: "pineapple.jpg"
	},

	{
		name:"Strawberry Cake",
		price:[349],
		description:"Specifically for IIITA. Take it soon.Tandoor Paratha After 6 PM To 11 PM",
		image : "strawberry.jpg"
	}
  ],

  "TopRated":[
  	{Category:"Bakers_Table_Cakes",SubCategory:"Chocolate_Truffle",Ind:0},
		{Category:"Bakers_Table_Cakes",SubCategory:"Chocolate_Mousse",Ind:0}  ],

	"menu" : {

		"Bakers_Table_Cakes": {


			"Pineapple" : {
				"price" : [349],
				"category" : ["Veg"],
				"image" : "lemonade.jpg"
			},

			"Strawberry" : {
				"price" : [349],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			"Blueberry" : {
				"price" : [379],
				"category" : ["Veg"],
				"image" : "lemonade.jpg"
			},
			"Orange" : {
				"price" : [379],
				"category" : ["Veg"],
				"image" : "paneer_bhurji_1.jpg"
			},
			"Kiwi" : {
				"price" : [379],
				"category" : ["Veg"],
				"image" : "paneer_bhurji_1.jpg"
			},
			"Mango" : {
				"price" : [379],
				"category" : ["Veg"],
				"image" : "paneer_bhurji_1.jpg"
			},
			"Butterscotch" : {
				"price" : [379],
				"category" : ["Veg"],
				"image" : "paneer_bhurji_1.jpg"
			},
			"Fruit_Cake" : {
				"price" : [399],
				"category" : ["Veg"],
				"image" : "paneer_bhurji_1.jpg"
			},
			"Red_Velvet" : {
				"price" : [429],
				"category" : ["Veg"],
				"image" : "paneer_bhurji_1.jpg"
			},
			"Chocolate_Truffle" : {
				"price" : [429],
				"category" : ["Veg"],
				"image" : "chocolatetruffle.jpg"
			},
			"Chocolate_Mousse" : {
				"price" : [429],
				"category" : ["Veg"],
				"image" : "chocolatemousse.jpg"
			},
			"Black_Forest" : {
				"price" : [419],
				"category" : ["Veg"],
				"image" : "paneer_bhurji_1.jpg"
			},
			"White_Forest" : {
				"price" : [419],
				"category" : ["Veg"],
				"image" : "paneer_bhurji_1.jpg"
			},
			"Paan_Cake(special order)" : {
				"price" : [540],
				"category" : ["Veg"],
				"image" : "paneer_bhurji_1.jpg"
			},
			"Rasmalai_Cake(special order)" : {
				"price" : [600],
				"category" : ["Veg"],
				"image" : "paneer_bhurji_1.jpg"
			}
		},

		"Bakers_Table_Tea_Cakes" : {

			"Orange_Cake_1/2_pound" : {
				"price" : [250],
				"category" : ["Veg"],
				"image" : "lemonade.jpg"
			},
      "Orange_Cake_1_1/2_pound" : {
				"price" : [600],
				"category" : ["Veg"],
				"image" : "lemonade.jpg"
			},
      "Banana_Cake_1/2_pound" : {
				"price" : [250],
				"category" : ["Veg"],
				"image" : "lemonade.jpg"
			},
      "Banana_Cake_1_1/2_pound" : {
				"price" : [600],
				"category" : ["Veg"],
				"image" : "lemonade.jpg"
			},
      "Wheat_Cake_1/2_pound" : {
				"price" : [250],
				"category" : ["Veg"],
				"image" : "lemonade.jpg"
			},
      "Wheat_Cake_1_1/2_pound" : {
				"price" : [600],
				"category" : ["Veg"],
				"image" : "lemonade.jpg"
			},
      "Dates&Walnut_Cake_1/2_pound" : {
				"price" : [250],
				"category" : ["Veg"],
				"image" : "lemonade.jpg"
			},
      "Dates&Walnut_Cake_1_1/2_pound" : {
				"price" : [600],
				"category" : ["Veg"],
				"image" : "lemonade.jpg"
			},
      "Christmas_Cake_1/2_pound" : {
				"price" : [300],
				"category" : ["Veg"],
				"image" : "lemonade.jpg"
			},
      "Christmas_Cake_1_1/2_pound" : {
				"price" : [650],
				"category" : ["Veg"],
				"image" : "lemonade.jpg"
			},
      "Pound_Cake_1/2_pound" : {
				"price" : [300],
				"category" : ["Veg"],
				"image" : "lemonade.jpg"
			},
      "Pound_Cake_1_1/2_pound" : {
				"price" : [650],
				"category" : ["Veg"],
				"image" : "lemonade.jpg"
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
	dbo.collection('restaurants').update({number:makkhans.number},{$set:{name:makkhans.name,rating:makkhans.rating,orders:
    makkhans.orders,
	"Location":makkhans.Location,availability:makkhans.availability,HotDeals:makkhans.HotDeals,TopRated:makkhans.TopRated,
	menu:makkhans.menu,image:makkhans.image,Offers:makkhans.Offers,admin:makkhans.admin,status:makkhans.status}},
	function(err,mres){
	  if(err)
	  throw err;
	  console.log("Wrote Your fucking object");
	});
	db.close();
	console.log(makkhans.menu);
});