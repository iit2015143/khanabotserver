var MongoClient = require('mongodb').MongoClient;
var mongourl = "mongodb://localhost:27017/";


var spices = {
	//"_id" : ObjectId("02"),
	"Location" : {
		"lat" : 25.430529,
		"long" : 81.766967
	},

	"orders":[],

	"status":"on",
	"admin":"on",

	"Offers" : [/*{ "name" : "", "image" : "khanabotnightposter.png" }*/],
	"availability" : {
		"uptime" :10 ,
		"downtime" : 22
	},
	"image":"spices.jpg",
	"number" :7355125077,
	"feature" : "Value For Money",
	"name" : "5 Spices",
  	"rating":3.8,
  	"HotDeals":[
	/*{
		name:"Sandwich",
		price:[30],
		description:"Specifically for IIITA. Take it soon. Tandoor Paratha After 6 PM To 11 PM",
		image: "veg_sandwich_1.jpg"
	},

	{
		name:"Burger",
		price:[50],
		description:"Specifically for IIITA. Take it soon.Tandoor Paratha After 6 PM To 11 PM",
		image : "veg_burger_1.jpg"
	},
	{
		name:"Aaloo_Paratha_2pc",
		price:[40],
		description:"Specifically for IIITA. Take it soon.Tandoor Paratha After 6 PM To 11 PM",
		image : "aalu_paratha_1.jpg"
	}*/
  ],

  "TopRated":[
  	/*{Category:"In_Demand",SubCategory:"Paneer_Bhurji_+_4_Paratha",Ind:0},
		{Category:"Paratha",SubCategory:"Paneer_Paratha_2pc",Ind:0},
		{Category:"Rolls",SubCategory:"Paneer_Roll",Ind:0}*/
  ],

	"menu" : {

		"Starter_And_Snacks" : {


			"Gobhi Chilli" : {
				"price" : [45],
				"category" : ["Veg"],
				"image" : "spices.jpg"
			},


			"Veg_Manchurian" : {
				"price" : [40],
				"category" : ["Veg"],
				"image" : "spices.jpg"
			},
			
			"Paneer_Chilly" : {
				"price" : [65],
				"category" : ["Veg"],
				"image" : "spices.jpg"
			},
			
			"Paneer_Manchurian" : {
				"price" : [70],
				"category" : ["Veg"],
				"image" : "spices.jpg"
			},
			
			"Paneer_Dragon_Chilly" : {
				"price" : [90],
				"category" : ["Veg"],
				"image" : "spices.jpg"
			},
			
			"Mix_Veg_Pakora" : {
				"price" : [75],
				"category" : ["Veg"],
				"image" : "spices.jpg"
			}
		},

		"Non_Veg_Starters" : {


			"Chicken_Chilly" : {
				"price" : [80],
				"category" : ["Non-Veg"],
				"image" : "spices.jpg"
			},

			"Chicken_Manchurian" : {
				"price" : [85],
				"category" : ["Non-Veg"],
				"image" : "spices.jpg"
			},
			
			"Chilly_Dragon" : {
				"price" : [95],
				"category" : ["Non-Veg"],
				"image" : "spices.jpg"
			},
			
			"Chicken_Sauthee" : {
				"price" : [115],
				"category" : ["Non-Veg"],
				"image" : "spices.jpg"
			},
			
			"Chicken_Afgani_Chilli" : {
				"price" : [130],
				"category" : ["Non-Veg"],
				"image" : "spices.jpg"
			},
			
			"Chicken_Seekh_Fry" : {
				"price" : [95],
				"category" : ["Non-Veg"],
				"image" : "spices.jpg"
			}
			

		},

		"China_ki_Peshkash" : {


			"Veg_Chowmine" : {
				"price" : [50],
				"category" : ["Veg"],
				"image" : "spices.jpg"
			},


			"Non_Veg_Chomwmine" : {
				"price" : [70],
				"category" : ["Non-Veg"],
				"image" : "spices.jpg"
			},
			

			"Egg_Chowmine" : {
				"price" : [60],
				"category" : ["Non-Veg"],
				"image" : "spices.jpg"
			},
			
			"Veg_Roll" : {
				"price" : [40],
				"category" : ["Veg"],
				"image" : "spices.jpg"
			},
			
			"Egg_Roll" : {
				"price" : [30],
				"category" : ["Non-Veg"],
				"image" : "spices.jpg"
			},
			
			"Chicken_Calcuta_Roll" : {
				"price" : [60],
				"category" : ["Non-Veg"],
				"image" : "spices.jpg"
			},
			
			"Chicken_Krispy_Roll" : {
				"price" : [75],
				"category" : ["Non-Veg"],
				"image" : "spices.jpg"
			},
			
			"Veg_Chilly_Roll" : {
				"price" : [60],
				"category" : ["Veg"],
				"image" : "spices.jpg"
			},
			
			"Non_Veg_Chilli_Roll" : {
				"price" : [75],
				"category" : ["Non-Veg"],
				"image" : "spices.jpg"
			},
			
			"Veg_Fried_Rice" : {
				"price" : [45],
				"category" : ["Veg"],
				"image" : "spices.jpg"
			},
			
			"Non_Veg_Fried_Rice" : {
				"price" : [60],
				"category" : ["Non-Veg"],
				"image" : "spices.jpg"
			},
			
			"Egg_Fried_Rice" : {
				"price" : [50],
				"category" : ["Non-Veg"],
				"image" : "spices.jpg"
			}
			

		},

		"Veg_Main_Course" : {


			"Kadai_Paneer" : {
				"price" : [130],
				"category" : ["Veg"],
				"image" : "spices.jpg"
			},

			"Kadai_Vegetable" : {
				"price" : [100],
				"category" : ["Veg"],
				"image" : "spices.jpg"
			},
			
			"Veg_Handi" : {
				"price" : [110],
				"category" : ["Veg"],
				"image" : "spices.jpg"
			},
			
			"Paneer_Masala" : {
				"price" : [130],
				"category" : ["Veg"],
				"image" : "spices.jpg"
			},
			
			"Paneer_Matter_Masala" : {
				"price" : [145],
				"category" : ["Veg"],
				"image" : "spices.jpg"
			},
			
			"Dal_Fry" : {
				"price" : [40],
				"category" : ["Veg"],
				"image" : "spices.jpg"
			},
			
			"Dal_Tadka" : {
				"price" : [65],
				"category" : ["Veg"],
				"image" : "spices.jpg"
			}
		},

		"Non_Veg_Main_course" : {


			"Chicken_Masala" : {
				"price" : [140,250],
				"category" : ["Non-Veg"],
				"image" : "spices.jpg"
			},
			
			"Chicken_Hydrabadi" : {
				"price" : [160,300],
				"category" : ["Non-Veg"],
				"image" : "spices.jpg"
			},
			
			"Chicken_Nawabi_Masala" : {
				"price" : [130,250],
				"category" : ["Non-Veg"],
				"image" : "spices.jpg"
			},
			
			"Chicken_Kadai" : {
				"price" : [150,280],
				"category" : ["Non-Veg"],
				"image" : "spices.jpg"
			},
			
			"Chicken_Butter" : {
				"price" : [180,330],
				"category" : ["Non-Veg"],
				"image" : "spices.jpg"
			}
		},

		"Basmati_Ki_Khushboo" : {


			"Regular_Biryani" : {
				"price" : [50,90],
				"category" : ["Veg","Rice"],
				"image" : "spices.jpg"
			},

			"Murg_Matka_Biryani" : {
				"price" : [120],
				"category" : ["Non-Veg","Rice"],
				"image" : "spices.jpg"
			},
			
			"Chicken_Seek_Biryani" : {
				"price" : [100],
				"category" : ["Non-Veg","Rice"],
				"image" : "spices.jpg"
			},
			
			"Veg_Biryani" : {
				"price" : [50],
				"category" : ["Veg","Rice"],
				"image" : "spices.jpg"
			},
			
			"Egg_Biryani" : {
				"price" : [70],
				"category" : ["Non-Veg","Rice"],
				"image" : "spices.jpg"
			}
		},

		"Roti_Ki_Tokri" : {


			"Tawa_Roti" : {
				"price" : [7],
				"category" : ["Bread"],
				"image" : "spices.jpg"
			},
			
			"Butter_Tawa_Roti" : {
				"price" : [10],
				"category" : ["Bread"],
				"image" : "spices.jpg"
			},
			
			"Tandoori_Roti" : {
				"price" : [10],
				"category" : ["Bread"],
				"image" : "spices.jpg",
				"availability" : {
					"uptime" : 18,
					"downtime" : 22
				}
			},
			
			"Butter_Tandoori_Roti" : {
				"price" : [10],
				"category" : ["Bread"],
				"image" : "spices.jpg",
				"availability" : {
					"uptime" : 18,
					"downtime" : 22
				}
			},
			
			"Naan" : {
				"price" : [12],
				"category" : ["Bread"],
				"image" : "spices.jpg",
				"availability" : {
					"uptime" : 18,
					"downtime" : 22
				}
			},
			
			"Butter_Naan" : {
				"price" : [15],
				"category" : ["Bread"],
				"image" : "spices.jpg",
				"availability" : {
					"uptime" : 18,
					"downtime" : 22
				}
			},

			"Kulcha" : {
				"price" : [15],
				"category" : ["Bread"],
				"image" : "spices.jpg",
				"availability" : {
					"uptime" : 18,
					"downtime" : 22
				}
			},
			
			"Butter_Kulcha" : {
				"price" : [20],
				"category" : ["Bread"],
				"image" : "spices.jpg"
			},
			
			"Muglai_Paratha" : {
				"price" : [10],
				"category" : ["Bread"],
				"image" : "spices.jpg"
			}

		},

		"Ande_Ka_Fanda" : {


			"Egg_Masala_2pc" : {
				"price" : [50],
				"category" : ["Non-Veg"],
				"image" : "spices.jpg"
			},

			"Egg_Kadai_2pc" : {
				"price" : [60],
				"category" : ["Non-Veg"],
				"image" : "spices.jpg"
			},
			
			"Egg_Omlete_2pc" : {
				"price" : [35],
				"category" : ["Non-Veg"],
				"image" : "spices.jpg"
			},
			
			"Egg_Bhurgi_2pc" : {
				"price" : [45],
				"category" : ["Non-Veg"],
				"image" : "spices.jpg"
			}
		},

		"Hot_Coffe_&_Tea" : {


			"Tandoori_Tea" : {
				"price" : [10],
				"category" : ["Drinks"],
				"image" : "spices.jpg"
			},

			"Chocolate_Tea" : {
				"price" : [15],
				"category" : ["Drinks"],
				"image" : "spices.jpg"
			},
			
			"Chocolate_Coffee" : {
				"price" : [25],
				"category" : ["Drinks"],
				"image" : "spices.jpg"
			},
			
			"Hot_Bournvita" : {
				"price" : [15],
				"category" : ["Drinks"],
				"image" : "spices.jpg"
			},
			
			"Hot_Bournvita_Coffee" : {
				"price" : [25],
				"category" : ["Drinks"],
				"image" : "spices.jpg"
			}
		}

		

	}
}
/*
MongoClient.connect(mongourl,function(err,db){
	if(err)
	throw err;
	var dbo = db.db("khanabot");
	dbo.collection('restaurants').insert(spices,function(err,mres){
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
	dbo.collection('restaurants').update({number:spices.number},{$set:{name:spices.name,rating:spices.rating,
	"Location":spices.Location,availability:spices.availability,HotDeals:spices.HotDeals,TopRated:spices.TopRated,
	menu:spices.menu,image:spices.image,Offers:spices.Offers,admin:spices.admin,status:spices.status}},
	function(err,mres){
	  if(err)
	  throw err;
	  console.log("Wrote Your fucking object");
	});
	db.close();
	console.log(spices.menu);
});
