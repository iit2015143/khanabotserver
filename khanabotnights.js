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
	"deliversin":40,

	"Offers" : [{ "name" : "", "image" : "khanabotnightposter.png" }],
	"availability" : {
		"uptime" :20 ,
		"downtime" : 5
	},
	"image":"khanabotnight.jpg",
	"number" :9956837774 ,
	"feature" : "Value For Money",
	"name" : "Khanabot Nights",
  	"rating":4,
  	"HotDeals":[
	{
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
	}
  ],

  "TopRated":[
		{Category:"Recommended",SubCategory:"Egg_Bhurji_+_4_Paratha",Ind:0},
  	{Category:"Recommended",SubCategory:"Paneer_Bhurji_+_4_Paratha",Ind:0},
		{Category:"Paratha",SubCategory:"Paneer_Paratha_2pc",Ind:0},
		{Category:"Rolls",SubCategory:"Paneer_Roll",Ind:0}
  ],

	"menu" : {

		"Recommended" : {
			"Sandwich" : {
				"price" : [30],
				"category" : ["Veg"],
				"image" : "lemonade.jpg"
			},

			"Burger" : {
				"price" : [50],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			"Paneer_Bhurji" : {
				"price" : [60],
				"category" : ["Veg"],
				"image" : "lemonade.jpg"
			},
			"Paneer_Bhurji_+_4_Paratha" : {
				"price" : [80],
				"category" : ["Veg"],
				"image" : "paneer_bhurji_1.jpg"
			},
			"Egg_Bhurji_+_4_Paratha" : {
				"price" : [70],
				"category" : ["Non-Veg"],
				"image" : "egg_bhurji_1.jpg"
			},
			"Mix_Veg_+_4_Paratha" : {
				"price" : [70],
				"category" : ["Veg"],
				"image" : "paneer_bhurji_1.jpg"
			}
			// ,
			// "Veg_Keema_+_4_Paratha" : {
			// 	"price" : [70],
			// 	"category" : ["Veg"],
			// 	"image" : "paneer_bhurji_1.jpg"
			// }
		},

		"Sandwich":{
			"Sandwich" : {
				"price" : [30],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			"Grilled_Sandwich" : {
				"price" : [30],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			"Cheese_SandWich" : {
				"price" : [40],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			}
		},

		"Burgers":{
			"Burger" : {
				"price" : [50],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			"Chicken_Burger" : {
				"price" : [100],
				"category" : ["Non-Veg"],
				"image" : "makkhans_1.jpg"
			},
			"Egg_Burger" : {
				"price" : [70],
				"category" : ["Non-Veg"],
				"image" : "makkhans_1.jpg"
			}
		},

		"Rolls" : {


			"Veg_Roll" : {
				"price" : [40],
				"category" : ["Veg"],
				"image" : "lemonade.jpg"
			},

			"Paneer_Roll" : {
				"price" : [60],
				"category" : ["Veg"],
				"image" : "spring_roll_1.jpg"
			},
// ,
			// "Veg_Keema_+_4_Paratha" : {
			// 	"price" : [70],
			// 	"category" : ["Veg"],
			// 	"image" : "paneer_bhurji_1.jpg"
			// }
			"Cheese_Roll" : {
				"price" : [60],
				"category" : ["Veg"],
				"image" : "spring_roll_1.jpg"
			},

			"Egg_Roll" : {
				"price" : [50],
				"category" : ["Non-Veg"],
				"image" : "spring_roll_1.jpg"
			},

			"Chicken_Roll" : {
				"price" : [80],
				"category" : ["Non-Veg"],
				"image" : "spring_roll_1.jpg"
			}
		},

		"Paratha" : {


			"Aaloo_Paratha_2pc" : {
				"price" : [40],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},

			"Paneer_Paratha_2pc" : {
				"price" : [60],
				"category" : ["Veg"],
				"image" : "paneer_paratha_1.jpg"
			},

			"Gobhi_Paratha_2pc" : {
				"price" : [40],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			"Mooli_Paratha_2pc" : {
				"price" : [50],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			"Pyaz_Paratha_2pc" : {
				"price" : [40],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			"Egg_Paratha_1pc" : {
				"price" : [40],
				"category" : ["Non-Veg"],
				"image" : "makkhans_1.jpg"
			},
			"Plane_Paratha_2pc" : {
				"price" : [15],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			}
    },

		"Maggi" : {

			"Maggi_Plane" : {
				"price" : [25],
				"category" : ["Veg"],
				"image" : "lemonade.jpg"
			},

			"Maggi_Masala" : {
				"price" : [30],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			"Paneer_Maggi_Masala" : {
				"price" : [40],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},

			"Cheese_Maggi" : {
				"price" : [40],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},

			"Egg_Maggi" : {
				"price" : [40],
				"category" : ["Non-Veg"],
				"image" : "makkhans_1.jpg"
			},

			"Chicken_Maggi" : {
				"price" : [60],
				"category" : ["Non-Veg"],
				"image" : "makkhans_1.jpg"
			}
		},

		"Chinese" : {

			"Chilli_Potato" : {
				"price" : [60],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},

			"Chilli_Paneer" : {
				"price" : [100],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},

			"Golden_Fry_Babycorn" : {
				"price" : [60],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},

			"Crispy_Babycorn" : {
				"price" : [60],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			"Chilli_Babycorn" : {
				"price" : [60],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			"Gravy_Manchurian" : {
				"price" : [50],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			"Dry_Manchurian" : {
				"price" : [50],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			"Chowmin" : {
				"price" : [40],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			"Veg_Schezwan_Chowmin" : {
				"price" : [50],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			"Egg_Chowmin" : {
				"price" : [50],
				"category" : ["Non-Veg"],
				"image" : "makkhans_1.jpg"
			},
			"Chicken_Chowmin" : {
				"price" : [60],
				"category" : ["Non-Veg"],
				"image" : "makkhans_1.jpg"
			},
			"Chicken_Schezwan_Chowmin" : {
				"price" : [80],
				"category" : ["Non-Veg"],
				"image" : "makkhans_1.jpg"
			},
			"Macroni" : {
				"price" : [50],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			"Pasta" : {
				"price" : [60],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			"Chicken_Chilli" : {
				"price" : [80],
				"category" : ["Non-Veg"],
				"image" : "makkhans_1.jpg"
			},
			"Crispy_Chicken" : {
				"price" : [80],
				"category" : ["Non-Veg"],
				"image" : "makkhans_1.jpg"
			},
			"Chicken_65" : {
				"price" : [100],
				"category" : ["Non-Veg"],
				"image" : "makkhans_1.jpg"
			},

			"Chicken_Schezwan" : {
				"price" : [80],
				"category" : ["Non-Veg"],
				"image" : "makkhans_1.jpg"
			},

			"Chicken_Hot_Garlic" : {
				"price" : [80],
				"category" : ["Non-Veg"],
				"image" : "makkhans_1.jpg"
			}
		},

		"Rice" : {

			"Veg_Fried_Rice" : {
				"price" : [50],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			"Veg_Schezwan_Fried_Rice" : {
				"price" : [60],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			"Veg_Singapuri_Fried_Rice" : {
				"price" : [65],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			"Veg_Hongkong_Fried_Rice" : {
				"price" : [65],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			"Chicken_Fried_Rice" : {
				"price" : [70],
				"category" : ["Non-Veg"],
				"image" : "makkhans_1.jpg"
			},
			"Chicken_Schezwan_Fried_Rice" : {
				"price" : [80],
				"category" : ["Non-Veg"],
				"image" : "makkhans_1.jpg"
			},
			"Chicken_Garlic_Rice" : {
				"price" : [80],
				"category" : ["Non-Veg"],
				"image" : "makkhans_1.jpg"
			},
			"Chicken_Schezwan_+_Triple_Rice" : {
				"price" : [150],
				"category" : ["Non-Veg"],
				"image" : "makkhans_1.jpg"
			}
		},

		"Roti" : {

			"Roti" : {
				"price" : [5],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			"Plane_Paratha" : {
				"price" : [6],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			"Butter_Roti" : {
				"price" : [8],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			}
		},


		"Biryani" : {


			"Veg_Pulao_+_Matar_Gravy" : {
				"price" : [70],
				"category" : ["Veg"],
				"image" : "lemonade.jpg"
			},

			"Hyderabadi_Biryani" : {
				"price" : [100],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},

			"Veg_Biryani" : {
				"price" : [80],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},

			"Chicken_Biryani" : {
				"price" : [70,110],
				"category" : ["Non-Veg"],
				"image" : "makkhans_1.jpg"
			},

			"Hyderabadi_Chicken_Biryani" : {
				"price" : [80,120],
				"category" : ["Non-Veg"],
				"image" : "makkhans_1.jpg"
			}
		},

		"Gravy" : {

			"Chicken_Curry" : {
				"price" : [120],
				"category" : ["Non-Veg"],
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
	dbo.collection('restaurants').update({number:makkhans.number},{$set:{name:makkhans.name,rating:makkhans.rating,
	"Location":makkhans.Location,availability:makkhans.availability,HotDeals:makkhans.HotDeals,TopRated:makkhans.TopRated,
	menu:makkhans.menu,image:makkhans.image,Offers:makkhans.Offers,admin:makkhans.admin,status:makkhans.status,deliversin:
makkhans.deliversin}},
	function(err,mres){
	  if(err)
	  throw err;
	  console.log("Wrote Your fucking object");
	});
	db.close();
	console.log(makkhans.menu);
});
