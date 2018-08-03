//var MongoClient = require('mongodb').MongoClient;
//var mongourl = "mongodb://localhost:27017/";


var rc = {
	//"_id" : ObjectId("02"),
	"Location" : {
		"lat" : 25.430529,
		"long" : 81.766967
	},

	"availability" : {
		"uptime" : 12,
		"downtime" : 22
	},

	"number" : 8574418045,
	"feature" : "Value For Money",
	"name" : "Food Of Heaven",
    "rating":3.5,


  "HotDeals":[
	{
		name:"Chilli_Potato",
		price:[50],
		description:"Specifically for IIITA. Take it soon. Tandoor Paratha After 6 PM To 11 PM",
		image: "paneer_paratha_1.jpg"
	}

  ],

  "TopRated":[

  {Category:"Egg",SubCategory:"Egg_Curry_2pc",Ind:0},
  {Category:"Gravy",SubCategory:"Paneer_Butter_Masala",Ind:1}

  ],

	"menu" : {


		"Drinks" : {


			"Lassi" : {
				"price" : [35],
				"category" : ["Drinks"],
				"image" : "lassi_1.jpg"
			},

			"Cold_Drink" : {
				"price" : [25],
				"category" : ["Drinks"],
				"image" : "cold_drink_1.jpg"
			},

			"Gulab_Jamun" : {
				"price" : [12],
				"category" : ["Sweets"],
				"image" : "cold_drink_1.jpg"
			}

		},

		"Mocktail" : {

			"Lemon" : {
				"price" : [30],
				"category" : ["Drinks"],
				"image" : "lemonade_1.jpg"
			},

			"Mango" : {
				"price" : [30],
				"category" : ["Drinks"],
				"image" : "Drinks_1.jpg"
			},

			"Orange" : {
				"price" : [30],
				"category" : ["Drinks"],
				"image" : "Drinks_1.jpg"
			},

			"Litchi" : {
				"price" : [30],
				"category" : ["Drinks"],
				"image" : "drinks_2.jpg"
			},

			"Masala_Soda" : {
				"price" : [30],
				"category" : ["Drinks"],
				"image" : "Drinks_1.jpg"
			},

			"Cola" : {
				"price" : [30],
				"category" : ["Drinks"],
				"image" : "Drinks_1.jpg"
			}
		},

		"Non_Vegetarian" : {


			"Chicken_Masala" : {
				"price" : [90,170,310],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			},

			"Chicken_Curry" : {
				"price" : [90,170,310],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "chicken_curry_1.jpg"
			},

			"Butter_Chicken" : {
				"price" : [90,170,320],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_1.jpg"
			},

			"Chicken_DO_Pyaza" : {
				"price" : [90,210,390],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "Chicken_DO_Pyaza_1.jpg"
			},

			"Kadhai_Chicken" : {
				"price" : [90,170,310],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_4.jpg"
			},

			"Handi_Chicken" : {
				"price" : [180,340],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			},

			"Chicken_korma" : {
				"price" : [90,170,300],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_2.jpg"
			},

			"Chicken_Kali_Mirchi" : {
				"price" : [190,360],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_2.jpg"
			},

			"Chicken_Mughlai" : {

				"price" : [210,390],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_2.jpg"
			},

			"Shai_Chicken" : {
				"price" : [90,170,310],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_2.jpg"
			},

			"Bhuna_Chicken" : {
				"price" : [90,180,340],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			},

			"Chicken_Hariyali" : {
				"price" : [90,180,330],
				"category" : ["Non-veg","Chicken"],
				"image" : "fish_curry_1.jpg"
			},

			"Chicken_Panjabi" : {
				"price" : [90,210,390],
				"category" : ["Non-veg","Chicken"],
				"image" : "fish_curry_2.jpg"
			},

			"Chicken_Biryani" : {
				"price" : [50,80],
				"category" : ["Non-veg","Chicken"],
				"image" : "chicken_masala_1.jpg"
			},

			"Chicken_Fry" : {
				"price" : [90,160,290],
				"category" : ["Non-veg","Chicken"],
				"image" : "fish_curry_2.jpg"
			},
			"Roasted_Chicken" : {
				"price" : [150,280],
				"category" : ["Non-veg","Chicken"],
				"image" : "fish_curry_2.jpg"
			},
			"Chicken_Lollypop_2pc" : {
				"price" : [100],
				"category" : ["Non-veg","Chicken"],
				"image" : "fish_curry_2.jpg"
			},

		},

		"Egg" : {

			"Egg_Curry_2pc" : {
				"price" : [70],
				"category" : ["Non-Veg","North_Indian","Egg"],
				"image" : "paneer_grakadai_paneer_2.jpg"
			},

			"Egg_Bhujia_2pc" : {
				"price" : [50],
				"category" : ["Non-Veg","North_Indian","Egg"],
				"image" : "paneer_butter_masala_1.jpg"
			},

			"Omlete" : {
				"price" : [45],
				"category" : ["Non-Veg","North_Indian","Egg"],
				"image" : "paneer_matter_2.jpg"
			}
		},

		"Gravy" : {

			"Kadhai_Paneer" : {
				"price" : [140,270],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_grakadai_paneer_2.jpg"
			},

			"Paneer_Butter_Masala" : {
				"price" : [140,260],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_butter_masala_1.jpg"
			},

			"Matar_Paneer" : {
				"price" : [120,230],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_matter_2.jpg"
			},

			"Shahi_Paneer" : {
				"price" : [120,220],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_shai_2.jpg"
			},

			"Khowa_Paneer" : {
				"price" : [150,280],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy.jpg"
			},

			"Kaju_Paneer" : {
				"price" : [150,290],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy.jpg"
			}

		},

		
		"Chinese" : {


			"Veg_Chawmein" : {
				"price" : [70,110],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Veg_Manchurian_Noodles" : {
				"price" : [70,130],
				"category" : ["Veg","Chinese"],
				"image" : "spring_roll_3.jpg"
			},

			"Veg_Manchurian_Rice" : {
				"price" : [80,150],
				"category" : ["Veg","Chinese"],
				"image" : "spring_roll_1.jpg"
			},

			"Veg_Fried_Rice" : {
				"price" : [60,130],
				"category" : ["Veg","Chinese"],
				"image" : "momos_1.jpg"
			},

			"Veg_Manchurian" : {
				"price" : [70,120],
				"category" : ["Veg","Chinese"],
				"image" : "momos_2.jpg"
			},

			"Veg_Pasta" : {
				"price" : [65,120],
				"category" : ["Veg","Chinese","Pasta"],
				"image" : "veg_noodles_1.jpg"
			},

			"Veg_Manchurian_Pasta" : {
				"price" : [90,150],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Hakka_Noddles" : {
				"price" : [70,130],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Chilli Potota" : {
				"price" : [50,90],
				"category" : ["Veg","Chinese"],
				"image" : "man_3.jpg"
			},

			"Chilli_Paneer" : {
				"price" : [90,160],
				"category" : ["Veg","Chinese"],
				"image" : "man_1.jpg"
			},

			"Chicken_Chowmein" : {
				"price" : [90,170],
				"category" : ["Non-Veg","Chinese"],
				"image" : "man_2.jpg"
			},

			"Chicken_Manchurian_Noodles" : {
				"price" : [100,180],
				"category" : ["Non-Veg","Chinese"],
				"image" : "man_3.jpg"
			},

			"Chicken_Fried_Rice" : {
				"price" : [90,170],
				"category" : ["Non-Veg","Chinese"],
				"image" : "garlic_chicken_1.jpg"
			},

			"Chicken_Manchurian_Rice" : {
				"price" : [110,210],
				"category" : ["Non-Veg","Chinese"],
				"image" : "garlic_chicken_1.jpg"
			},

			"Chicken_Pasta" : {
				"price" : [90,160],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Chicken_Manchurian_Pasta" : {
				"price" : [110,200],
				"category" : ["Non-Veg","Chinese"],
				"image" : "garlic_chicken_1.jpg"
			},

			"Chicken_Manchurian" : {
				"price" : [90,170],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Chilli_Chicken" : {
				"price" : [130,250],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Egg_Chowmein" : {
				"price" : [70,130],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Egg_Fried_Rice" : {
				"price" : [75,140],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Egg_Pasta" : {
				"price" : [80,130],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Chicken_Egg_Chowmein" : {
				"price" : [110,200],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Chicken_Egg_Fried_Rice" : {
				"price" : [110,210],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			}
		},

		"Rolls" : {


			"Chicken_Egg_Roll" : {
				"price" : [90],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Chicken_Roll" : {
				"price" : [80],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Kabab_Roll" : {
				"price" : [65],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Egg_Roll" : {
				"price" : [60],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Potota_Roll" : {
				"price" : [50],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Veg_Burger" : {
				"price" : [50],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Chicken_Burger" : {
				"price" : [70],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},


		},


		"Muttion" : {


			"Mutton_Curry" : {
				"price" : [140,270],
				"category" : ["Non-Veg","Mutton"],
				"image" : "soup_2.jpg"
			},

			"Kadhai_Mutton" : {
				"price" : [150,290],
				"category" : ["Non-Veg","Mutton"],
				"image" : "soup_2.jpg"
			},
			
			"Masala_Mutton" : {
				"price" : [150,280],
				"category" : ["Non-Veg","Mutton"],
				"image" : "soup_2.jpg"
			},
			
			"Mutton_Rogan_Josh" : {
				"price" : [160,310],
				"category" : ["Non-Veg","Mutton"],
				"image" : "soup_2.jpg"
			},
			
			"Butter_Mutton" : {
				"price" : [160,310],
				"category" : ["Non-Veg","Mutton"],
				"image" : "soup_2.jpg"
			},
			
			"Mutton_Do_Pyaza" : {
				"price" : [180,330],
				"category" : ["Non-Veg","Mutton"],
				"image" : "soup_2.jpg"
			},
			
			"Mattar_Mutton" : {
				"price" : [150,280],
				"category" : ["Non-Veg","Mutton"],
				"image" : "soup_2.jpg"
			}
		},

		"Rice" : {


			"Plain_Rice" : {
				"price" : [50,90],
				"category" : ["Veg","Rice","North_Indian"],
				"image" : "rice_1.jpg"
			},

			"Jeera_Rice" : {
				"price" : [60,110],
				"category" : ["Veg","Fries","Rice","North_Indian"],
				"image" : "rice_1.jpg"
			}

		},

		"Roti" : {


			"Paratha" : {
				"price" : [10],
				"category" : ["Indian_Bread"],
				"image" : "roti_1.jpg"
			},

			"Butter_Roti" : {
				"price" : [15],
				"category" : ["Indian_Bread"],
				"image" : "roti_1.jpg"
			}

		}

	}
}

console.log(foh);

/*MongoClient.connect(mongourl,function(err,db){
	if(err)
	throw err;
	var dbo = db.db("khanabot");
	dbo.collection('restaurants').insert(foh,function(err,mres){
	  if(err)
	  throw err;
	  console.log("Wrote Your fucking object");
	});
});
*/
