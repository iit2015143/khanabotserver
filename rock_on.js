var MongoClient = require('mongodb').MongoClient;
var mongourl = "mongodb://localhost:27017/";


var rock_on = {
	//"_id" : ObjectId("02"),
	"Location" : {
		"lat" : 25.430529,
		"long" : 81.766967
	},

	"Offers" : [/*{ "name" : "Free delivery", "image" : "spring_roll_1.jpg" }*/{"name":"","image":"rock_on_poster_2.jpg"}],
	"availability" : {
		"uptime" : 11,
		"downtime" : 23
	},
	"image":"rock_on_2.jpg",
	"number" : 9389521155,
	"feature" : "Value For Money",
	"name" : "Rockk Onn",
  	"rating":4.0,
  	"HotDeals":[
	{
		name:"Chicken_Biryani",
		price:[180],
		description:"Specifically for IIITA. Take it soon. Tandoor Paratha After 6 PM To 11 PM",
		image: "chicken_biryani_3.jpg"
	},

	{
		name:"Butter_Chicken",
		price:[300],
		description:"Specifically for IIITA. Take it soon.Tandoor Paratha After 6 PM To 11 PM",
		image : "butter_chicken_4.jpg"
	}

  ],

  "TopRated":[

  	{Category:"Veg_Main_Course",SubCategory:"Paneer_Chow-Chow",Ind:0}

  ],

	"menu" : {


		"Veg_Starters" : {

			"Veg_Pakoda_8pc" : {
				"price" : [80],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Onion_Pakoda_8pc" : {
				"price" : [100],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Paneer_Pakoda_8pc" : {
				"price" : [110],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Paneer_Cutlet_2pc" : {
				"price" : [150],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Veg_Spring_Roll" : {
				"price" : [120],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Chilli_Paneer_Roll" : {
				"price" : [150],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Sez_Roll" : {
				"price" : [130],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Veg_Roll" : {
				"price" : [70],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Chole_Bhature_2pc" : {
				"price" : [120],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Paav_Bhaji_2pc" : {
				"price" : [110],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Long_Chilli_Potato_(Dry)" : {
				"price" : [150],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Long_Chilli_Potato_(Gravy)" : {
				"price" : [180],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"French_Fries" : {
				"price" : [90],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Veg_Burger" : {
				"price" : [70],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Veg_Cheese_Burger" : {
				"price" : [90],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Veg_Paneer_Burger" : {
				"price" : [90],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"French_Fries" : {
				"price" : [90],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Honey_Chilli_Potato" : {
				"price" : [150],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Veg_Biryani" : {
				"price" : [140],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Golden_Baby_Corn" : {
				"price" : [120],
				"category" :["Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Cheese_Ball" : {
				"price" : [150],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Dry_Manchuriyan" : {
				"price" : [150],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Gravy_Manchuriyan" : {
				"price" : [180],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Golden_Mushroom" : {
				"price" : [140],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			}

		},

		"Non_Veg_Starters" : {

			"Chicken_Spring_Rolls" : {
				"price" : [150],
				"category" : ["Non-Veg","Starters","Rolls"],
				"image" : "starters_4.jpg"
			},

			"Chilli_Chicken_Dry" : {
				"price" : [180],
				"category" : ["Non-Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Chilli_Chicken_Gravy" : {
				"price" : [200],
				"category" : ["Non-Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Chicken_Lolly_Pop_4pc" : {
				"price" : [180],
				"category" : ["Non-Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			// "Chicken_Tak_Tak" : {
			// 	"price" : [160,300],
			// 	"category" : ["Non-Veg","Starters"],
			// 	"image" : "starters_4.jpg"
			// },

			"Fried_Chicken_4/8pc" : {
				"price" : [140,250],
				"category" : ["Non-Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Reshmi_Chicken_Tikka(Boneless)" : {
				"price" : [140,250],
				"category" : ["Non-Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Egg_Roll" : {
				"price" : [110],
				"category" : ["Non-Veg","Starters","Rolls"],
				"image" : "starters_4.jpg"
			},

			"Chicken_Roll" : {
				"price" : [120],
				"category" : ["Non-Veg","Starters","Rolls"],
				"image" : "starters_4.jpg"
			}

		},


		/*"Pizza" : {

			"Cheese_Onion_Tomato" : {
				"price" : [200],
				"category" : ["Non-Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Cheese_Onion_Capsicum" : {
				"price" : [220],
				"category" : ["Non-Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Cheese_Onion_Capsicum_Paneer" : {
				"price" : [230],
				"category" : ["Non-Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Cheese_Onion_Capsicum_Mushroom" : {
				"price" : [240],
				"category" : ["Non-Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Cheese_Onion_Sweet_Corn" : {
				"price" : [200],
				"category" : ["Non-Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Rockk_Onn_Special" : {
				"price" : [250],
				"category" : ["Non-Veg","Starters"],
				"image" : "starters_4.jpg"
			}

		},*/

		"Egg" : {

			"Egg_Curry" : {
				"price" : [120],
				"category" : ["Non-Veg","Egg"],
				"image" : "egg_bhurji_1.jpg"
			},

			"Egg_Masala" : {
				"price" : [120],
				"category" : ["Non-Veg","Egg"],
				"image" : "egg_bhurji_1.jpg"
			},

			"Egg_Bhujia" : {
				"price" : [80],
				"category" : ["Non-Veg","Egg"],
				"image" : "egg_bhurji_1.jpg"
			}

		},

		"Biryani" : {

			"Egg_Biryani" : {
				"price" : [140],
				"category" : ["Non-Veg","Rice"],
				"image" : "egg_bhurji_1.jpg"
			},

			"Mutton_Biryani_2/4_pc" : {
				"price" : [150,250],
				"category" : ["Non-Veg","Rice"],
				"image" : "egg_bhurji_1.jpg"
			},

			"Hyderabadi_Biryani_2/4_pc" : {
				"price" : [120,200],
				"category" : ["Non-Veg","Rice"],
				"image" : "egg_bhurji_1.jpg"
			},

			"Chicken_Biryani_2/4_pc" : {
				"price" : [100,180],
				"category" : ["Non-Veg","Rice"],
				"image" : "egg_bhurji_1.jpg"
			}


		},

		"Veg_Chinese" : {

			"Paneer_65_Dry" : {
				"price" : [150],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Paneer_65_Gravy" : {
				"price" : [180],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Veg_Noodles" : {
				"price" : [120],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Veg_Hakka_Noodles" : {
				"price" : [140],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Sez_Veg_Noodles" : {
				"price" : [150],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Veg_Singapore_Noodles" : {
				"price" : [150],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Veg_Chilli_Garlic_Noodles" : {
				"price" : [150],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Veg_Paneer_Noodles" : {
				"price" : [140],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Veg_Fried_Rice" : {
				"price" : [120],
				"category" : ["Veg","Chinese"],
				"image" : "rice_1.jpg"
			},


			"Veg_Paneer_Fried_Rice" : {
				"price" : [150],
				"category" : ["Veg","Chinese"],
				"image" : "rice_1.jpg"
			},

			"Veg_Singapore_Rice" : {
				"price" : [140],
				"category" : ["Veg","Chinese"],
				"image" : "rice_1.jpg"
			},

			"Sez_Veg_Fried_Rice" : {
				"price" : [150],
				"category" : ["Veg","Chinese"],
				"image" : "rice_1.jpg"
			},

			"Sez_Veg_Triple_Fried_Rice" : {
				"price" : [200],
				"category" : ["Veg","Chinese"],
				"image" : "rice_1.jpg"
			},

			// "Korian_Veg_Fried_Rice" : {
			// 	"price" : [150],
			// 	"category" : ["Veg","Chinese"],
			// 	"image" : "rice_1.jpg"
			// },

			// "American_Veg_Chopsy" : {
			// 	"price" : [160],
			// 	"category" : ["Veg","Chinese"],
			// 	"image" : "rice_1.jpg"
			// },

			"Veg_Manchurian_(Dry)" : {
				"price" : [160],
				"category" : ["Veg","Chinese"],
				"image" : "man_1.jpg"
			},

			"Veg_Manchurian_(Gravy)" : {
				"price" : [170],
				"category" : ["Veg","Chinese"],
				"image" : "man_1.jpg"
			},

			"Crispy_Veg_Hot_Garlic" : {
				"price" : [140],
				"category" : ["Veg","Chinese"],
				"image" : "rice_1.jpg"
			},

			"Crispy_Veg_Salt_And_Pepper" : {
				"price" : [130],
				"category" : ["Veg","Chinese"],
				"image" : "rice_1.jpg"
			},

			"Crispy_Veg_With_Lemon" : {
				"price" : [140],
				"category" : ["Veg","Chinese"],
				"image" : "rice_1.jpg"
			},

			"Crispy_Veg_With_Honey" : {
				"price" : [140],
				"category" : ["Veg","Chinese"],
				"image" : "rice_1.jpg"
			},

			"Chilli_Mushroom" : {
				"price" : [180],
				"category" : ["Veg","Chinese"],
				"image" : "rice_1.jpg"
			},

			"Chilli_Potato_Dry" : {
				"price" : [140],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},


			"Chilli_Potato_Gravy" : {
				"price" : [160],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Chilli_Paneer_Gravy" : {
				"price" : [190],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Chilli_Paneer_Dry" : {
				"price" : [160],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Veg_Maggi_Masala" : {
				"price" : [90],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Veg_Maggi_Cheese_Masala" : {
				"price" : [120],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			}
		},

		"Non_Veg_Chinese" : {

			"Chicken_65_(Dry)" : {
				"price" : [180],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},
			
			"Chicken_65_(Gravy)" : {
				"price" : [200],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},
			
			"Crispy_Chicken_In_Hot_Garlic" : {
				"price" : [180],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},
			
			"Crispy_Chicken_In_Hot_Lemon" : {
				"price" : [180],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Crispy_Chicken_Hot_Salt_&_Pepper" : {
				"price" : [180],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Crispy_Chicken_Hot_With_Honey" : {
				"price" : [200],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Chicken_Noodles" : {
				"price" : [160],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Chicken_Hakka_Noodles" : {
				"price" : [170],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Sez_Chicken_Noodles" : {
				"price" : [170],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Chicken_Singapore_Noodles" : {
				"price" : [170],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Chicken_Chilli_Garlic_Noodles" : {
				"price" : [170],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Chicken_Fried_Rice" : {
				"price" : [160],
				"category" : ["Non-Veg","Chinese"],
				"image" : "rice_1.jpg"
			},

			"Chicken_Singapore_Rice" : {
				"price" : [170],
				"category" : ["Non-Veg","Chinese"],
				"image" : "rice_1.jpg"
			},

			"Sez_Chicken_Fried_Rice" : {
				"price" : [180],
				"category" : ["Non-Veg","Chinese"],
				"image" : "rice_1.jpg"
			},

			"Sez_Chicken_Triple_Fried_Rice" : {
				"price" : [180],
				"category" : ["Non-Veg","Chinese"],
				"image" : "rice_1.jpg"
			},

			"Korian_Chicken_Fried_Rice" : {
				"price" : [180],
				"category" : ["Non-Veg","Chinese"],
				"image" : "rice_1.jpg"
			},

			// "American_Non_Veg_Chopsy" : {
			// 	"price" : [180],
			// 	"category" : ["Non-Veg","Chinese"],
			// 	"image" : "rice_1.jpg"
			// },

			"Chicken_Manchurian_Dry" : {
				"price" : [180],
				"category" : ["Non-Veg","Chinese"],
				"image" : "man_1.jpg"
			},

			"Chicken_Manchurian_Gravy" : {
				"price" : [200],
				"category" : ["Non-Veg","Chinese"],
				"image" : "man_1.jpg"
			},

			"Egg_Noodles" : {
				"price" : [140],
				"category" : ["Non-Veg","Chinese","Egg"],
				"image" : "veg_noodles_1.jpg"
			},

			"Egg_Fried_Rice" : {
				"price" : [150],
				"category" : ["Non-Veg","Chinese","Egg"],
				"image" : "veg_noodles_1.jpg"
			},

			"Garlic_Chicken" : {
				"price" : [170],
				"category" : ["Non-Veg","Chinese"],
				"image" : "chicken_masala_1.jpg"
			},

			"Ginger_Chicken" : {
				"price" : [170],
				"category" : ["Non-Veg","Chinese"],
				"image" : "chicken_masala_1.jpg"
			},

			"Fish_Finger_8pc" : {
				"price" : [260],
				"category" : ["Non-Veg","Chinese"],
				"image" : "chicken_masala_1.jpg"
			}

		},

		"Tandoor_Veg" : {


			"Paneer_Tikka" : {
				"price" : [180],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_tikka_1.jpg"
			},

			"Paneer_Achari_Tikka" : {
				"price" : [180],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_tikka_1.jpg"
			},

			// "Paneer_Malai_Tikka" : {
			// 	"price" : [200],
			// 	"category" : ["Veg","North_Indian"],
			// 	"image" : "paneer_tikka_1.jpg"
			// },

			"Potato_Roasted" : {
				"price" : [100],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_tikka_1.jpg"
			},

			"Potato_Achari_Tikka" : {
				"price" : [120],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_tikka_1.jpg"
			},

			"Mushroom_Tikka" : {
				"price" : [180],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_tikka_1.jpg"
			},

			"Roasted_Papad" : {
				"price" : [15],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_tikka_1.jpg"
			},

			"Hariyali_Paneer_Tikka" : {
				"price" : [170],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_tikka_1.jpg"
			}

		},

		"Tandoor_Non_Veg" : {


			"Tandoori_Chicken_4/8pc" : {
				"price" : [170,300],
				"category" : ["Non-Veg","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			},

			"Afgani_Chicken_4/8pc" : {
				"price" : [180,310],
				"category" : ["Non-Veg","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			},

			"Fish_Tikka_8" : {
				"price" : [250],
				"category" : ["Non-Veg","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			},

			"Chicken_Malai_Tikka" : {
				"price" : [220],
				"category" : ["Non-Veg","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			},

			"Chicken_Haryali_Tikka_Boneless" : {
				"price" : [220],
				"category" : ["Non-Veg","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			}
		},



		"Veg_Main_Course" : {


			"Paneer_Ginger" : {
				"price" : [160],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_matter_2.jpg"
			},

			"Paneer_Chow-Chow" : {
				"price" : [200],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_curry_1.jpg"
			},

			"Matar_Paneer" : {
				"price" : [160],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_matter_2.jpg"
			},

			"Shahi_Paneer" : {
				"price" : [200],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_shai_2.jpg"
			},

			"Kadhai_Paneer" : {
				"price" : [180],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_grakadai_paneer_2.jpg"
			},

			"Palak_Paneer" : {
				"price" : [170],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_palak_2.jpg"
			},

			"Paneer_Pasanda" : {
				"price" : [220],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_butter_masala_1.jpg"
			},

			"Paneer_Butter_Masala" : {
				"price" : [180],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_butter_masala_1.jpg"
			},

			// "Paneer_Begum_Bahar" : {
			// 	"price" : [220],
			// 	"category" : ["Veg","North_Indian"],
			// 	"image" : "matter_paneer_3.jpg"
			// },

			"Paneer_Lababdaar" : {
				"price" : [220],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy.jpg"
			},

			"Paneer_Kolhapuri" : {
				"price" : [240],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy.jpg"
			},
			"Paneer_Do_Pyaza" : {
				"price" : [180],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_do_1.jpg"
			},

			"Paneer_Korma" : {
				"price" : [240],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_korma_1.jpg"
			},

			"Chilli_Paneer" : {
				"price" : [190],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy.jpg"
			},

			"Paneer_Tadka_Masala" : {
				"price" : [200],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy.jpg"
			},

			// "Paneer_Makhni" : {
			// 	"price" : [200],
			// 	"category" : ["Veg","North_Indian"],
			// 	"image" : "paneer_gravy.jpg"
			// },

			// "Afgani_Paneer" : {
			// 	"price" : [220],
			// 	"category" : ["Veg","North_Indian"],
			// 	"image" : "aaloo_matter_1.jpg"
			// },

			"Hyderabadi_Paneer" : {
				"price" : [220],
				"category" : ["Veg","North_Indian"],
				"image" : "aaloo_matter_1.jpg"
			},

			"Paneer_Tikka_Masala" : {
				"price" : [240],
				"category" : ["Veg","North_Indian"],
				"image" : "aaloo_matter_1.jpg"
			},

			// "Paneer_Chaman_Bahaar" : {
			// 	"price" : [240],
			// 	"category" : ["Veg","North_Indian"],
			// 	"image" : "aaloo_matter_1.jpg"
			// },

			"Kaju_Paneer" : {
				"price" : [240],
				"category" : ["Veg","North_Indian"],
				"image" : "aaloo_matter_1.jpg"
			},

			"Paneer_Bhujia" : {
				"price" : [200],
				"category" : ["Veg","North_Indian"],
				"image" : "malai_kofta_1.jpg"
			},

			"Handi_Paneer" : {
				"price" : [200],
				"category" : ["Veg","North_Indian"],
				"image" : "malai_kofta_1.jpg"
			},

			// "Paneer_Maharaja" : {
			// 	"price" : [200],
			// 	"category" : ["Veg","North_Indian"],
			// 	"image" : "mushroom_1.jpg"
			// },

			"Matar_Mashroom" : {
				"price" : [240],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},

			"Mushroom_Kalezi" : {
				"price" : [250],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},

			"Mushroom_Rohganjosh" : {
				"price" : [250],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},

			"Mushroom_Tikka_Masala" : {
				"price" : [250],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},

			// "Mushroom_Baby_Corn" : {
			// 	"price" : [200],
			// 	"category" : ["Veg","North_Indian"],
			// 	"image" : "mushroom_1.jpg"
			// },

			"Mushroom_Baby_Corn_Curry" : {
				"price" : [200],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},

			"Mushroom_Do_Pyaza" : {
				"price" : [220],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},

			"Zeera_Alloo" : {
				"price" : [120],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},

			"Achari_Alloo" : {
				"price" : [130],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},

			// "Badshahi_Alloo" : {
			// 	"price" : [130],
			// 	"category" : ["Veg","North_Indian"],
			// 	"image" : "mushroom_1.jpg"
			// },

			// "Veg_Jalfrezi" : {
			// 	"price" : [140],
			// 	"category" : ["Veg","North_Indian"],
			// 	"image" : "mushroom_1.jpg"
			// },

			"Gobhi_Alloo" : {
				"price" : [140],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},

			"Hing_Dhaniya_Ke_Chatpate_Allo" : {
				"price" : [150],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},

			"Mix_Veg" : {
				"price" : [180],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},

			"Cheese_Kofta_(White_Gravy)" : {
				"price" : [250],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},

			"Cheese_Kofta_(Palak_Gravy)" : {
				"price" : [180],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},

			"Veg_Kofta" : {
				"price" : [180],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},

			"Shahi_Kofta" : {
				"price" : [200],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},

			"Malai_Kofta" : {
				"price" : [200],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			}
		},

		"Non_Veg_Main_Course" : {


			"Butter_Chicken_2/4pc" : {
				"price" : [170,300],
				"category" : ["Non-Veg","Chicken","North_Indian"],
				"image" : "butter_chicken_1.jpg"
			},

			"Kadahi_Chicken_2/4pc" : {
				"price" : [170,300],
				"category" : ["Non-Veg","Chicken","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			},

			"Handi_Chicken_2/4pc" : {
				"price" : [170,300],
				"category" : ["Non-Veg","Chicken","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			},

			"Chicken_DO_Pyaza_2/4pc" : {
				"price" : [170,300],
				"category" : ["Non-Veg","Chicken","North_Indian"],
				"image" : "Chicken_DO_Pyaza_1.jpg"
			},

			"Hydrabadi_Chicken_2/4pc" : {
				"price" : [170,300],
				"category" : ["Non-Veg","Chicken","North_Indian"],
				"image" : "butter_chicken_4.jpg"
			},

			"Kohlapuri_Chicken_2/4pc" : {
				"price" : [170,300],
				"category" : ["Non-Veg","Chicken","North_Indian"],
				"image" : "butter_chicken_4.jpg"
			},

			"Chicken_Korma_2/4pc" : {
				"price" : [170,300],
				"category" : ["Non-Veg","Chicken","North_Indian"],
				"image" : "butter_chicken_4.jpg"
			},

			"Chicken_Kali_Mirch_2/4pc" : {
				"price" : [180,320],
				"category" : ["Non-Veg","Chicken","North_Indian"],
				"image" : "butter_chicken_2.jpg"
			},

			/*"Chicken_Matka_2/4pc" : {
				"price" : [180,320],
				"category" : ["Non-Veg","Chicken","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			},*/

			"Chicken_Masala_2/4pc" : {
				"price" : [200,350],
				"category" : ["Non-Veg","Chicken","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			},

			"Chicken_Zanghezi_Boneless_4/8pc" : {
				"price" : [150,250],
				"category" : ["Non-Veg","Chicken","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			},

			"Fish_Curry_3/6pc" : {
				"price" : [260],
				"category" : ["Non-Veg","Chicken"],
				"image" : "fish_curry_2.jpg"
			},

			'Tomato_Fish' : {
				"price" : [280],
				"category" : ["Non-Veg","Chicken"],
				"image" : "fish_curry_2.jpg"
			}/*,

			"Chicken_Dahi_Murg" : {
				"price" : [170,300],
				"category" : ["Non-Veg","Chicken","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			},

			"Murg_Musakkam_(Order_Before_1_hr)" : {
				"price" : [700],
				"category" : ["Non-Veg","Chicken","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			}
			*/

		},


		"Kabab_Chicken" : {


			"Mutton_Shami_Kabab_2/4pc" : {
				"price" : [90,150],
				"category" : ["kabab","Veg","North_Indian"],
				"image" : "kabab_paneer_1.jpg"
			}
		},


		"Mutton" : {


			"Mutton_Korma_2/4_pc" : {
				"price" : [200,350],
				"category" : ["Mutton","Non-Veg","North_Indian"],
				"image" : "mutton_1.jpg"
			},

			"Mutton_Stew_2/4_pc" : {
				"price" : [170,320],
				"category" : ["Mutton","Non-Veg","North_Indian"],
				"image" : "mutton_1.jpg"
			},

			"Mutton_Masala_2/4_pc" : {
				"price" : [170,300],
				"category" : ["Mutton","Non-Veg","North_Indian"],
				"image" : "mutton_1.jpg"
			},

			"Handi_Mutton_2/4_pc" : {
				"price" : [170,300],
				"category" : ["Mutton","Non-Veg","North_Indian"],
				"image" : "mutton_1.jpg"
			},

			"Mutton_Do_Pyaza" : {
				"price" : [170,300],
				"category" : ["Mutton","Non-Veg","North_Indian"],
				"image" : "mutton_1.jpg"
			},

			"Kadhi_Mutton" : {
				"price" : [170,300],
				"category" : ["Mutton","Non-Veg","North_Indian"],
				"image" : "mutton_1.jpg"
			},

			"Mutton_Raganjosh" : {
				"price" : [170,300],
				"category" : ["Mutton","Non-Veg","North_Indian"],
				"image" : "mutton_1.jpg"
			},

			"Mutton_Keema" : {
				"price" : [150,250],
				"category" : ["Mutton","Non-Veg","North_Indian"],
				"image" : "mutton_1.jpg"
			}

		},


		"Bread" : {


			"Tandoori" : {
				"price" : [15],
				"category" : ["Indian_Bread"],
				"image" : "tandoori_roti_2.jpg",
				"availability" : {
					"uptime" : 18,
					"downtime" : 23
				}
			},

			"Butter_Tandoori_Roti" : {
				"price" : [20],
				"category" : ["Indian_Bread"],
				"image" : "tandoori_roti_2.jpg"
			},

			/*"Butter_Tandoori" : {
				"price" : [25],
				"category" : ["Indian_Bread"],
				"image" : "tandoori_roti_2.jpg",
				"availability" : {
					"uptime" : 18,
					"downtime" : 23
				}
			},*/

			"Tawa_Roti" : {
				"price" : [10],
				"category" : ["Indian_Bread"],
				"image" : "roti_1.jpg"
			},

			"Tawa_Butter_Roti" : {
				"price" : [15],
				"category" : ["Indian_Bread"],
				"image" : "roti_1.jpg"
			},

			"Naan" : {
				"price" : [25],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg",
				"availability" : {
					"uptime" : 18,
					"downtime" : 23
				}
			},

			"Butter_Naan" : {
				"price" : [30],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg",
				"availability" : {
					"uptime" : 18,
					"downtime" : 23
				}
			},

			"Garlic_Naan" : {
				"price" : [40],
				"category" : ["Indian_Bread"],
				"image" : "garlic_naan_1.jpg",
				"availability" : {
					"uptime" : 18,
					"downtime" : 23
				}
			},

			"Missi_Roti" : {
				"price" : [30],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg",
				"availability" : {
					"uptime" :11 ,
					"downtime" : 18
				}
			},

			"Stuffed_Naan" : {
				"price" : [50],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg",
				"availability" : {
					"uptime" :11 ,
					"downtime" : 18
				}
			},

			"Alloo_Paratha" : {
				"price" : [40],
				"category" : ["Indian_Bread"],
				"image" : "aalu_paratha_1.jpg"
			},

			"Paneer_Paratha" : {
				"price" : [50],
				"category" : ["Indian_Bread"],
				"image" : "paneer_paratha_1.jpg"
			},

			"Cheese_Paratha" : {
				"price" : [50],
				"category" : ["Indian_Bread"],
				"image" : "paneer_paratha_1.jpg"
			},

			"Onion_Paratha" : {
				"price" : [40],
				"category" : ["Indian_Bread"],
				"image" : "paneer_paratha_1.jpg"
			},

			// "Roomali_Roti" : {
			// 	"price" : [20],
			// 	"category" : ["Indian_Bread"],
			// 	"image" : "paneer_paratha_1.jpg"
			// },

			"Laccha_Paratha" : {
				"price" : [30],
				"category" : ["Indian_Bread"],
				"image" : "laccha_paratha_1.jpg",
				"availability" : {
					"uptime" : 18,
					"downtime" : 23
				}
			},

			/*"Nug_Naan" : {
				"price" : [35],
				"category" : ["Indian_Bread"],
				"image" : "laccha_paratha_1.jpg",
				"availability" : {
					"uptime" : 18,
					"downtime" : 23
				}
			},*/

			"Ginger_Naan" : {
				"price" : [50],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg",
				"availability" : {
					"uptime" : 18,
					"downtime" : 23
				}
			},

			"Plain_Paratha" : {
				"price" : [20],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg"
			}/*,


			"Rosted_Papad" : {
				"price" : [10],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg"
			}*/

		},

		"Dal" : {


			"Dal_Tadka" : {
				"price" : [150],
				"category" : ["Veg","North_Indian"],
				"image" : "dal_1.jpg"
			},

			"Dal_Fry" : {
				"price" : [140],
				"category" : ["Veg","North_Indian"],
				"image" : "dal_1.jpg"
			}/*,

			"Dal_Urad_Dry" : {
				"price" : [140],
				"category" : ["Veg","North_Indian"],
				"image" : "dal_makhani_1.jpg"
			},

			"Dal_Makhani" : {
				"price" : [160],
				"category" : ["Veg","North_Indian"],
				"image" : "dal_makhani_1.jpg"
			},

			"Moong_Dal" : {
				"price" : [140],
				"category" : ["Veg","North_Indian"],
				"image" : "dal_makhani_1.jpg"
			},

			"Shahi_Dal" : {
				"price" : [150],
				"category" : ["Veg","North_Indian"],
				"image" : "dal_makhani_1.jpg"
			},

			"Handi_Dal" : {
				"price" : [160],
				"category" : ["Veg","North_Indian"],
				"image" : "dal_makhani_1.jpg"
			}*/
		},

		"Rice" : {


			"Steamed_Rice" : {
				"price" : [70],
				"category" : ["Veg","Fried","Rice","North_Indian"],
				"image" : "rice_1.jpg"
			},

			"Zeera_Rice" : {
				"price" : [90],
				"category" : ["Veg","Fried","Rice","North_Indian"],
				"image" : "rice_1.jpg"
			},

			"Kaju_Pulav" : {
				"price" : [140],
				"category" : ["Veg","Fried","Rice","North_Indian"],
				"image" : "rice_pulav_1.jpg"

			},

			"Veg_Pulao" : {
				"price" : [120],
				"category" : ["Veg","Fried","Rice","North_Indian"],
				"image" : "rice_pulav_1.jpg"

			},

			/*"Kashmiri_Pulav" : {
				"price" : [110],
				"category" : ["Veg","Fried","Rice","North_Indian"],
				"image" : "rice_pulav_1.jpg"

			},

			"Navratna_Pulav" : {
				"price" : [110],
				"category" : ["Veg","Fried","Rice","North_Indian"],
				"image" : "rice_pulav_1.jpg"

			},*/

			// "Veg_Pulav" : {
			// 	"price" : [100],
			// 	"category" : ["Veg","Fried","Rice","North_Indian"],
			// 	"image" : "rice_pulav_1.jpg"

			// },

			"Paneer_Pulav" : {
				"price" : [120],
				"category" : ["Veg","Fried","Rice","North_Indian"],
				"image" : "rice_pulav_1.jpg"

			}/*,

			"Lemon_Rice" : {
				"price" : [90],
				"category" : ["Veg","Fried","Rice","North_Indian"],
				"image" : "rice_pulav_1.jpg"

			},

			"Peas_Pulav" : {
				"price" : [100],
				"category" : ["Veg","Fried","Rice","North_Indian"],
				"image" : "rice_pulav_1.jpg"

			}*/

		},

		"South_Indian" : {


			"Paper_Dosa" : {
				"price" : [60],
				"category" : ["Veg","South_Indian"],
				"image" : "dosa_3.jpg"
			},

			"Masala_Dosa" : {
				"price" : [100],
				"category" : ["Veg","South_Indian"],
				"image" : "masala_dosa_2.jpg"
			},

			"Paneer_Dosa" : {
				"price" : [140],
				"category" : ["Veg","South_Indian"],
				"image" : "masala_dosa_2.jpg"
			},

			"Onion_Dosa" : {
				"price" : [90],
				"category" : ["Veg","South_Indian"],
				"image" : "masala_dosa_2.jpg"
			},

			"Paneer_Dosa" : {
				"price" : [100],
				"category" : ["Veg","South_Indian"],
				"image" : "paneer_dosa_1.jpg"
			},

			"Paneer_Uttapam" : {
				"price" : [120],
				"category" : ["Veg","South_Indian"],
				"image" : "onion_Uttapam_6.jpg"
			},

			"Veg_Uttapam" : {
				"price" : [100],
				"category" : ["Veg","South_Indian"],
				"image" : "Uttapam_2.jpg"
			},

			// "Sambhar_Vada" : {
			// 	"price" : [70],
			// 	"category" : ["Veg","South_Indian"],
			// 	"image" : "Uttapam_3.jpg"
			// },


			"Idli_Sambhar" : {
				"price" : [70],
				"category" : ["Veg","South_Indian"],
				"image" : "dosa_3.jpg"
			},

			"Rice_Sambhar" : {
				"price" : [60],
				"category" : ["Veg","South_Indian"],
				"image" : "Uttapam_3.jpg"
			}
		},

		"Salad" : {


			"Green_Salad" : {
				"price" : [60],
				"category" : ["Veg","Salad"],
				"image" : "salad_1.jpg"
			},

			// "Onion_Salad" : {
			// 	"price" : [30],
			// 	"category" : ["Veg","Salad"],
			// 	"image" : "salad_1.jpg"
			// },

			"Kachumer_Salad" : {
				"price" : [60],
				"category" : ["Veg","Salad"],
				"image" : "salad_1.jpg"
			},

			// "Russion_Salad" : {
			// 	"price" : [90],
			// 	"category" : ["Veg","Salad"],
			// 	"image" : "salad_1.jpg"
			// },

			// "Macroni_Salad" : {
			// 	"price" : [70],
			// 	"category" : ["Veg","Salad"],
			// 	"image" : "salad_1.jpg"
			// },

			"Sirka_Pyaz" : {
				"price" : [20],
				"category" : ["Veg","Salad"],
				"image" : "salad_1.jpg"
			}
		},

		"Raita" : {


			"Mix_Veg_Raita" : {
				"price" : [70],
				"category" : ["Veg"],
				"image" : "raita_1.jpg"
			},

			"Pineapple_Raita" : {
				"price" : [90],
				"category" : ["Veg"],
				"image" : "raita_1.jpg"
			},

			"Kheera_Raita" : {
				"price" : [60],
				"category" : ["Veg"],
				"image" : "raita_1.jpg"
			},

			"Pudina_Raita" : {
				"price" : [60],
				"category" : ["Veg"],
				"image" : "raita_1.jpg"
			},

			"Boondi_Raita" : {
				"price" : [50],
				"category" : ["Veg"],
				"image" : "raita_1.jpg"
			}

		},

		"Soft_Drinks" : {

			"Cold_Drink" : {
				"price" : [35],
				"category" : ["Drinks"],
				"image" : "cold_drink_1.jpg"
			},

			/*"Mango_Shake" : {
				"price" : [60],
				"category" : ["Drinks"],
				"image" : "Drinks_1.jpg"
			},

			"Banana_Shake" : {
				"price" : [50],
				"category" : ["Drinks"],
				"image" : "Drinks_1.jpg"
			},

			"Strawberry_Shake" : {
				"price" : [55],
				"category" : ["Drinks"],
				"image" : "Drinks_1.jpg"

			},*/

			"Mineral_Water" : {
				"price" : [20],
				"category" : ["Drinks"],
				"image" : "Drinks_1.jpg"
			},

			

			"Cold_Coffee" : {
				"price" : [55],
				"category" : ["Drinks"],
				"image" : "cold_coffee_2.jpg"

			},

			"Lassi" : {
				"price" : [50],
				"category" : ["Drinks"],
				"image" : "lassi_1.jpg"
			},

			"Masala_Cold_Drink" : {
				"price" : [40],
				"category" : ["Drinks"],
				"image" : "lassi_1.jpg"
			},

			"Masala_Mattha" : {
				"price" : [50],
				"category" : ["Drinks"],
				"image" : "lassi_1.jpg"
			}/*,

			"Thandai" : {
				"price" : [45],
				"category" : ["Drinks"],
				"image" : "leamonade_1.jpg"

			},

			"Fresh_Juice" : {
				"price" : [55],
				"category" : ["Drinks"],
				"image" : "Drinks_1.jpg"
			},

			"Blue_Lagoon" : {
				"price" : [50],
				"category" : ["Drinks"],
				"image" : "Drinks_1.jpg"
			},

			"Blood_Lagoon" : {
				"price" : [50],
				"category" : ["Drinks"],
				"image" : "cold_coffee_1.jpg"

			}*/

		},

		"Hot_Drinks" : {

			"Lemon_Tea" : {
				"price" : [30],
				"category" : ["Drinks"],
				"image" : "hot_coffee_2.jpg"
			},

			"Hot_Coffee" : {
				"price" : [35],
				"category" : ["Drinks"],
				"image" : "cold_coffee_2.jpg"
			},

			"Tomato_Soup" : {
				"price" : [90],
				"category" : ["Drinks","Soup","Veg"],
				"image" : "Drinks_1.jpg"
			},

			"Manchow_Soup" : {
				"price" : [110],
				"category" : ["Drinks","Soup","Veg"],
				"image" : "Drinks_1.jpg"
			},

			"Hot_N_Sour" : {
				"price" : [120],
				"category" : ["Drinks","Soup","Veg"],
				"image" : "Drinks_1.jpg"
			},

			"Sweet_Corn_Soup" : {
				"price" : [130],
				"category" : ["Drinks","Soup","Veg"],
				"image" : "Drinks_1.jpg"
			},

			"Lemon_Corinder" : {
				"price" : [110],
				"category" : ["Drinks","Soup","Veg"],
				"image" : "Drinks_1.jpg"
			},

			"Vegetable_Soup" : {
				"price" : [120],
				"category" : ["Drinks","Soup","Veg"],
				"image" : "Drinks_1.jpg"
			},

			"Cream_Of_Chicken" : {
				"price" : [120],
				"category" : ["Drinks","Soup","Non-Veg"],
				"image" : "Drinks_1.jpg"
			},

			"Chicken_SWeet_Corn" : {
				"price" : [120],
				"category" : ["Drinks","Soup","Non-Veg"],
				"image" : "Drinks_1.jpg"
			},

			"Chicken_Manchow" : {
				"price" : [120],
				"category" : ["Drinks","Soup","Non-Veg"],
				"image" : "Drinks_1.jpg"
			},

			"Chicken_Hot_N_Sour" : {
				"price" : [120],
				"category" : ["Drinks","Soup","Non-Veg"],
				"image" : "Drinks_1.jpg"
			}

		},

		/*"Sweets" : {

			"Gulab_Jamun" : {
				"price" : [40],
				"category" : ["Veg","Sweets"],
				"image" : "sweets_1.jpg"
			},

			"Fruit_Cream" : {
				"price" : [55],
				"category" : ["Veg","Sweets"],
				"image" : "sweets_1.jpg"
			},

			"Rasgulla" : {
				"price" : [50],
				"category" : ["Veg","Sweets"],
				"image" : "sweets_1.jpg"
			},

			"Ras_Malai" : {
				"price" : [60],
				"category" : ["Veg","Sweets"],
				"image" : "sweets_1.jpg"
			}

		},*/


		"Dessert" : {

			"Rasgulla" : {
				"price" : [40],
				"category" : ["Veg","Dessert"],
				"image" : "dessert_4_1.jpg"
			},

			"Butter_Scotch" : {
				"price" : [60],
				"category" : ["Veg","Dessert"],
				"image" : "dessert_4_1.jpg"
			},

			"Vanila" : {
				"price" : [50],
				"category" : ["Veg","Dessert"],
				"image" : "dessert_4_1.jpg"
			},

			"Choclate" : {
				"price" : [65],
				"category" : ["Veg","Dessert"],
				"image" : "dessert_4_1.jpg"
			}

			/*"Strawberry" : {
				"price" : [55],
				"category" : ["Veg","Dessert"],
				"image" : "dessert_4_1.jpg"
			},

			"Pudding" : {
				"price" : [80],
				"category" : ["Veg","Dessert"],
				"image" : "dessert_4_1.jpg"
			}*/
		},





		// "Plates" : {


		// 	"1_Dal_+_1_Tamatar_Alloo_Gravy_+_1_Seasonable_Vegetable_+_4_Roti_+_Steamed_Rice_+_Onion_Salad" : {
		// 		"price" : [99],
		// 		"category" : ["Veg"],
		// 		"image" : "thali_1.jpg"
		// 	},

		// 	"1_Dal_Fry_+_1_Paneer_Vegetables_+_1_Tamatar/Matar_Alloo_Gravy_+_1_Seasonable_Vegetable_+_2_Tandoori_+_2_Tava_Roti_+_Zeera_Rice_+_Salad_+_Raita_" : {
		// 		"price" : [149],
		// 		"category" : ["Veg"],
		// 		"image" : "thali_2.jpg"
		// 	}
		// },

		"Hookah's_Regular_Flavour" : {


			"Duble_Apple" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},

			"Zafran_Paan" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},

			"Spring_Water" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},

			"Mint" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},

			"Orange" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},

			"Watermelon" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},

			"Grape" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},

			"Supari" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},

			"Maghai_Paan" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},

			"Strawberry" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},

			"Guava" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},

			"Cherry" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},

			"Cappuccino" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},

			"Bubble_Gum" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},

			"Choclate" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},

			"Cocktail" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			}

		},

		"Hookah's_Premium_Flavour" : {


			"Night_Queen" : {
				"price" : [300],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},

			"Blueberry" : {
				"price" : [300],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},

			"Kiwi_Blast" : {
				"price" : [300],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},

			"Kachchi_Kairy" : {
				"price" : [300],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},

			"Strawberry" : {
				"price" : [300],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},

			"Rose" : {
				"price" : [300],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			}

		}
	}
}

//console.log(rock_on);

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
