var MongoClient = require('mongodb').MongoClient;
var mongourl = "mongodb://localhost:27017/";


var foh = {
	//"_id" : ObjectId("02"),
	"Location" : {
		"lat" : 25.430529,
		"long" : 81.766967
	},
	"availability":{
		"uptime":11,
		"downtime":5
	},
	"image":"launcher.png",
	"Offers":[{"name":"Free delivery from FOH","image":"spring_roll_1.jpg"},{"name":"Night Delivery from FOH","image":"spring_roll_2.jpg"}],
	"number" : 7488663497,
	"feature" : "Value For Money",
	"name" : "Food Of Heaven",
  	"rating":3.5,
  	"HotDeals":[{name:"Tandoor Paneer Paratha",price:[45],description:"Specifically for IIITA. Take it soon",
	"image":"launcher.png"},
  	{name:"Tandoor Aaloo Paratha",price:[40],description:"Specifically for IIITA. Take it soon",
	"image":"launcher.png"},
  	{name:"Paneer Kofta",price:[150],description:"Specifically for IIITA. Take it soon",
	"image":"launcher.png"},
  	{name:"Mutton Kabab",price:[250],description:"Specifically for IIITA. Take it soon",
	"image":"launcher.png"}],

  	"TopRated":[{Category:"Inde_Spice",SubCategory:"Chicken_Curry",Ind:0},
  	{Category:"Inde_Spice",SubCategory:"Chicken_Masala",Ind:1},
  	{Category:"Drinks",SubCategory:"Coffee_Hot",Ind:0},
  	{Category:"Drinks",SubCategory:"Coffee_Cold",Ind:0},
  	{Category:"Sandwich",SubCategory:"Cheese_Sandwich",Ind:0}],

	"menu" : {
		"Drinks" : {
			"Coffee_Hot" : {
				"price":[30],
				"category":["Drinks"],
				"image":"launcher.png"
			},
      "Coffee_Cold" : {
				"price":[70],
				"category":["Drinks"],
				"image":"launcher.png"
			},
      "Coffee_with_Icecream" : {
				"price":[80],
				"category":["Drinks"],
				"availability":{
					"uptime":11,
					"downtime":18
				},
				"image":"launcher.png"
			},
      "Sweet_Lassi" : {
				"price":[50],
				"category":["Drinks"],
				"image":"launcher.png"
			},
		},

    "Sandwich" : {
			"Veg_Sandwich" : {
				"price":[50],
				"category":["Sandwich"],
				"image":"launcher.png"
			},
	    "Cheese_Sandwich" : {
				"price":[80],
				"category":["Sandwich"],
				"image":"launcher.png"
			},
	    "Grilled_Sandwich_Veg" : {
				"price":[100],
				"category":["Sandwich"],
				"image":"launcher.png"
			}
		},

		"Inde_Spice" : {
			"Chicken_Masala" : {
				"price":[170,290],
				"category":["Chicken","Non-veg"],
				"image":"launcher.png"
			},
      "Chicken_Curry" : {
				"price":[160,290],
				"category":["Chicken","Non-veg"],
				"image":"launcher.png"
			},
        "Butter_Chicken" : {
					"price":[190,300],
					"category":["Chicken","Non-veg"],
					"image":"launcher.png"
				},
      "Chicken_Do_Pyaza" : {
				"price":[185,290],
				"category":["Chicken","Non-veg"],
				"image":"launcher.png"
			}
		}
	}
}
//console.log(foh);

MongoClient.connect(mongourl,function(err,db){
    if(err)
    throw err;
    var dbo = db.db("khanabot");
		dbo.collection('restaurants').update({"number":7488663497},{$set:{"rating":foh.rating,"name":"Testing Restaurant","menu":foh.menu,"image":"launcher.png",
availability:foh.availability,Offers:[],HotDeals:[],TopRated:[]}},function(err,mres){
      if(err)
      throw err;
      console.log("Wrote Your fucking object");
    });
   db.close();
});
