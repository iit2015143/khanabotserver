var MongoClient = require('mongodb').MongoClient;
var mongourl = "mongodb://localhost:27017/";


var dana_pani = {
	//"_id" : ObjectId("02"),
	"Location" : {
		"lat" : 25.430529,
		"long" : 81.766967
	},

	"availability" : {
		"uptime" : 11,
		"downtime" : 22
	},

	"number" : 7081035643,
	"feature" : "Value For Money",
	"name" : "Dana Pani",
  	"rating":4,
  	"HotDeals":[
	{
		name:"Chicken_Kadhai",
		price:[210],
		description:"Specifically for IIITA. Take it soon. Tandoor Paratha After 6 PM To 11 PM",
		image: "dana_pani.jpg"
	},

	{
		name:"Kadhai_Paneer",
		price:[170],
		description:"Specifically for IIITA. Take it soon.Tandoor Paratha After 6 PM To 11 PM",
		image : "dana_pani.jpg"
	}

  ],

  "TopRated":[

  	{Category:"Main_Course_Non_Veg_Mutton",SubCategory:"Mutton_Kadhai",Ind:0}

  ],

	"menu" : {


		"Veg_Starters" : {


			"Paneer_Tikka_8pc" : {
				"price" : [110],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Paneer_Malai_Tikka_8pc" : {
				"price" : [125],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Paneer_Haryali_8pc" : {
				"price" : [130],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Tandoori_Mushroom_8pc" : {
				"price" : [80],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Tandoori_Aloo_8pc" : {
				"price" : [70],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Achari_Aloo_8pc" : {
				"price" : [80],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			},

			"Hara_Bhara_Kabab" : {
				"price" : [100],
				"category" : ["Veg","Starters"],
				"image" : "starters_4.jpg"
			}
		},

		"Tandoori_Starters" : {


			"Chicken_Tandoori" : {
				"price" : [120,240],
				"category" : ["Non-Veg","Starters","Rolls"],
				"image" : "starters_4.jpg"
			},

			"Chicken_Afgani_8pc" : {
				"price" : [140,270],
				"category" : ["Non-Veg","Starters","Rolls"],
				"image" : "starters_4.jpg"
			},

			"Chicken_Tikka_8pc" : {
				"price" : [130],
				"category" : ["Non-Veg","Starters","Rolls"],
				"image" : "starters_4.jpg"
			},

			"Chicken_Malai_Tikka_8pc" : {
				"price" : [140],
				"category" : ["Non-Veg","Starters","Rolls"],
				"image" : "starters_4.jpg"
			},

			"Chicken_Haryali_Tikka_8pc" : {
				"price" : [130],
				"category" : ["Non-Veg","Starters","Rolls"],
				"image" : "starters_4.jpg"
			},

			"Chicken_Achari_Tikka_8pc" : {
				"price" : [135],
				"category" : ["Non-Veg","Starters","Rolls"],
				"image" : "starters_4.jpg"
			},

			"Chicken_Afgani_Tikka_8pc" : {
				"price" : [145],
				"category" : ["Non-Veg","Starters","Rolls"],
				"image" : "starters_4.jpg"
			},

			"Chicken_Reshmi_Tikka_8pc" : {
				"price" : [145],
				"category" : ["Non-Veg","Starters","Rolls"],
				"image" : "starters_4.jpg"
			},

			"Chicken_Kali_Mirch_8pc" : {
				"price" : [140],
				"category" : ["Non-Veg","Starters","Rolls"],
				"image" : "starters_4.jpg"
			},

			"Lemon_Chicken_Tikka_8pc" : {
				"price" : [160],
				"category" : ["Non-Veg","Starters","Rolls"],
				"image" : "starters_4.jpg"
			},

			"Ginger_Chicken_Tikka_8pc" : {
				"price" : [160],
				"category" : ["Non-Veg","Starters","Rolls"],
				"image" : "starters_4.jpg"
			},

			"Garlic_Chicken_Tikka_8pc" : {
				"price" : [155],
				"category" : ["Non-Veg","Starters","Rolls"],
				"image" : "starters_4.jpg"
			}

		},

		"Kabab_Paratha" : {


			"Non_Veg_Kabab_Paratha_(2_kabab_&_1_Paratha)" : {
				"price" : [45],
				"category" : ["kabab","Non-Veg","North_Indian"],
				"image" : "dana_pani.jpg"
			},

			"Non_Veg_Kabab_Paratha_(4_kabab_&_2_Paratha)" : {
				"price" : [80],
				"category" : ["kabab","Non-Veg","North_Indian"],
				"image" : "dana_pani.jpg"
			}
		},

		"Kulcha_&_Choley" : {


			"Aloo_Kulcha_Choley_(2_Kulcha__&_Choley)" : {
				"price" : [60],
				"category" : ["Veg","North_Indian"],
				"image" : "dana_pani.png"
			},

			"Mix_Kulcha_Choley_(2_Kulcha__&_Choley)" : {
				"price" : [70],
				"category" : ["Veg","North_Indian"],
				"image" : "dana_pani.png"
			},

			"Choley_Chawal" : {
				"price" : [60],
				"category" : ["Veg","North_Indian"],
				"image" : "dana_pani.png"
			}

		},

		"Pakoda_8pc" : {


			"Veg_Pakoda" : {
				"price" : [110],
				"category" : ["Veg","North_Indian"],
				"image" : "dana_pani.png"
			},

			"Pyaj_Pokoda" : {
				"price" : [120],
				"category" : ["Veg","North_Indian"],
				"image" : "dana_pani.png"
			},

			"Aloo_Gobhi_Pakoda" : {
				"price" : [130],
				"category" : ["Veg","North_Indian"],
				"image" : "dana_pani.png"
			},

			"Paneer_Pakoda" : {
				"price" : [140],
				"category" : ["Veg","North_Indian"],
				"image" : "dana_pani.png"
			}
		},

		"Drinks" : {


			"Hot_Coffee" : {
				"price" : [25],
				"category" : ["Drinks"],
				"image" : "cold_coffee_2.jpg"
			},

			"Cold_Coffee" : {
				"price" : [40],
				"category" : ["Drinks"],
				"image" : "cold_coffee_2.jpg"

			},

			"Lassi" : {
				"price" : [45],
				"category" : ["Drinks"],
				"image" : "lassi_1.jpg"
			},

			"Cold_Coffee_With_Ice_Cream" : {
				"price" : [45],
				"category" : ["Drinks"],
				"image" : "cold_coffee_2.jpg"

			}
		},

		"Kabab" : {


			"Mutton_Lucknow_Seek" : {
				"price" : [120],
				"category" : ["kabab","Veg","North_Indian"],
				"image" : "kabab_paneer_1.jpg"
			},

			"Mutton_Shami_6pc" : {
				"price" : [150],
				"category" : ["kabab","Veg","North_Indian"],
				"image" : "kabab_paneer_1.jpg"
			},

			"Chicken_Seek_Kabab" : {
				"price" : [100],
				"category" : ["kabab","Non-Veg","North_Indian"],
				"image" : "kabab_2.jpg"
			},

			"Chicken_Seek_Galafi_Kabab" : {
				"price" : [120],
				"category" : ["kabab","Non-Veg","North_Indian"],
				"image" : "kabab_2.jpg"
			},

			"Chicken_Reshmi_Kabab" : {
				"price" : [120],
				"category" : ["kabab","Non-Veg","North_Indian"],
				"image" : "kabab_2.jpg"
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
			},

			"Egg_Kadhai" : {
				"price" : [90],
				"category" : ["Non-Veg","Egg"],
				"image" : "egg_bhurji_1.jpg"
			},

			"Omlete" : {
				"price" : [30],
				"category" : ["Non-Veg","Egg"],
				"image" : "egg_bhurji_1.jpg"
			}

		},

		"Fish" : {


			"Fish_Curry_6pc" : {
				"price" : [135,250],
				"category" : ["Veg","North_Indian"],
				"image" : "dana_pani.png"
			},

			"Fish_Fry_6pc" : {
				"price" : [120,230],
				"category" : ["Veg","North_Indian"],
				"image" : "dana_pani.png"
			},

			"Fish_Tikka_6pc" : {
				"price" : [190],
				"category" : ["Veg","North_Indian"],
				"image" : "dana_pani.png"
			},

			"Fish_Mumtaj_6pc" : {
				"price" : [140,265],
				"category" : ["Veg","North_Indian"],
				"image" : "dana_pani.png"
			},

			"Fish_Finger_6pc" : {
				"price" : [180],
				"category" : ["Veg","North_Indian"],
				"image" : "dana_pani.png"
			}
		},

		"Dal" : {


			"Dal_Plain" : {
				"price" : [55],
				"category" : ["Veg","North_Indian"],
				"image" : "dal_1.jpg"
			},

			"Dal_Fry" : {
				"price" : [60],
				"category" : ["Veg","North_Indian"],
				"image" : "dal_1.jpg"
			},

			"Dal_Tadka" : {
				"price" : [70],
				"category" : ["Veg","North_Indian"],
				"image" : "dal_1.jpg"
			},

			"Dal_Makhani" : {
				"price" : [120],
				"category" : ["Veg","North_Indian"],
				"image" : "dal_1.jpg"
			},

			"Dal_Bhukhara" : {
				"price" : [105],
				"category" : ["Veg","North_Indian"],
				"image" : "dal_1.jpg"
			},

			"Dal_Methi" : {
				"price" : [70],
				"category" : ["Veg","North_Indian"],
				"image" : "dal_1.jpg"
			},

			"Dal_Haryali" : {
				"price" : [70],
				"category" : ["Veg","North_Indian"],
				"image" : "dal_1.jpg"
			},

			"Choley" : {
				"price" : [90],
				"category" : ["Veg","North_Indian"],
				"image" : "dal_1.jpg"
			}
		},

		"Veg_Main_Course" : {


			"Paneer_Butter_Masala" : {
				"price" : [85,160],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_matter_2.jpg"
			},

			"Shahi_Paneer" : {
				"price" : [175],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_shai_2.jpg"
			},

			"Paneer_Lababdaar" : {
				"price" : [170],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy.jpg"
			},

			"Malai_Kofta" : {
				"price" : [170],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_matter_2.jpg"
			},

			"Paneer_Laung_Lata" : {
				"price" : [170],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_shai_2.jpg"
			},

			"Kadhai_Paneer" : {
				"price" : [170],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_grakadai_paneer_2.jpg"
			},

			"Paneer_Do_Pyaza" : {
				"price" : [160],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_do_1.jpg"
			},

			"Paneer_Tikka_Masala" : {
				"price" : [170],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_butter_masala_1.jpg"
			},

			"Matar_Paneer" : {
				"price" : [80,150],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_matter_2.jpg"
			},

			"Methi_Paneer" : {
				"price" : [160],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_butter_masala_1.jpg"
			},


			"Palak_Paneer" : {
				"price" : [160],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_palak_2.jpg"
			},

			"Mix_Veg" : {
				"price" : [130],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},

			"Aloo_Gobhi_Matar" : {
				"price" : [110],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},

			"Kumb_Butta_Bhaji" : {
				"price" : [140],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},

			"Veg_Keema_Bhajji" : {
				"price" : [100],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},

			"Jeera_Alloo" : {
				"price" : [110],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},

			"Achari_Alloo" : {
				"price" : [150],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},

			"Mushroom_Matar" : {
				"price" : [175],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},

			"Mushroom_Do_Pyaza" : {
				"price" : [175],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},

			"Mushroom_Masala" : {
				"price" : [175],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},

			"Mushroom_Kadahi" : {
				"price" : [175],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			}
		},

		"Main_Course_Non_Veg_Chicken" : {


			"Buttter_Chicken_With_Bone" : {
				"price" : [230,450],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_1.jpg"
			},

			"Chicken_Kali_Mirch" : {
				"price" : [220,430],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_1.jpg"
			},

			"Chicken_Curry" : {
				"price" : [210,400],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_1.jpg"
			},

			"Chicken_Kadhai" : {
				"price" : [210,400],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_1.jpg"
			},

			"Chicken_Masala" : {
				"price" : [220,410],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_1.jpg"
			},

			"Chicken_Rajasthani" : {
				"price" : [210,400],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_1.jpg"
			},

			"Chicken_Ra-Ra" : {
				"price" : [220,430],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_1.jpg"
			},

			"" : {
				"price" : [],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_1.jpg"
			},

			"Chicken_Achari" : {
				"price" : [210,400],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_1.jpg"
			},

			"Chicken_Tikka_Masala_(Boneless)" : {
				"price" : [250],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_1.jpg"
			},

			"Chicken_Lababdar" : {
				"price" : [210,400],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_1.jpg"
			},

			"Murg_Lasuni_Saag" : {
				"price" : [210,400],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_1.jpg"
			},

			"Murg_Meethi" : {
				"price" : [210,400],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_1.jpg"
			},

			"Chicken_Shai_Korma" : {
				"price" : [220,430],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_1.jpg"
			},

			"Butter_Chicken_(Boneless)" : {
				"price" : [250,450],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_1.jpg"
			}


		},

		"Main_Course_Non_Veg_Mutton" : {


			"Mutton_Meethi_Goli" : {
				"price" : [220,420],
				"category" : ["Mutton","Non-Veg","North_Indian"],
				"image" : "mutton_1.jpg"
			},

			"Mutton_Nargasi_Kofta" : {
				"price" : [140,250],
				"category" : ["Mutton","Non-Veg","North_Indian"],
				"image" : "mutton_1.jpg"
			},

			"Mutton_Rogan_Josh" : {
				"price" : [220,420],
				"category" : ["Mutton","Non-Veg","North_Indian"],
				"image" : "mutton_1.jpg"
			},

			"Mutton_Curry" : {
				"price" : [210,400],
				"category" : ["Mutton","Non-Veg","North_Indian"],
				"image" : "mutton_1.jpg"
			},

			"Mutton_Kadhai" : {
				"price" : [210,400],
				"category" : ["Mutton","Non-Veg","North_Indian"],
				"image" : "mutton_1.jpg"
			},

			"Mutton_Do_Pyaza" : {
				"price" : [210,400],
				"category" : ["Mutton","Non-Veg","North_Indian"],
				"image" : "mutton_1.jpg"
			},

			"Mutton_Ra_Ra" : {
				"price" : [250,430],
				"category" : ["Mutton","Non-Veg","North_Indian"],
				"image" : "mutton_1.jpg"
			},

			"Bhuna_Ghost" : {
				"price" : [220,420],
				"category" : ["Mutton","Non-Veg","North_Indian"],
				"image" : "mutton_1.jpg"
			},

			"Mutton_Handi" : {
				"price" : [210,400],
				"category" : ["Mutton","Non-Veg","North_Indian"],
				"image" : "mutton_1.jpg"
			},

			"Mutton_Kaleji" : {
				"price" : [200,400],
				"category" : ["Mutton","Non-Veg","North_Indian"],
				"image" : "mutton_1.jpg"
			},

			"Mutton_Achari" : {
				"price" : [210,400],
				"category" : ["Mutton","Non-Veg","North_Indian"],
				"image" : "mutton_1.jpg"
			},

			"Mutton_Shahi_Korma" : {
				"price" : [250,430],
				"category" : ["Mutton","Non-Veg","North_Indian"],
				"image" : "mutton_1.jpg"
			},

			"Keema_Matar" : {
				"price" : [200,400],
				"category" : ["Mutton","Non-Veg","North_Indian"],
				"image" : "mutton_1.jpg"
			},

			"Mutton_Masala_(New)" : {
				"price" : [220,420],
				"category" : ["Mutton","Non-Veg","North_Indian"],
				"image" : "mutton_1.jpg"
			}
		},


		"Rice" : {


			"Plain_Rice" : {
				"price" : [45,90],
				"category" : ["Veg","Fried","Rice","North_Indian"],
				"image" : "rice_1.jpg"
			},

			"Jeera_Rice" : {
				"price" : [60,110],
				"category" : ["Veg","Fried","Rice","North_Indian"],
				"image" : "rice_1.jpg"
			},

			"Peas_Rice" : {
				"price" : [130],
				"category" : ["Veg","Fried","Rice","North_Indian"],
				"image" : "rice_pulav_1.jpg"

			},

			"Veg_Pulao" : {
				"price" : [130],
				"category" : ["Veg","Fried","Rice","North_Indian"],
				"image" : "rice_pulav_1.jpg"

			},

			"Veg_Biryani" : {
				"price" : [75,140],
				"category" : ["Veg","Starters"],
				"image" : "biryani_1.jpg"
			},

			"Mutton_Biryani" : {
				"price" : [80,150],
				"category" : ["Non-Veg","Rice"],
				"image" : "egg_bhurji_1.jpg"
			},

			"Chicken_Biryani" : {
				"price" : [65,120],
				"category" : ["Non-Veg","Rice"],
				"image" : "egg_bhurji_1.jpg"
			}

		},


		"Roti" : {


			"Rumali_Roti" : {
				"price" : [15],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg",

			},

			"Tandoori_Roti" : {
				"price" : [10],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg",

			},

			"Tawa_Roti" : {
				"price" : [10],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg",

			},

			"Nan_(Plain_&_Butter)" : {
				"price" : [25],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg",

			},

			"Aloo_Kulcha" : {
				"price" : [20],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg",

			},

			"Aloo_Paneer_Kulcha" : {
				"price" : [25],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg",

			},

			"Mix_Kulcha" : {
				"price" : [25],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg",

			},

			"Butter_Roti" : {
				"price" : [15],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg",

			},

			"Missi_Roti" : {
				"price" : [20],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg",

			}

		},


		"Salad_&_Papad" : {


			"Green_Salad" : {
				"price" : [50],
				"category" : ["Veg","Salad"],
				"image" : "salad_1.jpg"
			},

			"Papad_(Dry)" : {
				"price" : [10],
				"category" : ["Veg","Salad"],
				"image" : "salad_1.jpg"
			},

			"Papad_(Fry)" : {
				"price" : [12],
				"category" : ["Veg","Salad"],
				"image" : "salad_1.jpg"
			},


		},

		"Dessert" : {


			"Vanilla" : {
				"price" : [30,55],
				"category" : ["Veg","Dessert"],
				"image" : "dessert_4.jpg"
			},

			"Strawberry" : {
				"price" : [35,60],
				"category" : ["Veg","Dessert"],
				"image" : "dessert_4.jpg"
			},

			"Choco_Chips" : {
				"price" : [45,80],
				"category" : ["Veg","Dessert"],
				"image" : "dessert_4.jpg"
			},

			"Choclate" : {
				"price" : [40,70],
				"category" : ["Veg","Dessert"],
				"image" : "dessert_4.jpg"
			},

			"Butter_Scotch" : {
				"price" : [35,60],
				"category" : ["Veg","Dessert"],
				"image" : "dessert_4.jpg"
			},

			"Shahi_Kulfi" : {
				"price" : [40,70],
				"category" : ["Veg","Dessert"],
				"image" : "dessert_4.jpg"
			},

			"American_Bite" : {
				"price" : [50,90],
				"category" : ["Veg","Dessert"],
				"image" : "dessert_4.jpg"
			}
		},

		"Thali" : {

			"Dal_Fry_+_Jeera_Rice_+_Matar_Paneer_+_Seasonal_Vegetable_+_4_Roti/Tawa_Roti/Kulcha_+_Pickle_+_Salad_+_Papad" : {
				"price" : [100],
				"category" : ["Veg"],
				"image" : "thali_1.jpg"
			},

			"Chicken_Masala_+_Jeera_Rice_+_Dal_Fry_+_Seasonal_Vegetable_+_4_Roti/Rumali_Roti/_+_Pickle_+_Salad" : {
				"price" : [125],
				"category" : ["Non-Veg"],
				"image" : "thali_2.jpg"
			}
		}


	}
}

console.log(dana_pani);

MongoClient.connect(mongourl,function(err,db){
    if(err)
    throw err;
    var dbo = db.db("khanabot");
                dbo.collection('restaurants').update({"number":dana_pani.number},{$set:{"rating":dana_pani.rating,"name":dana_pani.name,
								"menu":dana_pani.menu,"image":"launcher.png",
availability:dana_pani.availability,Offers:[],HotDeals:dana_pani.HotDeals,TopRated:dana_pani.TopRated}},function(err,mres){
      if(err)
      throw err;
      console.log("Wrote Your fucking object");
    });
		db.close();
});
