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
		"uptime" : 10,
		"downtime" : 23
	},
	"image":"makkhans_1.jpg",
	"number" : 8423315508,
	"feature" : "Value For Money",
	"name" : "Makkhans",
  	"rating":3.5,
  	"HotDeals":[
	{
		// name:"Chicken_Biryani",
		// price:[180],
		// description:"Specifically for IIITA. Take it soon. Tandoor Paratha After 6 PM To 11 PM",
		// image: "chicken_biryani_3.jpg"
	},

	{
		// name:"Butter_Chicken",
		// price:[300],
		// description:"Specifically for IIITA. Take it soon.Tandoor Paratha After 6 PM To 11 PM",
		// image : "butter_chicken_4.jpg"
	}

  ],

  "TopRated":[

  	//{Category:"Veg_Main_Course",SubCategory:"Paneer_Chow-Chow",Ind:0}

  ],

	"menu" : {


		"Veg_Starters" : {

			
			"French_Fries_(Fringer_Chips)" : {
				"price" : [80],
				"category" : ["Veg","Starters"],
				"image" : "makkhans_1.jpg"
			},

			"Onion_Pakoras" : {
				"price" : [120],
				"category" : ["Veg","Starters"],
				"image" : "makkhans_1.jpg"
			},
			
			"Veg_Cutlet" : {
				"price" : [150],
				"category" : ["Veg","Starters"],
				"image" : "makkhans_1.jpg"
			},
			
			"Paneer_Pakoras" : {
				"price" : [160],
				"category" : ["Veg","Starters"],
				"image" : "makkhans_1.jpg"
			},
			
			"Paneer_Roll_Bread" : {
				"price" : [160],
				"category" : ["Veg","Starters","Rolls"],
				"image" : "makkhans_1.jpg"
			},
			
			"Paneer_Tikka" : {
				"price" : [195],
				"category" : ["Veg","Starters"],
				"image" : "makkhans_1.jpg"
			},
			
			"Fresh_Paneer_Stick" : {
				"price" : [180],
				"category" : ["Veg","Starters"],
				"image" : "makkhans_1.jpg"
			},
			
			"Honey_Chilli_Potato_(Snacks)" : {
				"price" : [180],
				"category" : ["Veg","Starters"],
				"image" : "makkhans_1.jpg"
			},
			
			"Fried_Paneer_Stick" : {
				"price" : [220],
				"category" : ["Veg","Starters"],
				"image" : "makkhans_1.jpg"
			}

		},

		"Tandoor_Snacks" : {

			"Aloo_Tikka" : {
				"price" : [160],
				"category" : ["Veg","Starters"],
				"image" : "makkhans_1.jpg"
			},

			"Soyabean_Tikka" : {
				"price" : [180],
				"category" : ["Veg","Starters"],
				"image" : "makkhans_1.jpg"
			},

			"Paneer_Tikka" : {
				"price" : [195],
				"category" : ["Veg","Starters"],
				"image" : "makkhans_1.jpg"
			},

			"Mushroom_Tikka" : {
				"price" : [220],
				"category" : ["Veg","Starters"],
				"image" : "makkhans_1.jpg"
			}

			

		},

		"Sandwiches" : {


			"Veg_Sandwich" : {
				"price" : [90],
				"category" : ["Veg","Sandwich"],
				"image" : "makkhans_1.jpg"
			},
			
			"Veg_Sandwich_Grilled" : {
				"price" : [110],
				"category" : ["Veg","Sandwich"],
				"image" : "makkhans_1.jpg"
			},
			
			"Cheese_Sandwich" : {
				"price" : [90],
				"category" : ["Veg","Sandwich"],
				"image" : "makkhans_1.jpg"
			},
			
			"Cheese_Sandwich_Grilled" : {
				"price" : [110],
				"category" : ["Veg","Sandwich"],
				"image" : "makkhans_1.jpg"
			},
			
			"Paneer_Sandwich" : {
				"price" : [90],
				"category" : ["Veg","Sandwich"],
				"image" : "makkhans_1.jpg"
			},

			"Paneer_Sandwich_Grilled" : {
				"price" : [110],
				"category" : ["Veg","Sandwich"],
				"image" : "makkhans_1.jpg"
			},
			
			"Club_Sandwich" : {
				"price" : [110],
				"category" : ["Veg","Sandwich"],
				"image" : "makkhans_1.jpg"
			},
			
			"Aloo_Sandwich" : {
				"price" : [90],
				"category" : ["Veg","Sandwich"],
				"image" : "makkhans_1.jpg"
			},
			
			"Aloo_Sandwich_Grilled" : {
				"price" : [110],
				"category" : ["Veg","Sandwich"],
				"image" : "makkhans_1.jpg"
			}
		},


		"Chole_Bhature" : {


			"Chole_Bhature" : {
				"price" : [120],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},

			"Paneer_Stuffed_Chole_Bhature" : {
				"price" : [150],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			}
		},

		"Fast Food" : {


			"Veg_Burger_(Small)" : {
				"price" : [50],
				"category" : ["Veg","Fastfood","Burger"],
				"image" : "makkhans_1.jpg"
			},

			"Veg_Burger" : {
				"price" : [90],
				"category" : ["Veg","Fastfood","Burger"],
				"image" : "makkhans_1.jpg"
			},
			
			"Veg_Cheese_Burger" : {
				"price" : [110],
				"category" : ["Veg","Fastfood","Burger"],
				"image" : "makkhans_1.jpg"
			},
			
			"Paneer_Burger" : {
				"price" : [130],
				"category" : ["Veg","Fastfood","Burger"],
				"image" : "makkhans_1.jpg"
			},
			
			"Makkhans_Special_Mahaburger" : {
				"price" : [150],
				"category" : ["Veg","Fastfood","Burger"],
				"image" : "makkhans_1.jpg"
			}
			
		},

		"Pizza_8_5_Inch" : {

			"Cheese_Pizza" : {
				"price" : [160],
				"category" : ["Veg","Pizza"],
				"image" : "makkhans_1.jpg"
			},
			
			"Veg_Pizza" : {
				"price" : [180],
				"category" : ["Veg","Pizza"],
				"image" : "makkhans_1.jpg"
			},
			
			"Cheese_Tomato_Pizza" : {
				"price" : [180],
				"category" : ["Veg","Pizza"],
				"image" : "makkhans_1.jpg"
			},
			
			"Online_Pizza" : {
				"price" : [180],
				"category" : ["Veg","Pizza"],
				"image" : "makkhans_1.jpg"
			},
			
			"Capsicum_Onion_Pizza" : {
				"price" : [180],
				"category" : ["Veg","Pizza"],
				"image" : "makkhans_1.jpg"
			},
			
			"Paneer_Pizza" : {
				"price" : [240],
				"category" : ["Veg","Pizza"],
				"image" : "makkhans_1.jpg"
			},
			
			"Cheese_Paneer_Pizza" : {
				"price" : [250],
				"category" : ["Veg","Pizza"],
				"image" : "makkhans_1.jpg"
			},
			
			"Cheese_Capsicum_Onion_Mushroom_Pizza" : {
				"price" : [250],
				"category" : ["Veg","Pizza"],
				"image" : "makkhans_1.jpg"
			},
			
			"Paneer_Tikka_Pizza" : {
				"price" : [270],
				"category" : ["Veg","Pizza"],
				"image" : "makkhans_1.jpg"
			},
			
			"Makkhans_Special_Pizza" : {
				"price" : [270],
				"category" : ["Veg","Pizza"],
				"image" : "makkhans_1.jpg"
			}

		},

		"Soups" : {


			"Veg_Soup" : {
				"price" : [95],
				"category" : ["Veg","Chinese"],
				"image" : "makkhans_1.jpg"
			},
			
			"Tomato_Soup" : {
				"price" : [95],
				"category" : ["Veg","Chinese"],
				"image" : "makkhans_1.jpg"
			},
			
			"Sweet_Corn_Soup" : {
				"price" : [95],
				"category" : ["Veg","Chinese"],
				"image" : "makkhans_1.jpg"
			},
			
			"Manchow_Soup" : {
				"price" : [95],
				"category" : ["Veg","Chinese"],
				"image" : "makkhans_1.jpg"
			},
			
			"Veg_Noodle_Soup" : {
				"price" : [95],
				"category" : ["Veg","Chinese"],
				"image" : "makkhans_1.jpg"
			},
			
			"Minestone_Soup" : {
				"price" : [95],
				"category" : ["Veg","Chinese"],
				"image" : "makkhans_1.jpg"
			},
			
			"Hot_&_Sour_Soup_With_One_Stick" : {
				"price" : [95],
				"category" : ["Veg","Chinese"],
				"image" : "makkhans_1.jpg"
			},
			
			"Extra_Soup_Stick" : {
				"price" : [10],
				"category" : ["Veg","Chinese"],
				"image" : "makkhans_1.jpg"
			}
		},

		"Pasta" : {


			"Onion_Pasta" : {
				"price" : [180],
				"category" : ["Veg","Pasta"],
				"image" : "makkhans_1.jpg"
			},

			"Vegetable_Pasta" : {
				"price" : [180],
				"category" : ["Veg","Pasta"],
				"image" : "makkhans_1.jpg"
			}
		},

		"South_Indian" : {


			"Plain_Dosa" : {
				"price" : [90],
				"category" : ["Veg","South-Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Plain_Dosa_Rawa" : {
				"price" : [110],
				"category" : ["Veg","South-Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Onion_Dosa" : {
				"price" : [100],
				"category" : ["Veg","South-Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Onion_Dosa_Rawa" : {
				"price" : [110],
				"category" : ["Veg","South-Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Masala_Dosa" : {
				"price" : [100],
				"category" : ["Veg","South-Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Masala_Dosa_Rawa" : {
				"price" : [100],
				"category" : ["Veg","South-Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Butter_Masala_Dosa" : {
				"price" : [130],
				"category" : ["Veg","South-Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Butter_Masala_Dosa_Rawa" : {
				"price" : [150],
				"category" : ["Veg","South-Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Cheese_Masala_Dosa" : {
				"price" : [150],
				"category" : ["Veg","South-Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Cheese_Masala_Dosa_Rawa" : {
				"price" : [170],
				"category" : ["Veg","South-Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Paneer_Masala_Dosa" : {
				"price" : [150],
				"category" : ["Veg","South-Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Paneer_Masala_Dosa_Rawa" : {
				"price" : [170],
				"category" : ["Veg","South-Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Paneer_Dosa" : {
				"price" : [180],
				"category" : ["Veg","South-Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Paneer_Dosa_Rawa" : {
				"price" : [200],
				"category" : ["Veg","South-Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Makkhans_Special_Dosa" : {
				"price" : [195],
				"category" : ["Veg","South-Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Makkhans_Special_Dosa_Rawa" : {
				"price" : [220],
				"category" : ["Veg","South-Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Spring_Dosa" : {
				"price" : [195],
				"category" : ["Veg","South-Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Idli_Fry/Tadka" : {
				"price" : [130],
				"category" : ["Veg","South-Indian"],
				"image" : "makkhans_1.jpg"
			},

			"Vada_Sambhar" : {
				"price" : [90],
				"category" : ["Veg","South-Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Mini_Cut_Dosa" : {
				"price" : [195],
				"category" : ["Veg","South-Indian"],
				"image" : "makkhans_1.jpg"
			}
		},

		"Uttapam" : {


			"Plain_Uttapam" : {
				"price" : [130],
				"category" : ["Veg","South-Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Onion_Uttapam" : {
				"price" : [130],
				"category" : ["Veg","South-Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Tomato_Uttapam" : {
				"price" : [130],
				"category" : ["Veg","South-Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Paneer_Uttapam" : {
				"price" : [165],
				"category" : ["Veg","South-Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Vegetable_Uttapam" : {
				"price" : [150],
				"category" : ["Veg","South-Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Onion_Tomato_Uttapam" : {
				"price" : [140],
				"category" : ["Veg","South-Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Capsicum_Onion_Mushroom_Uttapam" : {
				"price" : [180],
				"category" : ["Veg","South-Indian"],
				"image" : "makkhans_1.jpg"
			}

		},

		"Chinese" : {


			"Spring_Roll" : {
				"price" : [150],
				"category" : ["Veg","Chinese","Rolls"],
				"image" : "makkhans_1.jpg"
			},

			"Schezwan_Roll" : {
				"price" : [150],
				"category" : ["Veg","Chinese","Rolls"],
				"image" : "makkhans_1.jpg"
			},
			
			"Chilli_Paneer_Roll" : {
				"price" : [200],
				"category" : ["Veg","Chinese","Rolls"],
				"image" : "makkhans_1.jpg"
			}
			
		},

		"Fried_Rice" : {


			"Veg_Fried_Rice" : {
				"price" : [120],
				"category" : ["Veg","Rice"],
				"image" : "makkhans_1.jpg"
			},
			
			"Paneer_Fried_Rice" : {
				"price" : [160],
				"category" : ["Veg","Rice"],
				"image" : "makkhans_1.jpg"
			},
			
			"Mushroom_Fried_Rice" : {
				"price" : [180],
				"category" : ["Veg","Rice"],
				"image" : "makkhans_1.jpg"
			},
			
			"Schezwan_Fried-Rice" : {
				"price" : [170],
				"category" : ["Veg","Rice"],
				"image" : "makkhans_1.jpg"
			}
		},

		"Gravy_Delights" : {


			"Chilli_Paneer" : {
				"price" : [210],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			
			"Chilli_Potato" : {
				"price" : [180],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			
			"Chilli_Vegetable" : {
				"price" : [180],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			
			"Chilli_Mushroom" : {
				"price" : [240],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			
			"Veg_Manchurian" : {
				"price" : [210],
				"category" : ["Veg","Chinese"],
				"image" : "makkhans_1.jpg"
			}
		},

		"Paneer_Delights" : {


			"Paneer_Bhujia" : {
				"price" : [185],
				"category" : ["Veg","North_Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Palak_Paneer" : {
				"price" : [190],
				"category" : ["Veg","North_Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Matar_Paneer" : {
				"price" : [110,195],
				"category" : ["Veg","North_Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Paneer_Butter_Masala" : {
				"price" : [110,195],
				"category" : ["Veg","North_Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Paneer_Do_Pyaza" : {
				"price" : [195],
				"category" : ["Veg","North_Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Shahi_Paneer" : {
				"price" : [210],
				"category" : ["Veg","North_Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Kadhai_Paneer" : {
				"price" : [220],
				"category" : ["Veg","North_Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Malai_Kofta" : {
				"price" : [135,220],
				"category" : ["Veg","North_Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Paneer_Pasanda" : {
				"price" : [240],
				"category" : ["Veg","North_Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Paneer_Lababdaar" : {
				"price" : [240],
				"category" : ["Veg","North_Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Paneer_Tikka_Masala" : {
				"price" : [240],
				"category" : ["Veg","North_Indian"],
				"image" : "makkhans_1.jpg"
			}


		},
		
		"Soyabean_Delight" : {


			"Matar_Soyabean" : {
				"price" : [195],
				"category" : ["Veg","North_Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Soyabean_Do_Pyaza" : {
				"price" : [195],
				"category" : ["Veg","North_Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Soyabean_Keema_Matar" : {
				"price" : [195],
				"category" : ["Veg","North_Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Kadhai_Soyabean" : {
				"price" : [220],
				"category" : ["Veg","North_Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Methi_Malai_Soyabean_Matar" : {
				"price" : [240],
				"category" : ["Veg","North_Indian"],
				"image" : "makkhans_1.jpg"
			}

		},

		"Vegetable_Delights" : {


			"Mix_Veg" : {
				"price" : [120],
				"category" : ["Veg","North_Indian"],
				"image" : "makkhans_1.jpg"
			},

			"Chana_Masala" : {
				"price" : [120],
				"category" : ["Veg","North_Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Jeera_Aloo" : {
				"price" : [120],
				"category" : ["Veg","North_Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Gobhi_Aloo" : {
				"price" : [120],
				"category" : ["Veg","North_Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Matar_Fry" : {
				"price" : [130],
				"category" : ["Veg","North_Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Aloo_Matar" : {
				"price" : [160],
				"category" : ["Veg","North_Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Achari_Aloo" : {
				"price" : [175],
				"category" : ["Veg","North_Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Aloo_Shimla_Mirch" : {
				"price" : [175],
				"category" : ["Veg","North_Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Kashmiri_Aloo" : {
				"price" : [210],
				"category" : ["Veg","North_Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Kadai_Mushroom" : {
				"price" : [240],
				"category" : ["Veg","North_Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Matar_Mushroom" : {
				"price" : [240],
				"category" : ["Veg","North_Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Mushroom_Do_Pyaza" : {
				"price" : [240],
				"category" : ["Veg","North_Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Kaju_Korma" : {
				"price" : [260],
				"category" : ["Veg","North_Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Stuffed_Tomato" : {
				"price" : [240],
				"category" : ["Veg","North_Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Makkhans_Special_Shahi_Korma" : {
				"price" : [260],
				"category" : ["Veg","North_Indian"],
				"image" : "makkhans_1.jpg"
			}
			
		},

		"Dal" : {


			"Dal_Plain" : {
				"price" : [100],
				"category" : ["Veg","North_Indian"],
				"image" : "makkhans_1.jpg"
			},

			"Dal_Fry" : {
				"price" : [110],
				"category" : ["Veg","North_Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Dal_Tadka" : {
				"price" : [125],
				"category" : ["Veg","North_Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Dal_Panjabi" : {
				"price" : [160],
				"category" : ["Veg","North_Indian"],
				"image" : "makkhans_1.jpg"
			},
			
			"Dal_Makhani" : {
				"price" : [170],
				"category" : ["Veg","North_Indian"],
				"image" : "makkhans_1.jpg"
			}

		},

		"Rice" : {


			"Plain_Rice" : {
				"price" : [60,90],
				"category" : ["Veg","Rice"],
				"image" : "makkhans_1.jpg"
			},

			"Jeera_Rice" : {
				"price" : [105],
				"category" : ["Veg","Rice"],
				"image" : "makkhans_1.jpg"
			},
			
			"Matar_Pulao" : {
				"price" : [130],
				"category" : ["Veg","Rice"],
				"image" : "makkhans_1.jpg"
			},
			
			"Paneer_Pulao" : {
				"price" : [160],
				"category" : ["Veg","Rice"],
				"image" : "makkhans_1.jpg"
			},
			
			"Navratna_Pulao" : {
				"price" : [175],
				"category" : ["Veg","Rice"],
				"image" : "makkhans_1.jpg"
			},
			
			"Veg_Pulao" : {
				"price" : [175],
				"category" : ["Veg","Rice"],
				"image" : "makkhans_1.jpg"
			},
			
			"Vegetable_Biryani_With_Raita" : {
				"price" : [225],
				"category" : ["Veg","Rice"],
				"image" : "makkhans_1.jpg"
			}
		},

		"Naan_&_Roti" : {


			"Roti" : {
				"price" : [16],
				"category" : ["Veg","Bread"],
				"image" : "makkhans_1.jpg"
			},
			
			"Butter_Roti" : {
				"price" : [20],
				"category" : ["Veg","Bread"],
				"image" : "makkhans_1.jpg"
			},
			
			"Missi_Roti" : {
				"price" : [35],
				"category" : ["Veg","Bread"],
				"image" : "makkhans_1.jpg"
			},
			
			"Plain_Naan" : {
				"price" : [45],
				"category" : ["Veg","Bread"],
				"image" : "makkhans_1.jpg"
			},
			
			"Butter_Naan" : {
				"price" : [50],
				"category" : ["Veg","Bread"],
				"image" : "makkhans_1.jpg"
			},
			
			"Garlic_Naan" : {
				"price" : [70],
				"category" : ["Veg","Bread"],
				"image" : "makkhans_1.jpg"
			},
			
			"Stuff_Naan" : {
				"price" : [80],
				"category" : ["Veg","Bread"],
				"image" : "makkhans_1.jpg"
			},
			
			"Kashmiri_Naan" : {
				"price" : [90],
				"category" : ["Veg","Bread"],
				"image" : "makkhans_1.jpg"
			},
			
			"Laccha_Paratha" : {
				"price" : [35],
				"category" : ["Veg","Bread"],
				"image" : "makkhans_1.jpg"
			},

			"Pudina_Laccha_Paratha" : {
				"price" : [50],
				"category" : ["Veg","Bread"],
				"image" : "makkhans_1.jpg"
			},
			
			"Stuffed_Kulcha" : {
				"price" : [70],
				"category" : ["Veg","Bread"],
				"image" : "makkhans_1.jpg"
			}
		},

		"Dahi_&_Raita" : {


			"Dahi" : {
				"price" : [60],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			
			"Onion_Raita" : {
				"price" : [90],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			
			"Boondi_Raita" : {
				"price" : [90],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			
			"Aloo_Raita" : {
				"price" : [90],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			
			"Vegetable_Raita" : {
				"price" : [100],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			
			"Pineapple_Raita_Plain" : {
				"price" : [135],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			
			"Pineapple_Raita_Masala" : {
				"price" : [135],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},

			"Furit_Raita" : {
				"price" : [135],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			}
		},

		"Salad_&_Papad" : {


			"Papad_Dry" : {
				"price" : [12],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},

			"Padad_Fry" : {
				"price" : [20],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			
			"Onion_Salad" : {
				"price" : [25,50],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			
			"Green_Salad" : {
				"price" : [35,70],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			
		},

		"Kuch_Meetha_Ho_Jaye" : {


			"Gulab_Jamun_1_pcs" : {
				"price" : [25],
				"category" : ["Veg","Dessert"],
				"image" : "makkhans_1.jpg"
			},

			"Pyala_Kheer" : {
				"price" : [40],
				"category" : ["Veg","Dessert"],
				"image" : "makkhans_1.jpg"
			}
		},

		"Thali_North_Indian" : {


			"Mini_Tiffin_(Dal_Tadka_+_Dry_Vegetable_+_2_Parantha_+_Pickle_+_Salad)" : {
				"price" : [110],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			
			"Snacks_Box_(1Pcs_Veg_Cutlet_+_1Pcs_Paneer_Cutlet_+_French_Fries_+_1Pcs_Sandwich_+_1Pcs_Gulab_Jamun_+_1Pcs_Tomato_Sauce)" : {
				"price" : [110],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			
			"Economy_Thai_(Dal_Fry_+_Dry_Vegetable_+_Gravy_Vegetable_+_Rice_+_2_Parantha_+_Boondi_Raita_+_Pickle_+_Sweet)" : {
				"price" : [155],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			
			"Special_Thali_(Dal_Fry_+_Dry_Vegetable_+_Matar_paneer_+_Rice_+_2_Parantha_+_Pickle_+_Boondi_Raita_+_Salad_+_Papad_+_Pickle_+_1_Sweet)" : {
				"price" : [175],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			
			"Navratna_Thali_(Dal_Makhani_+_Dry_Vegetable_+_Gravy_Paneer_+_1Pcs_Malai_Kofta_+_2_Parantha_+_Pickle_+_Rice_+_Raita_+_Salad_+_Papad_+_1_Sweet)" : {
				"price" : [220],
				"category" : ["Veg"],
				"image" : "makkhans_1.jpg"
			},
			
			"Continental_Thali_(2Pcs_Sandwich_+_Bolled_Veg_With_Pasta_+_French_Fries_+_One_Veg_Cutlet_+_One_Paneer_Cutlet_+_One_Stuff_Tomato_+_One_Stuff_Capsicum_+_One_Sweet)" : {
				"price" : [220],
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

