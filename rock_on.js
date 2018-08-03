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
	"image":"rock_on_2.jpg",
	"number" : 9389521155,
	"feature" : "Value For Money",
	"name" : "Rockk Onn",
  	"rating":4,
  	"HotDeals":[
	{
		name:"Chicken_Biryani",
		price:[110],
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

  	{Category:"Veg_Main_Course",SubCategory:"Rockk_Onn_Special_Paneer",Ind:0}
 
  ],

	"menu" : {


		"Veg_Starters" : {

			"Veg_Pakoda_8pc" : {
				"price" : [80],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Paneer_Pakoda_8pc" : {
				"price" : [35],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},
						
			"Veg_Spring_Roll" : {
				"price" : [90],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},
						
			"Chilli_Potato_(Dry/Gravy)" : {
				"price" : [120],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},
						
			"Finger_Chips" : {
				"price" : [90],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},
						
			"Chilli_Paneer_Dry" : {
				"price" : [120],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},
						
			"Honey_Chilli_Potato" : {
				"price" : [120],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},
						
			"Paneer_65" : {
				"price" : [130],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},
						
			"Cripsy_Veg_Salt_&_Pepper" : {
				"price" : [130],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},
						
			"Golden_Baby_Corn" : {
				"price" : [120],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},
						
			"Paneer_Cube" : {
				"price" : [120],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},
						
			"Veg_Kabab" : {
				"price" : [100],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},
						
			"Singapuri_Gobhi" : {
				"price" : [110],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},
						
			"Golden_Brokey" : {
				"price" : [35],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},
						
			"Kathi_Kabab" : {
				"price" : [110],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},
						
			"Cheese_Ball" : {
				"price" : [140],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},
						
			"Dry_Manchuriyan" : {
				"price" : [120],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},
						
			"Cabbage_kisbi" : {
				"price" : [80],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},
						
			"Golden_Mushroom" : {
				"price" : [120],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},
						
			"Long_Chilli_Potato" : {
				"price" : [110],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},
						
			"Butter_Potato" : {
				"price" : [120],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},
						
			"Housing_Paneer_Masala" : {
				"price" : [120],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},
						
			"Corn_Cheese_Roll" : {
				"price" : [35],
				"category" : ["Veg","Starters","Rolls"],
				"image" : "starters_4.jpg"
			},
						
			"Veg_Ciggar" : {
				"price" : [120],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},
						
			"Veg_Roll" : {
				"price" : [35],
				"category" : ["Veg","Starters","Rolls"],
				"image" : "starters_4.jpg"
			},
						
			"Double_Cheese" : {
				"price" : [140],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Veg_Biryani" : {
				"price" : [90],
				"category" : ["Veg","Starters"],
				"image" : "biryani_1.jpg"
			}
			
		},

		"Non_Veg_Starters" : {

			"Chicken_Spring_Rolls" : {
				"price" : [130],
				"category" : ["Non-Veg","Starters","Rolls"],
				"image" : "starters_4.jpg"
			},

			"Chilli_Chicken" : {
				"price" : [180],
				"category" : ["Non-Veg","Starters"],
				"image" : "starters_4.jpg"
			},
			
			"Chicken_Lolly_Pop_4pc" : {
				"price" : [80],
				"category" : ["Non-Veg","Starters"],
				"image" : "starters_4.jpg"
			},
			
			"Chicken_Tak_Tak" : {
				"price" : [240],
				"category" : ["Non-Veg","Starters"],
				"image" : "starters_4.jpg"
			},
			
			"Rooasted_4pc" : {
				"price" : [130,250],
				"category" : ["Non-Veg","Starters"],
				"image" : "starters_4.jpg"
			},
			
			"Fried_Chicken_4pc" : {
				"price" : [260],
				"category" : ["Non-Veg","Starters"],
				"image" : "starters_4.jpg"
			},
			
			"Reshmi_Chicken_Tikka(Boneless)" : {
				"price" : [260],
				"category" : ["Non-Veg","Starters"],
				"image" : "starters_4.jpg"
			},
			
			"Chicken_65" : {
				"price" : [180],
				"category" : ["Non-Veg","Starters"],
				"image" : "starters_4.jpg"
			},
			
			"Chicken_In_Hot_Garlic" : {
				"price" : [180],
				"category" : ["Non-Veg","Starters"],
				"image" : "starters_4.jpg"
			},
			
			"Crispy_Chicken_In_Hot_Garlic" : {
				"price" : [180],
				"category" : ["Non-Veg","Starters"],
				"image" : "starters_4.jpg"
			},
			
			"Crispy_Chicken_In_Hot_Lemon" : {
				"price" : [180],
				"category" : ["Non-Veg","Starters"],
				"image" : "starters_4.jpg"
			},
			
			"Crispy_Chicken_Hot_Salt_&_Pepper" : {
				"price" : [180],
				"category" : ["Non-Veg","Starters"],
				"image" : "starters_4.jpg"
			},
			
			"Crispy_Chicken_Hot_With_Honey" : {
				"price" : [200],
				"category" : ["Non-Veg","Starters"],
				"image" : "starters_4.jpg"
			},
			
			"Fish_Fingure" : {
				"price" : [220],
				"category" : ["Non-Veg","Starters"],
				"image" : "starters_4.jpg"
			},
			
			"Cocktail_Fish_Fingure" : {
				"price" : [80],
				"category" : ["Non-Veg","Starters"],
				"image" : "starters_4.jpg"
			},
			
			"Tandoori_Seek_Mutton_Kabab" : {
				"price" : [150],
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
			},
			
			"Cheese_Onion_Tomato" : {
				"price" : [150],
				"category" : ["Non-Veg","Starters"],
				"image" : "starters_4.jpg"
			},
			
			"Cheese_Onion_Capsicum" : {
				"price" : [180],
				"category" : ["Non-Veg","Starters"],
				"image" : "starters_4.jpg"
			},
			
			"Cheese_Onion_Capsicum_Paneer" : {
				"price" : [200],
				"category" : ["Non-Veg","Starters"],
				"image" : "starters_4.jpg"
			},
			
			"Cheese_Onion_Capsicum_Mushroom" : {
				"price" : [200],
				"category" : ["Non-Veg","Starters"],
				"image" : "starters_4.jpg"
			},
			
			"Cheese_Onion_Sweet_Corn" : {
				"price" : [180],
				"category" : ["Non-Veg","Starters"],
				"image" : "starters_4.jpg"
			},
			
			"Rockk_Onn_Special" : {
				"price" : [180],
				"category" : ["Non-Veg","Starters"],
				"image" : "starters_4.jpg"
			}

		},

		"Egg" : {

			"Egg_Curry" : {
				"price" : [120],
				"category" : ["Non-Veg","Egg"],
				"image" : "egg_bhurji_1.jpg"
			},
			
			"Egg_Masala" : {
				"price" : [100],
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
				"price" : [110],
				"category" : ["Non-Veg","Rice"],
				"image" : "egg_bhurji_1.jpg"
			},

			"Mutton_Biryani" : {
				"price" : [120,220],
				"category" : ["Non-Veg","Rice"],
				"image" : "egg_bhurji_1.jpg"
			},

			"Chicken_Biryani" : {
				"price" : [60,110],
				"category" : ["Non-Veg","Rice"],
				"image" : "egg_bhurji_1.jpg"
			}


		},

		"Veg_Chinese" : {


			"Veg_Noodles" : {
				"price" : [70,120],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Veg_Hakka_Noodles" : {
				"price" : [80,140],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Sez_Veg_Noodles" : {
				"price" : [80,140],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Veg_Singapore_Noodles" : {
				"price" : [80,140],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Veg_Chilli_Garlic_Noodles" : {
				"price" : [80,140],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Veg_Fried_Rice" : {
				"price" : [70,120],
				"category" : ["Veg","Chinese"],
				"image" : "rice_1.jpg"
			},

			"Veg_Singapore_Rice" : {
				"price" : [70,120],
				"category" : ["Veg","Chinese"],
				"image" : "rice_1.jpg"
			},

			"Sez_Veg_Fried_Rice" : {
				"price" : [70,140],
				"category" : ["Veg","Chinese"],
				"image" : "rice_1.jpg"
			},

			"Sez_Veg_Triple_Fried_Rice" : {
				"price" : [70,140],
				"category" : ["Veg","Chinese"],
				"image" : "rice_1.jpg"
			},

			"Korian_Veg_Fried_Rice" : {
				"price" : [80,150],
				"category" : ["Veg","Chinese"],
				"image" : "rice_1.jpg"
			},

			"American_Veg_Chopsy" : {
				"price" : [80,160],
				"category" : ["Veg","Chinese"],
				"image" : "rice_1.jpg"
			},

			"Veg_Manchurian" : {
				"price" : [70,140],
				"category" : ["Veg","Chinese"],
				"image" : "man_1.jpg"
			},

			"Chilli_Mushroom" : {
				"price" : [90,160],
				"category" : ["Veg","Chinese"],
				"image" : "rice_1.jpg"
			},

			"Veg_Maggi_Masala" : {
				"price" : [90],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Veg_Maggi_Cheese_Masala" : {
				"price" : [110],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			}
		},

		"Non_Veg_Chinese" : {


			"Chicken_Noodles" : {
				"price" : [90,160],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Chicken_Hakka_Noodles" : {
				"price" : [90,170],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Sez_Chicken_Noodles" : {
				"price" : [90,170],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Chicken_Singapore_Noodles" : {
				"price" : [90,170],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Chicken_Chilli_Garlic_Noodles" : {
				"price" : [90,170],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Chicken_Fried_Rice" : {
				"price" : [90,160],
				"category" : ["Non-Veg","Chinese"],
				"image" : "rice_1.jpg"
			},

			"Chicken_Singapore_Rice" : {
				"price" : [90,170],
				"category" : ["Non-Veg","Chinese"],
				"image" : "rice_1.jpg"
			},

			"Sez_Chicken_Fried_Rice" : {
				"price" : [90,180],
				"category" : ["Non-Veg","Chinese"],
				"image" : "rice_1.jpg"
			},

			"Sez_Chicken_Triple_Fried_Rice" : {
				"price" : [90,180],
				"category" : ["Non-Veg","Chinese"],
				"image" : "rice_1.jpg"
			},

			"Korian_Chicken_Fried_Rice" : {
				"price" : [90,180],
				"category" : ["Veg","Non-Chinese"],
				"image" : "rice_1.jpg"
			},

			"American_Non_Veg_Chopsy" : {
				"price" : [90,180],
				"category" : ["Non-Veg","Chinese"],
				"image" : "rice_1.jpg"
			},

			"Chicken_Manchurian" : {
				"price" : [90,180],
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
			}
		},
		
		"Tandoor_Veg" : {


			"Paneer_Tikka" : {
				"price" : [140],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_tikka_1.jpg"
			},

			"Paneer_Achari_Tikka" : {
				"price" : [140],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_tikka_1.jpg"
			},

			"Paneer_Malai_Tikka" : {
				"price" : [140],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_tikka_1.jpg"
			},

			"Potato_Roasted" : {
				"price" : [100],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_tikka_1.jpg"
			},

			"Achari_Tikka" : {
				"price" : [120],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_tikka_1.jpg"
			},

			"Mushroom_Tikka" : {
				"price" : [140],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_tikka_1.jpg"
			},

			"Roasted_Pineapple" : {
				"price" : [140],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_tikka_1.jpg"
			},

			"Veg_Seek_Kabad" : {
				"price" : [120],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_tikka_1.jpg"
			},

			"Hariyali_Paneer_Tikka" : {
				"price" : [140],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_tikka_1.jpg"
			}

		},

		"Tandoor_Non_Veg" : {


			"Tandoori_Chicken" : {
				"price" : [130,250],
				"category" : ["Non-Veg","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			},

			"Afgani_Chicken" : {
				"price" : [150,280],
				"category" : ["Non-Veg","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			},
			
			"Fish_Tikka" : {
				"price" : [200],
				"category" : ["Non-Veg","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			},
			
			"Chicken_Kali_Mirch" : {
				"price" : [190],
				"category" : ["Non-Veg","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			},
			
			"Chicken_Kolhapuri" : {
				"price" : [200],
				"category" : ["Non-Veg","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			},
			
			"Chicken_Dahi_Cahsuniya" : {
				"price" : [200],
				"category" : ["Non-Veg","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			},
			
			"Rara_Chicken" : {
				"price" : [240],
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

			"Rockk_Onn_Special_Paneer" : {
				"price" : [160],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_curry_1.jpg"
			},

			"Matar_Paneer" : {
				"price" : [150],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_matter_2.jpg"
			},

			"Shahi_Paneer" : {
				"price" : [180],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_shai_2.jpg"
			},

			"Kadhai_Paneer" : {
				"price" : [160],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_grakadai_paneer_2.jpg"
			},

			"Palak_Paneer" : {
				"price" : [160],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_palak_2.jpg"
			},

			"Paneer_Pasanda" : {
				"price" : [180],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_butter_masala_1.jpg"
			},

			"Paneer_Butter_Masala" : {
				"price" : [180],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_butter_masala_1.jpg"
			},

			"Paneer_Begum_Bahar" : {
				"price" : [200],
				"category" : ["Veg","North_Indian"],
				"image" : "matter_paneer_3.jpg"
			},

			"Paneer_Lababdaar" : {
				"price" : [180],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy.jpg"
			},

			"Paneer_Kolhapuri" : {
				"price" : [190],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy.jpg"
			},
			"Paneer_Do_Pyaza" : {
				"price" : [160],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_do_1.jpg"
			},

			"Paneer_Korma" : {
				"price" : [160],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_korma_1.jpg"
			},

			"Chilli_Paneer" : {
				"price" : [170],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy.jpg"
			},

			"Paneer_Tadka_Masala" : {
				"price" : [150],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy.jpg"
			},

			"Paneer_Makhni" : {
				"price" : [180],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy.jpg"
			},

			"Afgani_Paneer" : {
				"price" : [180],
				"category" : ["Veg","North_Indian"],
				"image" : "aaloo_matter_1.jpg"
			},

			"Hyderabadi_Paneer" : {
				"price" : [180],
				"category" : ["Veg","North_Indian"],
				"image" : "aaloo_matter_1.jpg"
			},

			"Paneer_Tikka_Masala" : {
				"price" : [190],
				"category" : ["Veg","North_Indian"],
				"image" : "aaloo_matter_1.jpg"
			},

			"Paneer_Chaman_Bahaar" : {
				"price" : [180],
				"category" : ["Veg","North_Indian"],
				"image" : "aaloo_matter_1.jpg"
			},

			"Kaju_Paneer" : {
				"price" : [200],
				"category" : ["Veg","North_Indian"],
				"image" : "aaloo_matter_1.jpg"
			},

			"Paneer_Bhujia" : {
				"price" : [170],
				"category" : ["Veg","North_Indian"],
				"image" : "malai_kofta_1.jpg"
			},

			"Handi_Paneer" : {
				"price" : [180],
				"category" : ["Veg","North_Indian"],
				"image" : "malai_kofta_1.jpg"
			},

			"Paneer_Maharaja" : {
				"price" : [160],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},

			"Matar_Mashroom" : {
				"price" : [160],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},

			"Mushroom_Kalezi" : {
				"price" : [160],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},
			
			"Mushroom_Rohganjosh" : {
				"price" : [170],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},
			
			"Mushroom_Tikka_Masala" : {
				"price" : [170],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},
			
			"Mushroom_Baby_Corn" : {
				"price" : [160],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},
			
			"Mushroom_Baby_Corn_Curry" : {
				"price" : [180],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},
			
			"Mushroom_Do_Pyaza" : {
				"price" : [180],
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
			
			"Badshahi_Alloo" : {
				"price" : [130],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},
			
			"Veg_Jalfrezi" : {
				"price" : [140],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},
			
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
				"price" : [160],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},
			
			"Cheese_Kofta" : {
				"price" : [180],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},
			
			"Veg_Kofta" : {
				"price" : [160],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},
			
			"Shahi_Kofta" : {
				"price" : [180],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},
			
			"Malai_Kofta" : {
				"price" : [160],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},
			
			"Tang_Kofta" : {
				"price" : [160],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			}
		},

		"Non_Veg_Main_Course" : {


			"Butter_Chicken_4pc" : {
				"price" : [160,300],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_1.jpg"
			},

			"Kadahi_Chicken_4pc" : {
				"price" : [150,280],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			},

			"Handi_Chicken_4pc" : {
				"price" : [150,280],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			},

			"Chicken_DO_Pyaza_4pc" : {
				"price" : [160,300],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "Chicken_DO_Pyaza_1.jpg"
			},

			"Hydrabadi_Chicken_4pc" : {
				"price" : [150,280],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_4.jpg"
			},

			"Afgani_Chicken_4pc" : {
				"price" : [150,280],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_4.jpg"
			},

			"Kohlapuri_Chicken_4pc" : {
				"price" : [150,280],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_4.jpg"
			},

			"Chicken_Korma_4pc" : {
				"price" : [160,300],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_4.jpg"
			},

			"Chicken_Kali_Mirch_4pc" : {
				"price" : [170,320],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_2.jpg"
			},

			"Chicken_Matka_4pc" : {
				"price" : [170,320],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			},

			"Chicken_Masala_4pc" : {
				"price" : [170,320],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			},
			
			"Chicken_Tikka_Masala_8pc" : {
				"price" : [110,200],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			},

			"Fish_Tikka_Masala_6pc" : {
				"price" : [180],
				"category" : ["Non-veg","Chicken"],
				"image" : "fish_curry_1.jpg"
			},

			"Fish_Curry_6pc" : {
				"price" : [130,240],
				"category" : ["Non-veg","Chicken"],
				"image" : "fish_curry_2.jpg"
			},

			'Tomato_Fish' : {
				"price" : [260],
				"category" : ["Non-veg","Chicken"],
				"image" : "fish_curry_2.jpg"
			},

			"Chicken_Dahi_Murg" : {
				"price" : [280],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			},

			"Murg_Musakkam_(Order_Before_1_hr)" : {
				"price" : [700],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			}

		},

		
		"Kabab_Chicken" : {


			"Mutton_Shami_Kabab_4pc" : {
				"price" : [200],
				"category" : ["kabab","Veg","North_Indian"],
				"image" : "kabab_paneer_1.jpg"
			},

			"Chicken_Handi" : {
				"price" : [280],
				"category" : ["kabab","Non-Veg","North_Indian"],
				"image" : "kabab_2.jpg"
			},
			
			"Chicken_Kadhai" : {
				"price" : [280],
				"category" : ["kabab","Non-Veg","North_Indian"],
				"image" : "kabab_2.jpg"
			}
		},


		"Mutton" : {


			"Mutton_Korma" : {
				"price" : [250],
				"category" : ["Mutton","Non-Veg","North_Indian"],
				"image" : "mutton_1.jpg"
			},

			"Mutton_Stew" : {
				"price" : [240],
				"category" : ["Mutton","Non-Veg","North_Indian"],
				"image" : "mutton_1.jpg"
			},
			
			"Mutton_Masala" : {
				"price" : [240],
				"category" : ["Mutton","Non-Veg","North_Indian"],
				"image" : "mutton_1.jpg"
			},
			
			"Handi_Mutton" : {
				"price" : [250],
				"category" : ["Mutton","Non-Veg","North_Indian"],
				"image" : "mutton_1.jpg"
			},

			"Mutton_Do_Pyaza" : {
				"price" : [250],
				"category" : ["Mutton","Non-Veg","North_Indian"],
				"image" : "mutton_1.jpg"
			},

			"Kadhi_Mutton" : {
				"price" : [250],
				"category" : ["Mutton","Non-Veg","North_Indian"],
				"image" : "mutton_1.jpg"
			},

			"Mutton_Raganjosh" : {
				"price" : [260],
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

			"Butter_Tandoori" : {
				"price" : [20],
				"category" : ["Indian_Bread"],
				"image" : "tandoori_roti_2.jpg",
				"availability" : {
					"uptime" : 18,
					"downtime" : 23
				}
			},

			"Tawa_Roti" : {
				"price" : [10],
				"category" : ["Indian_Bread"],
				"image" : "roti_1.jpg"
			},

			"Naan" : {
				"price" : [30],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg",
				"availability" : {
					"uptime" : 18,
					"downtime" : 23
				}
			},

			"Butter_Naan" : {
				"price" : [35],
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
				"price" : [20],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg",
				"availability" : {
					"uptime" :11 ,
					"downtime" : 18
				}
			},

			"Stuff_Naan" : {
				"price" : [40],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg",
				"availability" : {
					"uptime" :11 ,
					"downtime" : 18
				}
			},

			"Alloo_Paratha" : {
				"price" : [30],
				"category" : ["Indian_Bread"],
				"image" : "aalu_paratha_1.jpg"
			},

			"Paneer_Paratha" : {
				"price" : [35],
				"category" : ["Indian_Bread"],
				"image" : "paneer_paratha_1.jpg"
			},


			"Laccha_Paratha" : {
				"price" : [30],
				"category" : ["Indian_Bread"],
				"image" : "laccha_paratha_1.jpg",
				"availability" : {
					"uptime" : 18,
					"downtime" : 23
				}
			},

			"Nug_Naan" : {
				"price" : [35],
				"category" : ["Indian_Bread"],
				"image" : "laccha_paratha_1.jpg",
				"availability" : {
					"uptime" : 18,
					"downtime" : 23
				}
			},

			"Paneer_Kulcha" : {
				"price" : [55],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg",
				"availability" : {
					"uptime" : 18,
					"downtime" : 23
				}
			},

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
				"price" : [15],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg"
			},


			"Rosted_Papad" : {
				"price" : [10],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg"
			},

			"Fried_Papad" : {
				"price" : [10],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg"
			}

		},

		"Dal" : {


			"Dal_Tadka" : {
				"price" : [120],
				"category" : ["Veg","North_Indian"],
				"image" : "dal_1.jpg"
			},

			"Dal_Panchmel" : {
				"price" : [140],
				"category" : ["Veg","North_Indian"],
				"image" : "dal_1.jpg"
			},

			"Chana_Masala_Dal" : {
				"price" : [130],
				"category" : ["Veg","North_Indian"],
				"image" : "dal_tadka_1.jpg"
			},

			"Dal_Urad_Dry" : {
				"price" : [140],
				"category" : ["Veg","North_Indian"],
				"image" : "dal_makhani_1.jpg"
			},

			"Dal_Makhani" : {
				"price" : [140],
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
			}
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

			"Matar_Pulao" : {
				"price" : [100],
				"category" : ["Veg","Fried","Rice","North_Indian"],
				"image" : "rice_pulav_1.jpg"
				
			},

			"Kaju_Polao" : {
				"price" : [120],
				"category" : ["Veg","Fried","Rice","North_Indian"],
				"image" : "rice_pulav_1.jpg"
				
			},

			"Kashmiri_Polao" : {
				"price" : [110],
				"category" : ["Veg","Fried","Rice","North_Indian"],
				"image" : "rice_pulav_1.jpg"
				
			},

			"Navratna_Polao" : {
				"price" : [110],
				"category" : ["Veg","Fried","Rice","North_Indian"],
				"image" : "rice_pulav_1.jpg"
				
			},

			"Veg_Polao" : {
				"price" : [100],
				"category" : ["Veg","Fried","Rice","North_Indian"],
				"image" : "rice_pulav_1.jpg"
				
			},

			"Paneer_Polao" : {
				"price" : [120],
				"category" : ["Veg","Fried","Rice","North_Indian"],
				"image" : "rice_pulav_1.jpg"
				
			},

			"Lemon_Rice" : {
				"price" : [90],
				"category" : ["Veg","Fried","Rice","North_Indian"],
				"image" : "rice_pulav_1.jpg"
				
			}

		},

		"South_Indian" : {


			"Paper_Dosa" : {
				"price" : [60],
				"category" : ["Veg","South_Indian"],
				"image" : "dosa_3.jpg"
			},

			"Masala_Dosa" : {
				"price" : [80],
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

			"Panner_Uttapam" : {
				"price" : [100],
				"category" : ["Veg","South_Indian"],
				"image" : "onion_Uttapam_6.jpg"
			},

			"Veg_Uttapam" : {
				"price" : [80],
				"category" : ["Veg","South_Indian"],
				"image" : "Uttapam_2.jpg"
			},

			"Sambhar_Vada" : {
				"price" : [70],
				"category" : ["Veg","South_Indian"],
				"image" : "Uttapam_3.jpg"
			},


			"Idli_Sambhar" : {
				"price" : [60],
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
				"price" : [50],
				"category" : ["Veg","Salad"],
				"image" : "salad_1.jpg"
			},
			
			"Onion_Salad" : {
				"price" : [30],
				"category" : ["Veg","Salad"],
				"image" : "salad_1.jpg"
			},
			
			"Kachumer_Salad" : {
				"price" : [60],
				"category" : ["Veg","Salad"],
				"image" : "salad_1.jpg"
			},
			
			"Russion_Salad" : {
				"price" : [70],
				"category" : ["Veg","Salad"],
				"image" : "salad_1.jpg"
			},
			
			"Macroni_Salad" : {
				"price" : [70],
				"category" : ["Veg","Salad"],
				"image" : "salad_1.jpg"
			},
			
			"Sirka_Pyaz" : {
				"price" : [30],
				"category" : ["Veg","Salad"],
				"image" : "salad_1.jpg"
			}
		},

		"Raita" : {


			"Mix_Veg_Raita" : {
				"price" : [50],
				"category" : ["Veg"],
				"image" : "raita_1.jpg"
			},
			
			"Furit_Raita" : {
				"price" : [80],
				"category" : ["Veg"],
				"image" : "raita_1.jpg"
			},

			"Kheera_Raita" : {
				"price" : [70],
				"category" : ["Veg"],
				"image" : "raita_1.jpg"
			},
			
			"Pudina_Raita" : {
				"price" : [60],
				"category" : ["Veg"],
				"image" : "raita_1.jpg"
			},
			
			"Bathua_Raita" : {
				"price" : [60],
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

			"Mango_Shake" : {
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
				
			},

			"Mineral_Water" : {
				"price" : [20],
				"category" : ["Drinks"],
				"image" : "Drinks_1.jpg"
			},

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

			"Cold_Coffee" : {
				"price" : [35],
				"category" : ["Drinks"],
				"image" : "cold_coffee_2.jpg"
				
			},

			"Lassi" : {
				"price" : [50],
				"category" : ["Drinks"],
				"image" : "lassi_1.jpg"
			},

			"Masala_Mattha" : {
				"price" : [50],
				"category" : ["Drinks"],
				"image" : "lassi_1.jpg"
			},

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
				
			}
			
		},

		"Hot_Drinks" : {

			"Tomato_Soup" : {
				"price" : [90],
				"category" : ["Drinks","Soup","Veg"],
				"image" : "Drinks_1.jpg"
			},

			"Manchow_Soup" : {
				"price" : [100],
				"category" : ["Drinks","Soup","veg"],
				"image" : "Drinks_1.jpg"
			},

			"Hot_N_Sour" : {
				"price" : [100],
				"category" : ["Drinks","Soup","Veg"],
				"image" : "Drinks_1.jpg"
			},

			"Sweet_Corn_Soup" : {
				"price" : [100],
				"category" : ["Drinks","Soup","Veg"],
				"image" : "Drinks_1.jpg"
			},

			"Lemon_Corinder" : {
				"price" : [100],
				"category" : ["Drinks","Soup","Veg"],
				"image" : "Drinks_1.jpg"
			},

			"Vegetable_Soup" : {
				"price" : [100],
				"category" : ["Drinks","Soup","Veg"],
				"image" : "Drinks_1.jpg"
			},

			"Cream_Of_Chicken" : {
				"price" : [120],
				"category" : ["Drinks","Soup","Non-veg"],
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

		"Sweets" : {

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

		},

		"Dessert" : {

						
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
						
			"Strawberry" : {
				"price" : [55],
				"category" : ["Veg","Dessert"],
				"image" : "dessert_4_1.jpg"
			},
						
			"Choclate" : {
				"price" : [65],
				"category" : ["Veg","Dessert"],
				"image" : "dessert_4_1.jpg"
			},
						
			"Pudding" : {
				"price" : [80],
				"category" : ["Veg","Dessert"],
				"image" : "dessert_4_1.jpg"
			}
		},

		
		

		"Plates" : {


			"1_Dal_+_1_Tamatar_Alloo_Gravy_+_1_Dry_Vegetable_+_4_Roti_+_Rice_+_Salad" : {
				"price" : [69],
				"category" : ["Veg"],
				"image" : "thali_1.jpg"
			},

			"1_Dal_+_1_Paneer_Vegetables_+_1_Tamatar_Alloo_Gravy_+_1_Dry_Vegetable_+_4_Roti_+_Zeera_Rice_+_Salad_+_Papad_+_Raita" : {
				"price" : [99],
				"category" : ["Veg"],
				"image" : "thali_1.jpg"
			},

			"1_Dal_Fry_+_1_Paneer_Vegetables_+_1_Tamatar/Matar_Alloo_Gravy_+_1_Dry_Vegetable_+_2_Tandoori_+_2_Missi_+_Matar_Pullav_+_Salad_+_Papad_+_Raita_+_Gulab_Jamun" : {
				"price" : [129],
				"category" : ["Veg"],
				"image" : "thali_2.jpg"
			},
		},

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

