var MongoClient = require('mongodb').MongoClient;
var mongourl = "mongodb://localhost:27017/";


var feel_it = {
	//"_id" : ObjectId("02"),
	"Location" : {
		"lat" : 25.430529,
		"long" : 81.766967
	},

	"availability" : {
		"uptime" : 11,
		"downtime" : 22
	},
	"image":"feel_it.jpg",
	"Offers":[],
	"number" : 7985404152,
	"feature" : "Value For Money",
	"name" : "Feel It",
  	"rating":3.7,
  	"HotDeals":[
	{
		name:"Kadai_Chicken",
		price:[300],
		description:"Specificaly for IIITA. Take it soon. Tandoor Paratha After 6 PM To 11 PM",
		image: "butter_chicken_1.jpg"
	},

	{
		name:"Kadahi_Paneer",
		price:[220],
		description:"Specifically for IIITA. Take it soon.Tandoor Paratha After 6 PM To 11 PM",
		image : "kadai_paneer_2.jpg"
	}

  ],

  "TopRated":[

  {Category:"Indian_Dish_Veg",SubCategory:"Paneer_Rajasthani",Ind:1},
  {Category:"Non_Veg",SubCategory:"Chicken_Handi",Ind:1}

  ],

	"menu" : {

		"Break_Fast" : {


			"Aloo_Paratha_2pc" : {
				"price" : [80],
				"category" : ["Veg","Breakfast"],
				"image" : "breakfast_1.jpg"
			},
			
			"Onion_Paratha_2pc" : {
				"price" : [70],
				"category" : ["Veg","Breakfast"],
				"image" : "breakfast_1.jpg"
			},
			
			"Gobhi_Paratha_2pc" : {
				"price" : [80],
				"category" : ["Veg","Breakfast"],
				"image" : "breakfast_1.jpg"
			},
			
			"Mix_Paratha_2pc" : {
				"price" : [100],
				"category" : ["Veg","Breakfast"],
				"image" : "breakfast_1.jpg"
			},
			
			"Paneer_Paratha_2pc" : {
				"price" : [120],
				"category" : ["Veg","Breakfast"],
				"image" : "breakfast_1.jpg"
			},
			
			"Chola_Bhatura" : {
				"price" : [70],
				"category" : ["Veg","Breakfast"],
				"image" : "breakfast_1.jpg"
			},
			
			"Pao_Bhaji" : {
				"price" : [40],
				"category" : ["Veg","Breakfast"],
				"image" : "breakfast_1.jpg"
			},
			
			"Puri_Bhaji" : {
				"price" : [40],
				"category" : ["Veg","Breakfast"],
				"image" : "breakfast_1.jpg"
			},
			
			"Poha" : {
				"price" : [30],
				"category" : ["Veg","Breakfast"],
				"image" : "breakfast_1.jpg"
			},
			
			"Veg_Pakoda" : {
				"price" : [40],
				"category" : ["Veg","Breakfast"],
				"image" : "breakfast_1.jpg"
			},
			
			"Mix_Pokoda" : {
				"price" : [50],
				"category" : ["Veg","Breakfast"],
				"image" : "breakfast_1.jpg"
			},

			"Paneer_Pakoda" : {
				"price" : [90],
				"category" : ["Veg","Breakfast"],
				"image" : "breakfast_1.jpg"
			},
			
			"Patato_Petees" : {
				"price" : [40],
				"category" : ["Veg","Breakfast"],
				"image" : "breakfast_1.jpg"
			},
			
			"Finger_Chilps" : {
				"price" : [50],
				"category" : ["Veg","Breakfast"],
				"image" : "breakfast_1.jpg"
			}

		},

		"Continental" : {

			"Cheese_Pizza" : {
				"price" : [100],
				"category" : ["Pizza","Veg","Fastfood"],
				"image" : "pizza_cheese_1.jpg"
			},

			"Veg_Pizza" : {
				"price" : [120],
				"category" : ["Pizza","Veg","Fastfood"],
				"image" : "pizza_cheese_1.jpg"
			},

			"Mozeko_Pizza" : {
				"price" : [150],
				"category" : ["Pizza","Veg","Fastfood"],
				"image" : "pizza_cheese_1.jpg"
			},

			"Paneer_Pizza" : {
				"price" : [150],
				"category" : ["Pizza","Veg","Fastfood"],
				"image" : "pizza_paneer_3.jpg"
			},

			"Chilli_Paneer_Pizza" : {
				"price" : [180],
				"category" : ["Pizza","Veg","Fastfood"],
				"image" : "pizza_paneer_3.jpg"
			},

			"Mashroom_Pizza" : {
				"price" : [160],
				"category" : ["Pizza","Veg","Fastfood"],
				"image" : "pizza_1.jpg"
			},


			"Chicken_Chilli_Pizza" : {
				"price" : [200],
				"category" : ["Pizza","Non-Veg","Fastfood"],
				"image" : "pizza_chicken_1.jpg"
			},


			"Chicken_Tikka_Pizza" : {
				"price" : [250],
				"category" : ["Pizza","Non-Veg","Fastfood"],
				"image" : "pizza_chicken_1.jpg"
			},

			"Paneer_Tikka_Pizza" : {
				"price" : [200],
				"category" : ["Pizza","Veg","Fastfood"],
				"image" : "pizza_paneer_2.jpg"
			},

			"Veg_Masala_Pizza" : {
				"price" : [180],
				"category" : ["Pizza","Veg","Fastfood"],
				"image" : "pizza_2.jpg"
			},

			"Non-Veg_Pizza" : {
				"price" : [200],
				"category" : ["Pizza","Non-Veg","Fastfood"],
				"image" : "pizza_chicken_1.jpg"
			},

		},

		"Beverage" : {


			"Cold_Coffee" : {
				"price" : [95],
				"category" : ["Drinks"],
				"image" : "cold_coffee_2.jpg"
			},

			
			"Cold_Drink" : {
				"price" : [50],
				"category" : ["Drinks"],
				"image" : "cold_drink_1.jpg"
			},

			"Ice_Tea" : {
				"price" : [50],
				"category" : ["Drinks"],
				"image" : "cold_coffee_2.jpg"
				
			},

			"Chocolate_Milk_Shake" : {
				"price" : [120],
				"category" : ["Drinks"],
				"image" : "cold_coffee_1.jpg"
				
			},
			
			"Strawberry_Shake" : {
				"price" : [120],
				"category" : ["Drinks"],
				"image" : "Drinks_1.jpg"
				
			},

			"Pineapple_Shake" : {
				"price" : [120],
				"category" : ["Drinks"],
				"image" : "drinks_2.jpg"
			},

			"Mango_Shake" : {
				"price" : [120],
				"category" : ["Drinks"],
				"image" : "Drinks_1.jpg"
			},

			"Vanilla" : {
				"price" : [100],
				"category" : ["Drinks"],
				"image" : "Drinks_1.jpg"
			},

			"Sweet_Fememal_Tower" : {
				"price" : [50],
				"category" : ["Drinks"],
				"image" : "Drinks_1.jpg"
				
			},

			"Fresh_Lemon_Soda" : {
				"price" : [100],
				"category" : ["Drinks"],
				"image" : "leamonade_1.jpg"
				
			},

			"Fruit_Punch" : {
				"price" : [90],
				"category" : ["Drinks"],
				"image" : "Drinks_1.jpg"
				
			},

			"Sikanji" : {
				"price" : [90],
				"category" : ["Drinks"],
				"image" : "leamonade_1.jpg"
				
			},

			"Badam_Milk_Shake_Special" : {
				"price" : [100],
				"category" : ["Drinks"],
				"image" : "Drinks_1.jpg"
				
			},

			"Sweet_Lassi" : {
				"price" : [60],
				"category" : ["Drinks"],
				"image" : "lassi_1.jpg"
			},

			"Chach" : {
				"price" : [40],
				"category" : ["Drinks"],
				"image" : "red_bull_1.jpg"
				
			},

			"Tea" : {
				"price" : [40],
				"category" : ["Drinks"],
				"image" : "hot_coffee_2.jpg"
			},

			"Coffee" : {
				"price" : [30],
				"category" : ["Drinks"],
				"image" : "hot_coffee_2.jpg"
			},

			"Milk_Badam" : {
				"price" : [50],
				"category" : ["Drinks"],
				"image" : "Drinks_1.jpg"
				
			},
			"Butter_Scoch" : {
				"price" : [90],
				"category" : ["Drinks"],
				"image" : "Drinks_1.jpg"
				
			}

		},


		"Egg" : {

			"Bread_Omlet_2Egg" : {
				"price" : [50],
				"category" : ["Non-Veg","Egg"],
				"image" : "egg_fried_1.jpg"
			},

			"Bhurji_Bread_2Egg" : {
				"price" : [70],
				"category" : ["Non-Veg","Egg"],
				"image" : "egg_fried_1.jpg"
			},

			"Half_Fry_2Egg" : {
				"price" : [50],
				"category" : ["Non-Veg","Egg"],
				"image" : "egg_fried_1.jpg"
			},

			"Boil_Egg_2Egg" : {
				"price" : [35],
				"category" : ["Non-Veg","Egg"],
				"image" : "masala_omelette.jpg"
			},

			"Egg_Kari_2Egg" : {
				"price" : [60],
				"category" : ["Non-Veg","Egg"],
				"image" : "egg_curry_rice_roti.jpg"
			},

			"Egg_Masala" : {
				"price" : [80,150],
				"category" : ["Non-Veg","Egg"],
				"image" : "egg_bhurji_1.jpg"
			},

			"Omlet" : {
				"price" : [50],
				"category" : ["Non-Veg","Egg"],
				"image" : "masala_omelette_1.jpg"
			},

			"Bhurji_2Egg" : {
				"price" : [60],
				"category" : ["Non-Veg","Egg"],
				"image" : "egg_bhurji_1.jpg"
			}
				
		},

		"Sandwich" : {



			"Veg_Sandwich" : {
				"price" : [30],
				"category" : ["Sandwich","Veg"],
				"image" : "veg_sandwich_1.jpg"
			},

			"Masala_Sandwich" : {
				"price" : [40],
				"category" : ["Sandwich","Veg"],
				"image" : "veg_sandwich_1.jpg"
			},

			"Cheese_SandWich" : {
				"price" : [50],
				"category" : ["Sandwich","Veg"],
				"image" : "veg_sandwich_1.jpg"
			},

			"Paneer_Sandwich" : {
				"price" : [50],
				"category" : ["Sandwich","Veg"],
				"image" : "GES_veg_cheese_sandwich.jpg"
			},

			"Egg_Sandwich" : {
				"price" : [60],
				"category" : ["Sandwich","Non-Veg","Egg"],
				"image" : "GES_veg_cheese_sandwich.jpg"
			},

			"Chicken_Sandwich" : {
				"price" : [80],
				"category" : ["Sandwich","Non-veg"],
				"image" : "GES_grilled_cheese.jpg"
			},

			"Veg_Cheese_SandWich" : {
				"price" : [60],
				"category" : ["Sandwich","Veg"],
				"image" : "veg_sandwich_1.jpg"
			},

			"Toost_Sandwich" : {
				"price" : [50],
				"category" : ["Sandwich","veg"],
				"image" : "GES_grilled_cheese.jpg"
			},

			"Veg_Grilled_Sandwich" : {
				"price" : [60],
				"category" : ["Sandwich","Veg"],
				"image" : "GES_veg_cheese_sandwich.jpg"
			},

			"Non_VegGrilled_Sandwich" : {
				"price" : [80],
				"category" : ["Sandwich","Non-Veg"],
				"image" : "GES_veg_cheese_sandwich.jpg"
			},

			"Club_Sandwich" : {
				"price" : [100],
				"category" : ["Sandwich","veg"],
				"image" : "GES_veg_cheese_sandwich.jpg"
			},
			"Bread_Butter_Sandwich" : {
				"price" : [20],
				"category" : ["Sandwich","veg"],
				"image" : "GES_veg_cheese_sandwich.jpg"
			},
			"Toost_Butter_Sandwich" : {
				"price" : [30],
				"category" : ["Sandwich","veg"],
				"image" : "GES_veg_cheese_sandwich.jpg"
			}

		},


		"Burger" : {



			"Veggie_Burger" : {
				"price" : [50],
				"category" : ["Burger","Veg","Fastfood"],
				"image" : "veg_burger_3.jpg"
			},

			"Paneer_Burger" : {
				"price" : [70],
				"category" : ["Burger","Veg","Fastfood"],
				"image" : "veg_burger_1.jpg"
			},

			"Cheese_Burger" : {
				"price" : [80],
				"category" : ["Burger","Veg","Fastfood"],
				"image" : "veg_burger_1.jpg"
			},

			"Chicken_Burger" : {
				"price" : [120],
				"category" : ["Burger","Non-veg","Fastfood"],
				"image" : "chicken_burger_2.jpg"
			},

			"Special_Burger_Veg" : {
				"price" : [120],
				"category" : ["Burger","Veg","Fastfood"],
				"image" : "veg_burger_1.jpg"
			},

			"Special_Non_Veg_Burger" : {
				"price" : [150],
				"category" : ["Burger","Non-veg","Fastfood"],
				"image" : "chicken_burger_1.jpg"
			}


		},

		

		
		"Non_Veg" : {


			"Butter_Chicken" : {
				"price" : [180,350],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_1.jpg"
			},

			"Chicken_Masala" : {
				"price" : [150,300],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			},

			"Chicken_Curry" : {
				"price" : [150,300],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "chicken_curry_1.jpg"
			},

			"Chicken_DO_Pyaza" : {
				"price" : [150,300],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "Chicken_DO_Pyaza_1.jpg"
			},

			"Chicken_Rajasthani" : {
				"price" : [170,320],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_4.jpg"
			},

			"Chicken_Hydrabadi" : {
				"price" : [170,320],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_4.jpg"
			},

			"Chicken_Kohlapuri" : {
				"price" : [180,340],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_4.jpg"
			},

			"Chicken_Rugen_Josh" : {
				"price" : [150,300],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			},

			"Chicken_Hungama" : {
				"price" : [140,280],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_4.jpg"
			},

			"Chicken_Awad_Masala" : {
				"price" : [150,320],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			},

			"Chicken_Tikka_Masala" : {
				"price" : [150,320],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			},

			"Chicken_Kali_Mirch" : {
				"price" : [150,320],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_2.jpg"
			},

			"Chicken_Home_Style" : {
				"price" : [170,350],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_2.jpg"
			},

			"Chicken_Pesawari" : {
				"price" : [140,280],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_2.jpg"
			},

			"Chicken_Lohri" : {
				"price" : [170,320],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_2.jpg"
			},

			"Chicken_Punjabi" : {
				"price" : [200,350],
				"category" : ["Non-veg","Chicken"],
				"image" : "butter_chicken_2.jpg"
			},

			"Chicken_Chatpata" : {
				"price" : [150,300],
				"category" : ["Non-veg","Chicken"],
				"image" : "butter_chicken_2.jpg"
			},

			"Chicken_Kashmiri" : {
				"price" : [200,350],
				"category" : ["Non-veg","Chicken"],
				"image" : "chicken_masala_1.jpg"
			},

			"Kadahi_Chicken" : {
				"price" : [150,300],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			},

			"Chicken_Handi" : {
				"price" : [170,320],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "chicken_curry_2.jpg"
			},

			"Chicken_Tawa" : {
				"price" : [180,330],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			},

			"Chicken_Maharaja" : {
				"price" : [120,330],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			},

			"Chicken_Lawabdar" : {
				"price" : [170,320],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			},

			"Murg_Mosallam" : {
				"price" : [500],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			},

			"Chicken_Reshmi_Masala" : {
				"price" : [180,330],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			}

		},


		"Indian_Dish_Veg" : {


			"Paneer_Butter_Masala" : {
				"price" : [120,220],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy_2.jpg"
			},
			
			"Kadahi_Paneer" : {
				"price" : [120,220],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy_2.jpg"
			},
			
			"Shaahi_Paneer" : {
				"price" : [130,240],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy_2.jpg"
			},
			
			"Paneer_Do_Pyaza" : {
				"price" : [120,220],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy_2.jpg"
			},
			
			"Paneer_Tikka_Masala" : {
				"price" : [120,220],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy_2.jpg"
			},
			
			"Paneer_Lawabdar" : {
				"price" : [110,220],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy_2.jpg"
			},
			
			"Paneer_Auad_Masala" : {
				"price" : [120,220],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy_2.jpg"
			},
			
			"Paneer_Shajwani" : {
				"price" : [140,240],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy_2.jpg"
			},
			
			"Paneer_Maharaja" : {
				"price" : [130,250],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy_2.jpg"
			},
			
			"Paneer_Hydabadi" : {
				"price" : [110,220],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy_2.jpg"
			},
			
			"Paneer_Lohari" : {
				"price" : [120,230],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy_2.jpg"
			},
			
			"Paneer_Makhmali" : {
				"price" : [110,220],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy_2.jpg"
			},
			
			"Paneer_Achri" : {
				"price" : [100,200],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy_2.jpg"
			},
			
			"Paneer_Tiranga" : {
				"price" : [140,250],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy_2.jpg"
			},
			
			"Paneer_Hungama" : {
				"price" : [140,250],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy_2.jpg"
			},
			
			"Paneer_Pesawri" : {
				"price" : [110,220],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy_2.jpg"
			},
			
			"Paneer_Kali_Mirchi" : {
				"price" : [120,230],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy_2.jpg"
			},
			
			"Paneer_Kohlapuri" : {
				"price" : [110,220],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy_2.jpg"
			},
			
			"Paneer_Rajasthani" : {
				"price" : [130,240],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy_2.jpg"
			},
			
			"Paneer_Pasanda" : {
				"price" : [130,240],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy_2.jpg"
			},
			
			"Khowa_Paneer" : {
				"price" : [140,240],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy_2.jpg"
			},
			
			"Paneer_Jaipuri" : {
				"price" : [100,200],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy_2.jpg"
			},
			
			"Paneer_Bhurji" : {
				"price" : [100,180],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy_2.jpg"
			},


			"Paneer_Chatpata" : {
				"price" : [120,220],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_butter_masala_1.jpg"
			}
		},

		"Indian_Dish_Mix_Veg" : {

			"Mix_Veg" : {
				"price" : [50,90],
				"category" : ["Veg"],
				"image" : "mix_veg_1.jpg"
			},
			
			"Veg_Jaal_Frezi" : {
				"price" : [60,100],
				"category" : ["Veg"],
				"image" : "mix_veg_1.jpg"
			},
			
			"Veg_Kohlapuri" : {
				"price" : [60,100],
				"category" : ["Veg"],
				"image" : "mix_veg_1.jpg"
			},
			
			"Veg_Rajasthani" : {
				"price" : [60,100],
				"category" : ["Veg"],
				"image" : "mix_veg_1.jpg"
			},
			
			"Veg_Korma" : {
				"price" : [80,120],
				"category" : ["Veg"],
				"image" : "mix_veg_1.jpg"
			},
			
			"Veg_Maharaja" : {
				"price" : [80,120],
				"category" : ["Veg",],
				"image" : "mix_veg_1.jpg"
			},
			
			"Veg_Hargali" : {
				"price" : [60,100],
				"category" : ["Veg"],
				"image" : "mix_veg_1.jpg"
			},
			
			"Veg_Tiranga" : {
				"price" : [80,150],
				"category" : ["Veg"],
				"image" : "mix_veg_1.jpg"
			},
			
			"Veg_Jaipuri" : {
				"price" : [60,100],
				"category" : ["Veg"],
				"image" : "mix_veg_1.jpg"
			},
			
			"Veg_Keema" : {
				"price" : [60,100],
				"category" : ["Veg"],
				"image" : "mix_veg_1.jpg"
			},
			
			"Chana_Masala" : {
				"price" : [60,100],
				"category" : ["Veg"],
				"image" : "mix_veg_1.jpg"
			},
			
			"Chatpata_Chana" : {
				"price" : [70,120],
				"category" : ["Veg"],
				"image" : "mix_veg_1.jpg"
			},
			
			"Aloo_Matar" : {
				"price" : [50,80],
				"category" : ["Veg"],
				"image" : "mix_veg_1.jpg"
			},
			
			"Aloo_Matar_Gobhi" : {
				"price" : [50,80],
				"category" : ["Veg"],
				"image" : "mix_veg_1.jpg"
			},
			
			"Aloo_Simla_Tamater" : {
				"price" : [40,70],
				"category" : ["Veg"],
				"image" : "mix_veg_1.jpg"
			},
			
			"Began_Bartha" : {
				"price" : [60],
				"category" : ["Veg"],
				"image" : "mix_veg_1.jpg"
			},
			
			"Tomato_Fry" : {
				"price" : [50,80],
				"category" : ["Veg"],
				"image" : "mix_veg_1.jpg"
			},
			
			"Aloo_Jeera" : {
				"price" : [50,80],
				"category" : ["Veg"],
				"image" : "mix_veg_1.jpg"
			},
			
			"Aloo_Bhujiya" : {
				"price" : [70],
				"category" : ["Veg"],
				"image" : "mix_veg_1.jpg"
			},

			"Rajma_Masala" : {
				"price" : [60,100],
				"category" : ["Veg"],
				"image" : "mix_veg_1.jpg"
			}
	
		},





		"Chinese" : {


			"Veg_Krispi" : {
				"price" : [50,80],
				"category" : ["Veg","Chinese"],
				"image" : "chinese_1.jpg"
			},
			
			"Chicken_Krispi" : {
				"price" : [80,150],
				"category" : ["Veg","Chinese"],
				"image" : "chinese_1.jpg"
			},
			
			"Veg_Sigwan" : {
				"price" : [50,80],
				"category" : ["Veg","Chinese"],
				"image" : "chinese_1.jpg"
			},
			
			"Chicken_Sigwan_Style" : {
				"price" : [70,140],
				"category" : ["Non-Veg","Chinese"],
				"image" : "chinese_1.jpg"
			},
			
			"Veg_Bread_Finger" : {
				"price" : [70,140],
				"category" : ["Veg","Chinese"],
				"image" : "chinese_1.jpg"
			},
			
			"Chicken_Bread_Finger" : {
				"price" : [70],
				"category" : ["Non-Veg","Chinese"],
				"image" : "chinese_1.jpg"
			},
			
			"Krispi_Honey_Chilli_Potato" : {
				"price" : [80],
				"category" : ["Veg","Chinese"],
				"image" : "chinese_1.jpg"
			},
			
			"Krispi_Mashroom" : {
				"price" : [80,120],
				"category" : ["Veg","Chinese"],
				"image" : "chinese_1.jpg"
			},
			
			"Krispy_Beby_Com" : {
				"price" : [80,120],
				"category" : ["Veg","Chinese"],
				"image" : "chinese_1.jpg"
			},
			
			"Paneer_Hot_Garlic_Shos" : {
				"price" : [90,150],
				"category" : ["Veg","Chinese"],
				"image" : "chinese_1.jpg"
			},
			
			"Chicken_Hot_Garlic_Shos" : {
				"price" : [100,200],
				"category" : ["Non-Veg","Chinese"],
				"image" : "chinese_1.jpg"
			},
			
			"Paneer_Sigwan" : {
				"price" : [80,140],
				"category" : ["Veg","Chinese"],
				"image" : "chinese_1.jpg"
			},
			
			"Chicken_Paneer_Sigwan" : {
				"price" : [80,150],
				"category" : ["Non-Veg","Chinese"],
				"image" : "chinese_1.jpg"
			},
			
			"Paneer_Peper" : {
				"price" : [80,150],
				"category" : ["Veg","Chinese"],
				"image" : "chinese_1.jpg"
			},
			
			"Chicken_Paneer_Peper" : {
				"price" : [100,200],
				"category" : ["Non-Veg","Chinese"],
				"image" : "chinese_1.jpg"
			},
			
			"Chilli_Paneer(Dry_Graui)" : {
				"price" : [150],
				"category" : ["Veg","Chinese"],
				"image" : "chinese_1.jpg"
			},
			
			"Chilli_Potato" : {
				"price" : [80],
				"category" : ["Veg","Chinese"],
				"image" : "chinese_1.jpg"
			},
			
			"Chiili_Mashroom" : {
				"price" : [60,100],
				"category" : ["Veg","Chinese"],
				"image" : "chinese_1.jpg"
			},
			
			"Chilli_Brbycom" : {
				"price" : [70,120],
				"category" : ["Veg","Chinese"],
				"image" : "chinese_1.jpg"
			},
			
			"Mashroom_Hot_Garlic_Shos(Veg)" : {
				"price" : [80,150],
				"category" : ["Veg","Chinese"],
				"image" : "chinese_1.jpg"
			},
			
			"Mashroom_Hot_Garlic_Shos(Non_VVeg)" : {
				"price" : [],
				"category" : ["Non-Veg","Chinese"],
				"image" : "chinese_1.jpg"
			},

			"Veg_Manchurian(Gravy/Dry)" : {
				"price" : [60,100],
				"category" : ["Veg","Chinese"],
				"image" : "chinese_1.jpg"
			},
			
			"Spring_Roll" : {
				"price" : [100],
				"category" : ["Veg","Chinese","Rolls"],
				"image" : "chinese_1.jpg"
			}
			
		},

		"Noodles" : {


			"Veg_Noodles" : {
				"price" : [40,70],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},
			
			"Veg_sIGWAN_Noodles" : {
				"price" : [50,80],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},
			
			"Veg_Singapuri" : {
				"price" : [60,90],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},
			
			"Veg_Hongkongo" : {
				"price" : [60,90],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},
			
			"American_Chopsi" : {
				"price" : [60,100],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},
			
			"Veg_Chopsi" : {
				"price" : [50,80],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},
			
			"Veg_Abrat_Noodles" : {
				"price" : [70],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},
			
			"Chine_Bhail" : {
				"price" : [70],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},
			
			"Egg_Noodles" : {
				"price" : [100],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},
			
			"Noodles_Sigwan" : {
				"price" : [130],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},
			
			"Fried_Rice_(Veg)" : {
				"price" : [100],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},
			
			"Fried_Rice_(Non_Veg)" : {
				"price" : [80,150],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},
			
			"Sigwan_Fried_Rice_(Veg)" : {
				"price" : [120],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},
			
			"Singapuri_Rice_(Veg)" : {
				"price" : [130],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},
			
			"Singapuri_Rice_(Non-Veg)" : {
				"price" : [],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},
			
			"Hongkong_Rice_(Veg)" : {
				"price" : [120],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},
			
			"Hongkong_Rice_(Non-Veg)" : {
				"price" : [130,220],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},
			
			"Veg_Sigwan_Biful_Rice" : {
				"price" : [150],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},
			
			"Non_Veg_Sigwan_Biful_Rice" : {
				"price" : [140,230],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},
			
			"Chineese_Plater_(Veg)" : {
				"price" : [200],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},
			
			"Chineese_Plater_(Non_Veg)" : {
				"price" : [300],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			}
		},

		"Kofta" : {


			"Veg_Kofta" : {
				"price" : [70,120],
				"category" : ["Veg","North_Indian"],
				"image" : "malai_kofta_1.jpg"
			},

			"Malae_Kofta" : {
				"price" : [100,200],
				"category" : ["Veg","North_Indian"],
				"image" : "malai_kofta_1.jpg"
			},
			
			"Palak_Kofta" : {
				"price" : [80,150],
				"category" : ["Veg","North_Indian"],
				"image" : "malai_kofta_1.jpg"
			},
			
			"Kadi" : {
				"price" : [50],
				"category" : ["Veg","North_Indian"],
				"image" : "malai_kofta_1.jpg"
			}
			
		},

		"Roti" : {


			"Tawa_Roti" : {
				"price" : [10],
				"category" : ["Indian_Bread"],
				"image" : "roti_1.jpg"
			},

			"Butter_Tawa_Roti" : {
				"price" : [15],
				"category" : ["Indian_Bread"],
				"image" : "roti_1.jpg"
			},

			"Tandoori_Roti" : {
				"price" : [15],
				"category" : ["Indian_Bread"],
				"image" : "tandoori_roti_2.jpg"
			},

			"Butter_Tandoori" : {
				"price" : [20],
				"category" : ["Indian_Bread"],
				"image" : "tandoori_roti_2.jpg"
			},

			"Mix_Roti" : {
				"price" : [20],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg"
			},

			"Butter_Mix_Roti" : {
				"price" : [25],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg"
			},

			"Stuff_Paratha" : {
				"price" : [20],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg"
			},

			"Butter_Stuff_Paratha" : {
				"price" : [30],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg"
			},

			"Naan" : {
				"price" : [50],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg"
			},
			
			"Kulcha" : {
				"price" : [60],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg"
			},

			"Kashmiri_Naan" : {
				"price" : [50],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg"
			},

			"Laccha_Paratha" : {
				"price" : [50],
				"category" : ["Indian_Bread"],
				"image" : "laccha_paratha_1.jpg"
			}

		},

		"Kabab" : {


			"Veg_Seek_Kabab" : {
				"price" : [120],
				"category" : ["kabab","Veg","North_Indian"],
				"image" : "kabab_paneer_1.jpg"
			},

			"Chicken_Seek_Kabab" : {
				"price" : [200],
				"category" : ["kabab","Non-Veg","North_Indian"],
				"image" : "kabab_2.jpg"
			},
			
			"Chicken_Afgani_Kabab" : {
				"price" : [250],
				"category" : ["kabab","Non-Veg","North_Indian"],
				"image" : "kabab_2.jpg"
			},
			
			"Chicken_Resmi_Kabab" : {
				"price" : [250],
				"category" : ["kabab","Non-Veg","North_Indian"],
				"image" : "kabab_2.jpg"
			},
			
			"Chicken_Tangri_Kabab" : {
				"price" : [225],
				"category" : ["kabab","Non-Veg","North_Indian"],
				"image" : "kabab_2.jpg"
			},
			
			"Chicken_Shahi_Kabab" : {
				"price" : [250],
				"category" : ["kabab","Non-Veg","North_Indian"],
				"image" : "kabab_2.jpg"
			}
			
		},


		"Mutton" : {


			"Mutton_Masala" : {
				"price" : [200,400],
				"category" : ["Mutton","Non-Veg","North_Indian"],
				"image" : "mutton_1.jpg"
			},

			"Mutton_Rogan_Rosh" : {
				"price" : [220,450],
				"category" : ["Mutton","Non-Veg","North_Indian"],
				"image" : "mutton_1.jpg"
			},
			
			"Mutton_Chap" : {
				"price" : [225,450],
				"category" : ["Mutton","Non-Veg","North_Indian"],
				"image" : "mutton_1.jpg"
			},
			
			"Mutton_Korma" : {
				"price" : [250,500],
				"category" : ["Mutton","Non-Veg","North_Indian"],
				"image" : "mutton_1.jpg"
			}
			
		},

		"Rice" : {


			"Plane_Rice" : {
				"price" : [40,80],
				"category" : ["Veg","Fried","Rice","North_Indian"],
				"image" : "rice_1.jpg"
			},

			"Jeera_Rice" : {
				"price" : [50,90],
				"category" : ["Veg","Fried","Rice","North_Indian"],
				"image" : "rice_1.jpg"
			},

			"Mix_Pulao" : {
				"price" : [60,100],
				"category" : ["Veg","Fried","Rice","North_Indian"],
				"image" : "rice_pulav_1.jpg"
				
			},

			"Veg_Polao" : {
				"price" : [170,180],
				"category" : ["Veg","Fried","Rice","North_Indian"],
				"image" : "rice_pulav_1.jpg"
				
			},

			"Nawratan_Polao" : {
				"price" : [170,180],
				"category" : ["Veg","Fried","Rice","North_Indian"],
				"image" : "rice_pulav_1.jpg"
				
			},

			"Veg_Biryani" : {
				"price" : [80,150],
				"category" : ["Veg","Fried","Rice","North_Indian"],	
				"image" : "biryani_1.jpg",
				
			},

			"Hydrabadi_Biryani" : {
				"price" : [80,150],
				"category" : ["Non-Veg","Fried","Rice","North_Indian"],
				"image" : "chicken_biryani_3.jpg"
				
			},

			"Navratan_Biryani" : {
				"price" : [90,170],
				"category" : ["Non-Veg","Fried","Rice","North_Indian"],
				"image" : "chicken_biryani_3.jpg"
				
			},
			
			"Egg_Biryani" : {
				"price" : [80,150],
				"category" : ["Non-Veg","Fried","Rice","North_Indian","Egg"],
				"image" : "rice_1.jpg"
				
			},

			"Chicken_Biryani" : {
				"price" : [100,200],
				"category" : ["Non-Veg","Fried","Rice","North_Indian"],
				"image" : "chicken_biryani_4.jpg"
				
			},

			"Mutton_Biryani" : {
				"price" : [125,250],
				"category" : ["Non-Veg","Fried","Rice","North_Indian"],
				"image" : "chicken_biryani_3.jpg"
				
			}
		},

		"Paneer_Starter" : {


			"Tandoor_Aloo_Tikka" : {
				"price" : [100],
				"category" : ["Starters","Veg"],
				"image" : "paneer_tikka_1.jpg"
			},
			
			"Paneer_Tikka" : {
				"price" : [120],
				"category" : ["Starters","Veg"],
				"image" : "paneer_tikka_1.jpg"
			},
			
			"Paneer_Malae_Tikka" : {
				"price" : [140],
				"category" : ["Starters","Veg"],
				"image" : "paneer_tikka_1.jpg"
			},
			
			"Paneer_Kali_Mirchi" : {
				"price" : [140],
				"category" : ["Starters","Veg"],
				"image" : "paneer_tikka_1.jpg"
			},

			"Paneer_Afgani_Tikka" : {
				"price" : [150],
				"category" : ["Starters","Veg"],
				"image" : "paneer_tikka_1.jpg"
			},
			
			"Paneer_Achari_Tikka" : {
				"price" : [140],
				"category" : ["Starters","Veg"],
				"image" : "paneer_tikka_1.jpg"
			},
			
			"Paneer_Hariyani_Tikka" : {
				"price" : [130],
				"category" : ["Starters","Veg"],
				"image" : "paneer_tikka_1.jpg"
			},
			
			"Paneer_Gilasi_Tikka" : {
				"price" : [140],
				"category" : ["Starters","Veg"],
				"image" : "paneer_tikka_1.jpg"
			}
		},

		"Mashroom" : {


			"Mashroom_Masala" : {
				"price" : [100,200],
				"category" : ["Veg"],
				"image" : "mushroom_1.jpg"
			},
			
			"Mashroom_Mutter" : {
				"price" : [120,220],
				"category" : ["Veg"],
				"image" : "mushroom_1.jpg"
			},
			
			"Mashroom_Kadahi" : {
				"price" : [130,230],
				"category" : ["Veg"],
				"image" : "mushroom_1.jpg"
			},
			
			"Mashroom_Hindi" : {
				"price" : [130,230],
				"category" : ["Veg"],
				"image" : "mushroom_1.jpg"
			},
			
			"Bebycom_Masala" : {
				"price" : [100,200],
				"category" : ["Veg"],
				"image" : "mushroom_1.jpg"
			},
			
			"Com_Mashroom_Masala" : {
				"price" : [130,230],
				"category" : ["Veg"],
				"image" : "mushroom_1.jpg"
			},
			
			"Mashroom_Rogan_Josh" : {
				"price" : [130,230],
				"category" : ["Veg"],
				"image" : "mushroom_1.jpg"
			}

		},

		"General_Thali" : {


			"Mater_Paneer_+_Daal_+_Rice_+_Roti(4_pc)_Raita_+_Salad" : {
				"price" : [120],
				"category" : ["Veg"],
				"image" : "thali_1.jpg"
			}
		},

		"Special_Thali" : {


			"Shahi_Paneer_+_Mix_Veg_+_Daal_+_Rice_+_Roti(4_pc)_Raita_+_Salad_+_Kala_Jaam(1pc)_+_Papad" : {
				"price" : [150],
				"category" : ["Veg"],
				"image" : "thali_2.jpg"
			}
		},

		"Pasta" : {


			"Veg_Red_Shos" : {
				"price" : [100],
				"category" : ["Veg","Pasta"],
				"image" : "pasta_w_1.jpg"
			},

			"Non_Veg_Red_Shos" : {
				"price" : [150],
				"category" : ["Non-Veg","Pasta"],
				"image" : "pasta_r_1.jpg"
			},

			"Veg_White_Shos" : {
				"price" : [100],
				"category" : ["Veg","Pasta"],
				"image" : "pasta_w_2.jpg"
			},

			"Non_Veg_White_Shos" : {
				"price" : [150],
				"category" : ["Non-Veg","Pasta"],
				"image" : "pasta_r_2.jpg"
			},

			"Veg_Rawita_Pasta" : {
				"price" : [120],
				"category" : ["Veg","Pasta"],
				"image" : "pasta_w_1.jpg"
			},

			"Non_Veg_Rawita_Pasta" : {
				"price" : [180],
				"category" : ["Non-Veg","Pasta"],
				"image" : "pasta_r_1.jpg"
			},

			"Veg_Micboni" : {
				"price" : [80],
				"category" : ["Veg","Pasta"],
				"image" : "pasta_w_2.jpg"
			},

			"Non_Veg_Micboni" : {
				"price" : [120],
				"category" : ["Non-Veg","Pasta"],
				"image" : "pasta_r_2.jpg"
			}
		},

		"Hukkah" : {


			"Duble_Apple" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},

			"Duble_Mint" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},
			
			"Mangahi_Paan" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},
			
			"Pann_Rasna" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},
			
			"Banarasi_Paan" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},
			
			"Brain_Peezer" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},
			
			"Spring_Water" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},
			
			"Kivi_With_Mint" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},
			
			"Kivi_Blast" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},
			
			"Sweet_16" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},
			
			"Kimaam" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},
			
			"Royal_Gold" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},
			
			"Jaffar_Pann" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},
			
			"On_The_Beach" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},
			
			"Rajnigandha" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},
			
			"Grapes" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},
			
			"Orange" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},
			
			"Kachi_Ken" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},
			
			"Gajava" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},
			
			"Mango" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},
			
			"Lemon" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},
			
			"Hoful_Poff" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},
			
			"Hasta_Lavista" : {
				"price" : [250],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			}
			
		},

		"Base_Hukkah" : {


			"Ice_Base" : {
				"price" : [300],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},

			"Mix_Juice_Base" : {
				"price" : [350],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},
						
			"Red_Bull_Base" : {
				"price" : [400],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},
						
			"Milk_Base" : {
				"price" : [300],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			},
						
			"Cold_Drink_Base" : {
				"price" : [350],
				"category" : ["Hukkah"],
				"image" : "hukkah_1.jpg"
			}
			
		}


	}
}

console.log(feel_it);

MongoClient.connect(mongourl,function(err,db){
        if(err)
        throw err;
        var dbo = db.db("khanabot");
        dbo.collection('restaurants').update({number:feel_it.number},{$set:{name:feel_it.name,rating:feel_it.rating,
        "Location":feel_it.Location,availability:feel_it.availability,HotDeals:feel_it.HotDeals,TopRated:feel_it.TopRated,
        menu:feel_it.menu,image:feel_it.image,Offers:feel_it.Offers}},function(err,mres){
          if(err)
          throw err;
          console.log("Wrote Your fucking object");
        });
	db.close();
});

