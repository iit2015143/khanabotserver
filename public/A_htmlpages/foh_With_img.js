var MongoClient = require('mongodb').MongoClient;
var mongourl = "mongodb://localhost:27017/";


var foh = {
	//"_id" : ObjectId("02"),
	"Location" : {
		"lat" : 25.430529,
		"long" : 81.766967
	},
	"number" : 8574418045,
	"feature" : "Value For Money",
	"name" : "Food Of Heaven",
	"image":"foh_1.jpg",
  "rating":3.5,
  "HotDeals":[
	{
		name:"Tandoor/Simple Paneer Paratha + Rayta",
		price:[45],
		description:"Specifically for IIITA. Take it soon. Tandoor Paratha After 6 PM To 11 PM",
		image: "paneer_paratha_1.jpg"
	},

	{
		name:"Tandoor/Simple Aaloo Paratha + Rayta",
		price:[40],
		description:"Specifically for IIITA. Take it soon.Tandoor Paratha After 6 PM To 11 PM",
		image : "aalu_paratha_1.jpg"
	},

	{
		name:"Egg Curry + Rice/ 2 Baby Paratha",
		price:[80],
		description:"Specifically for IIITA. Take it soon",
		image : "egg_curry_rice_roti.jpg"
	},

	{
		name:"Butter Chicken 2pc + 2 Baby Paratha",
		price:[135],
		description:"Specifically for IIITA. Take it soon",
		image : "butter_chicken_meal_1.jpg"
	},
	{
		name:"Veg Dum Biryani with Rayta, Salad",
		price:[120],
		description:"Specifically for IIITA. Take it soon",
		image : "dum_biryani_1.jpg"
	}

  ],

  "TopRated":[{Category:"Main_Course_Veg",SubCategory:"Paneer_Butter_Masala",Ind:0},
  {Category:"Inde_Spice",SubCategory:"Chicken_Masala",Ind:1},
  {Category:"Inde_Spice",SubCategory:"Murg_Kali_Mirch",Ind:1},
  {Category:"South_Indian",SubCategory:"Masala_Dosa",Ind:0},
  {Category:"South_Indian",SubCategory:"Paper_Dosa",Ind:0},
  {Category:"Indian_Bread",SubCategory:"Garlic_Naan",Ind:0},
  {Category:"Indian_Bread",SubCategory:"Laccha_Paratha",Ind:0}

  ],

	"menu" : {


		"Drinks" : {


			"Coffee_Hot" : {
				"price" : [30],
				"category" : ["Drinks"],
				"image" : "hot_coffee_2.jpg"
			},

			"Coffee_Cold" : {
				"price" : [60],
				"category" : ["Drinks"],
				"image" : "cold_coffee_2.jpg"
			},

			"Coffee_with_Icecream" : {
				"price" : [70],
				"category" : ["Drinks"],
				"image" : "cold_coffee_1.jpg"
			},

			"Sweet_Lassi" : {
				"price" : [40],
				"category" : ["Drinks"],
				"image" : "lassi_1.jpg"
			},

			"Salted_Lemon_Soda" : {
				"price" : [30],
				"category" : ["Drinks"],
				"image" : "leamonade_1.jpg"
			},

			"Sweet_Lemon_Soda" : {
				"price" : [30],
				"category" : ["Drinks"],
				"image" : "leamonade_1.jpg"
			},

			"Cold_Drink" : {
				"price" : [20],
				"category" : ["Drinks"],
				"image" : "cold_drink_1.jpg"
			},

			"Packaged_drinking_water" : {
				"price" : [20],
				"category" : ["Drinks"],
				"image" : "water_bottle_1.jpg"
			},

			"Red_Bull" : {
				"price" : [120],
				"category" : ["Drinks"],
				"image" : "red_bull_1.jpg"
			},

			"Lemon_Water" : {
				"price" : [20],
				"category" : ["Drinks"],
				"image" : "lemonade_1.jpg"
			},

			"Kesar_Badam_Shake" : {
				"price" : [90],
				"category" : ["Drinks"],
				"image" : "Drinks_1.jpg"
			},
			"Strawberry_Shake" : {
				"price" : [90],
				"category" : ["Drinks"],
				"image" : "Drinks_1.jpg"
			},
			"Pineapple_Shake" : {
				"price" : [90],
				"category" : ["Drinks"],
				"image" : "drinks_2.jpg"
			},

			"Mango_Shake" : {
				"price" : [90],
				"category" : ["Drinks"],
				"image" : "Drinks_1.jpg"
			}


		},


		"Sandwich" : {



			"Veg_Sandwich" : {
				"price" : [45],
				"category" : ["Sandwich","Veg"],
				"image" : "veg_sandwich_1.jpg"
			},

			"Cheese_SandWich" : {
				"price" : [55],
				"category" : ["Sandwich","Veg"],
				"image" : "veg_sandwich_1.jpg"
			},

			"Grilled_Sandwich_Veg_n_Cheese" : {
				"price" : [75],
				"category" : ["Sandwich","Veg"],
				"image" : "GES_veg_cheese_sandwich.jpg"
			},

			"Spinach_Corn_Sandwich" : {
				"price" : [70],
				"category" : ["Sandwich","Veg"],
				"image" : "GES_veg_cheese_sandwich.jpg"
			},

			"Chicken_Sandwich" : {
				"price" : [85],
				"category" : ["Sandwich","Non-veg"],
				"image" : "GES_grilled_cheese.jpg"
			},

			"Chicken_n_Cheese_Sandwich" : {
				"price" : [95],
				"category" : ["Sandwich","Non-veg"],
				"image" : "GES_grilled_cheese.jpg"
			},

			"Chicken_Tikka_Sandwich" : {
				"price" : [85],
				"category" : ["Sandwich","Non-veg"],
				"image" : "GES_veg_cheese_sandwich.jpg"
			}

		},


		"Burger" : {



			"Veggie_Burger" : {
				"price" : [65],
				"category" : ["Burger","Veg","Fastfood"],
				"image" : "veg_burger_3.jpg"
			},

			"Veg_Burger_with_Cheese" : {
				"price" : [75],
				"category" : ["Burger","Veg","Fastfood"],
				"image" : "veg_burger_1.jpg"
			},

			"Chicken_Burger" : {
				"price" : [80],
				"category" : ["Burger","Non-veg","Fastfood"],
				"image" : "chicken_burger_2.jpg"
			},

			"Chicken_Burger_with_Cheese" : {
				"price" : [95],
				"category" : ["Burger","Non-veg","Fastfood"],
				"image" : "chicken_burger_1.jpg"
			}


		},

		"Pizza" : {

			"Cheese_Pizza" : {
				"price" : [90],
				"category" : ["Pizza","Veg","Fastfood"],
				"image" : "pizza_cheese_1.jpg"
			},

			"Cheese_Tomato_Caps_n_Onion" : {
				"price" : [100],
				"category" : ["Pizza","Veg","Fastfood"],
				"image" : "pizza_cheese_1.jpg"
			},

			"Classic_Cheese_n_Tomato" : {
				"price" : [109],
				"category" : ["Pizza","Veg","Fastfood"],
				"image" : "pizza_cheese_1.jpg"
			},

			"Paneer_Chilly_Pizza" : {
				"price" : [110],
				"category" : ["Pizza","Veg","Fastfood"],
				"image" : "pizza_paneer_3.jpg"
			},

			"FOH_Special_Veg_Pizza" : {
				"price" : [125],
				"category" : ["Pizza","Veg","Fastfood"],
				"image" : "pizza_1.jpg"
			},

			"Mushroom_Onion_Capsicum" : {
				"price" : [100],
				"category" : ["Pizza","Veg","Fastfood"],
				"image" : "pizza_4.jpg"
			},

			"Paneer_Tikka_n_Green_Chilli" : {
				"price" : [110],
				"category" : ["Pizza","Veg","Fastfood"],
				"image" : "pizza_paneer_2.jpg"
			},

			"Veggie_Surprise" : {
				"price" : [125],
				"category" : ["Pizza","Veg","Fastfood"],
				"image" : "pizza_2.jpg"
			},

			"Italian_Pizza" : {
				"price" : [125],
				"category" : ["Pizza","Veg","Fastfood"],
				"image" : "pizza_2.jpg"
			},

			"Vegetarian_Fiesta" : {
				"price" : [125],
				"category" : ["Pizza","Veg","Fastfood"],
				"image" : "veg_burger_3.jpg"
			},

			"Paneer_Pataka" : {
				"price" : [120],
				"category" : ["Pizza","Veg","Fastfood"],
				"image" : "pizza_paneer_2.jpg"
			},

			"Paneer_N_Green_Olive_Mushroom_n_Red_chilli" : {
				"price" : [130],
				"category" : ["Pizza","Veg","Fastfood"],
				"image" : "pizza_cheese_1.jpg"
			},

			"Pizza_Four_Season" : {
				"price" : [125],
				"category" : ["Pizza","Veg","Fastfood"],
				"image" : "pizza_1.jpg"
			},

			"China_Town" : {
				"price" : [130],
				"category" : ["Pizza","Veg","Fastfood"],
				"image" : "pizza_3.jpg"
			},

			"FOH_Special_Non_Veg_Pizza" : {
				"price" : [90],
				"category" : ["Pizza","Non-veg","Fastfood"],
				"image" : "pizza_chicken_1.jpg"
			},

			"Hot_n_Spicy_Chicken" : {
				"price" : [130],
				"category" : ["Pizza","Non-veg","Fastfood"],
				"image" : "pizza_chicken_1.jpg"
			},

			"Chicken_Tikka_N_Red_Chilli" : {
				"price" : [135],
				"category" : ["Pizza","Veg","Fastfood"],
				"image" : "pizza_chicken_1.jpg"
			},

			"Mexican" : {
				"price" : [140],
				"category" : ["Pizza","Veg","Fastfood"],
				"image" : "pizza_3.jpg"
			},

			"Hawaiin_Chicken_pineapple_n_Plain_Chicken" : {
				"price" : [150],
				"category" : ["Pizza","Veg","Fastfood"],
				"image" : "pizza_4.jpg"
			}

		},

		"Lite_Bites" : {


			"Paneer_Pakoda" : {
				"price" : [60],
				"category" : ["Starters","Veg"],
				"image" : "Paneer_pakoda_1.jpg"
			},

			"Chhola_Bhatura" : {
				"price" : [60],
				"category" : ["Starters","Veg"],
				"image" : "Paneer_pakoda_1.jpg"
			},

			"Cutlets_Veg_2pc" : {
				"price" : [60],
				"category" : ["Starters","Veg"],
				"image" : "Paneer_pakoda_1.jpg"
			},

			"Cheese_Balls_6pc" : {
				"price" : [120],
				"category" : ["Starters","Veg"],
				"image" : "Paneer_pakoda_1.jpg"
			},

			"Cheese_Totmato_Chilli_6pc" : {
				"price" : [60],
				"category" : ["Starters","Veg"],
				"image" : "Paneer_pakoda_1.jpg"
			}

		},

		"Fries" : {


			"French_Fries" : {
				"price" : [60],
				"category" : ["Starters","Fries","Veg"],
				"image" : "french_fries_1.jpg"
			},

			"Fried_Fish_with_Tartar_Sauce" : {
				"price" : [150],
				"category" : ["Fries","Fries","Non-veg"],
				"image" : "fish_fried_1.jpg"
			},

			"Fish_Finger_with_Tarter_Sauce_8pc" : {
				"price" : [150],
				"category" : ["Fries","Fries","Non-veg"],
				"image" : "fish_fried_1.jpg"
			},

			"Tali_Hui_Machli" : {
				"price" : [150],
				"category" : ["Fries","Fries","Non-veg"],
				"image" : "fish_fried_2.jpg"
			}

		},

		"Inde_Spice" : {


			"Chicken_Masala" : {
				"price" : [160,280],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			},

			"Chicken_Curry" : {
				"price" : [150,280],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "chicken_curry_1.jpg"
			},

			"Butter_Chicken" : {
				"price" : [180,290],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_1.jpg"
			},

			"Chicken_DO_Pyaza" : {
				"price" : [175,280],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "Chicken_DO_Pyaza_1.jpg"
			},

			"Kadai_Chicken" : {
				"price" : [180,290],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_4.jpg"
			},

			"Chicken_Tikka_Masala" : {
				"price" : [200,300],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			},

			"Murg_Kali_Mirch" : {
				"price" : [200,300],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_2.jpg"
			},

			"Murg_Methi_Masala" : {
				"price" : [190,290],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_2.jpg"
			},

			"Murg_Lazeez_Hundi" : {
				"price" : [160,280],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_2.jpg"
			},

			"Murg_Khada_Masala" : {
				"price" : [200,310],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "butter_chicken_2.jpg"
			},

			"Chicken_Rugen_Josh" : {
				"price" : [180,310],
				"category" : ["Non-veg","Chicken","North_Indian"],
				"image" : "chicken_masala_1.jpg"
			},

			"Fish_Curry_3pc" : {
				"price" : [130],
				"category" : ["Non-veg","Chicken"],
				"image" : "fish_curry_1.jpg"
			},

			"Fish_Masala_3pc" : {
				"price" : [130],
				"category" : ["Non-veg","Chicken"],
				"image" : "fish_curry_2.jpg"
			},

			"Egg_Curry_2pc" : {
				"price" : [70],
				"category" : ["Non-veg","Chicken"],
				"image" : "chicken_masala_1.jpg"
			}

		},


		"Main_Course_Veg" : {


			"Dal_Arhar_Plain" : {
				"price" : [50],
				"category" : ["Veg","North_Indian"],
				"image" : "dal_1.jpg"
			},

			"Dal_Arhar_Fry" : {
				"price" : [60],
				"category" : ["Veg","North_Indian"],
				"image" : "dal_1.jpg"
			},

			"Dal_Arhar_Tadka" : {
				"price" : [80],
				"category" : ["Veg","North_Indian"],
				"image" : "dal_tadka_1.jpg"
			},

			"Dal_Makhni" : {
				"price" : [110],
				"category" : ["Veg","North_Indian"],
				"image" : "dal_makhani_1.jpg"
			},

			"Kadai_Paneer" : {
				"price" : [150],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_grakadai_paneer_2.jpg"
			},

			"Paneer_Butter_Masala" : {
				"price" : [160],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_butter_masala_1.jpg"
			},

			"Matar_Paneer" : {
				"price" : [130],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_matter_2.jpg"
			},

			"Palak_Paneer" : {
				"price" : [140],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_palak_2.jpg"
			},

			"Methi_Matar_Paneer" : {
				"price" : [130],
				"category" : ["Veg","North_Indian"],
				"image" : "matter_paneer_3.jpg"
			},

			"Paneer_Do_Pyaza" : {
				"price" : [140],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_do_1.jpg"
			},

			"Paneer_Korma" : {
				"price" : [140],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_korma_1.jpg"
			},

			"Paneer_Mushroom" : {
				"price" : [140],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy.jpg"
			},

			"Shahi_Paneer" : {
				"price" : [140],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_shai_2.jpg"
			},

			"Paneer_Kali_Mirch" : {
				"price" : [150],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy.jpg"
			},

			"Aloo_Gobhi" : {
				"price" : [90],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_gravy.jpg"
			},

			"Aloo_Matar" : {
				"price" : [90],
				"category" : ["Veg","North_Indian"],
				"image" : "aaloo_matter_1.jpg"
			},

			"Aloo_Zeera" : {
				"price" : [80],
				"category" : ["Veg","North_Indian"],
				"image" : "aaloo_matter_1.jpg"
			},

			"Mix_Veg" : {
				"price" : [110],
				"category" : ["Veg","North_Indian"],
				"image" : "aaloo_matter_1.jpg"
			},

			"Mix_veg_Jhalfrezi" : {
				"price" : [1110],
				"category" : ["Veg","North_Indian"],
				"image" : "aaloo_matter_1.jpg"
			},

			"Mater_Mushroom_makhan" : {
				"price" : [120],
				"category" : ["Veg","North_Indian"],
				"image" : "aaloo_matter_1.jpg"
			},

			"Veg_kofta" : {
				"price" : [100],
				"category" : ["Veg","North_Indian"],
				"image" : "malai_kofta_1.jpg"
			},

			"Malai_Kofta" : {
				"price" : [120],
				"category" : ["Veg","North_Indian"],
				"image" : "malai_kofta_1.jpg"
			},

			"Mushroom_Rogan_Jash" : {
				"price" : [130],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			},

			"Mushroom_Adraki" : {
				"price" : [150],
				"category" : ["Veg","North_Indian"],
				"image" : "mushroom_1.jpg"
			}

		},

		"South_Indian" : {


			"Idli_Sambhar" : {
				"price" : [50],
				"category" : ["Veg","South_Indian"],
				"image" : "dosa_3.jpg"
			},

			"Paper_Dosa" : {
				"price" : [50],
				"category" : ["Veg","South_Indian"],
				"image" : "dosa_3.jpg"
			},

			"Masala_Dosa" : {
				"price" : [70],
				"category" : ["Veg","South_Indian"],
				"image" : "masala_dosa_2.jpg"
			},

			"Paneer_Dosa" : {
				"price" : [70],
				"category" : ["Veg","South_Indian"],
				"image" : "paneer_dosa_1.jpg"
			},

			"Onion_Uttapam" : {
				"price" : [50],
				"category" : ["Veg","South_Indian"],
				"image" : "onion_Uttapam_6.jpg"
			},

			"Tomato_Uttapam" : {
				"price" : [50],
				"category" : ["Veg","South_Indian"],
				"image" : "Uttapam_2.jpg"
			},

			"Masala_Uttapam" : {
				"price" : [50],
				"category" : ["Veg","South_Indian"],
				"image" : "Uttapam_3.jpg"
			},

			"Chicken_Masala_Dosa" : {
				"price" : [100],
				"category" : ["Non-Veg","South_Indian"],
				"image" : "chicken_masala_dosa_1.jpg"
			},

			"Chicken_Tikka_Dosa" : {
				"price" : [100],
				"category" : ["Non-Veg","South_Indian"],
				"image" : "chicken_masala_dosa_1.jpg"
			},

			"Paneer_Tikka_Dosa" : {
				"price" : [900],
				"category" : ["Veg","South_Indian"],
				"image" : "paneer_dosa_1.jpg"
			}


		},


		"Chinese" : {


			"Honey_Chilli_Potato" : {
				"price" : [90],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Veg_Spring_Rolls" : {
				"price" : [80],
				"category" : ["Veg","Chinese"],
				"image" : "spring_roll_3.jpg"
			},

			"Non_Veg_Spring_Roll" : {
				"price" : [100],
				"category" : ["Non-Veg","Chinese"],
				"image" : "spring_roll_1.jpg"
			},

			"Veg_Momos" : {
				"price" : [60],
				"category" : ["Veg","Chinese"],
				"image" : "momos_1.jpg"
			},

			"Non_Veg_Momos" : {
				"price" : [80],
				"category" : ["Non-Veg","Chinese"],
				"image" : "momos_2.jpg"
			},

			"Crispy_Babycorn" : {
				"price" : [90],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Mushroom_Salt_n_Peper" : {
				"price" : [110],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Veg_Lolly_Pop" : {
				"price" : [120],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Paneer_Chilly_Manchurian" : {
				"price" : [120],
				"category" : ["Veg","Chinese"],
				"image" : "man_3.jpg"
			},

			"Veg_Manchurian" : {
				"price" : [90],
				"category" : ["Veg","Chinese"],
				"image" : "man_1.jpg"
			},

			"Mushroom_Chilly_Manchurian" : {
				"price" : [130],
				"category" : ["Veg","Chinese"],
				"image" : "man_2.jpg"
			},

			"Chicken_Chilly_Manchurian" : {
				"price" : [150],
				"category" : ["Veg","Chinese"],
				"image" : "man_3.jpg"
			},

			"Hot_Garlic_Chicken" : {
				"price" : [150],
				"category" : ["Veg","Chinese"],
				"image" : "garlic_chicken_1.jpg"
			},

			"Szchewan_Chicken" : {
				"price" : [150],
				"category" : ["Veg","Chinese"],
				"image" : "garlic_chicken_1.jpg"
			},

			"Veg_Chowmin" : {
				"price" : [90],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Non_Veg_Chowmin" : {
				"price" : [90],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Veg_Chilly_Garlic_Noodles" : {
				"price" : [90],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Non_Veg_Chilly_Garlic_Noodles" : {
				"price" : [100],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Veg_Schezwam_Noodles" : {
				"price" : [100],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Non_Veg_Schezwan_Noodles" : {
				"price" : [110],
				"category" : ["Non-Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Cottage_Cheese_Noodles" : {
				"price" : [110],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Veg_Choppsy" : {
				"price" : [130],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Non_Veg_Choppsy" : {
				"price" : [150],
				"category" : ["Veg","Chinese"],
				"image" : "veg_noodles_1.jpg"
			},

			"Fish_Hot_Garlic_Souce" : {
				"price" : [90],
				"category" : ["Veg","Chinese"],
				"image" : "fish_fried_1.jpg"
			}
		},

		"Pasta" : {


			"Veg_Plane_Pasta_In_Panne_Toasted" : {
				"price" : [90],
				"category" : ["Veg","Pasta"],
				"image" : "pasta_w_1.jpg"
			},

			"Non_Veg_plane_Pasta_In_Panne_Toasted" : {
				"price" : [180],
				"category" : ["Non-Veg","Pasta"],
				"image" : "pasta_r_1.jpg"
			},

			"Veg_Penne_In_Basamel" : {
				"price" : [120],
				"category" : ["Veg","Pasta"],
				"image" : "pasta_w_2.jpg"
			},

			"Non_Veg_Penne_In_Basamel" : {
				"price" : [150],
				"category" : ["Non-Veg","Pasta"],
				"image" : "pasta_r_2.jpg"
			},

			"Veg_Penne_In_Arrabiata" : {
				"price" : [130],
				"category" : ["Veg","Pasta"],
				"image" : "pasta_w_1.jpg"
			},

			"Non_Veg_Penne_In_Arrabiata" : {
				"price" : [150],
				"category" : ["Non-Veg","Pasta"],
				"image" : "pasta_r_1.jpg"
			},

			"Veg_penne_In_Carbonia" : {
				"price" : [150],
				"category" : ["Non-Veg","Pasta"],
				"image" : "pasta_w_2.jpg"
			},

			"Non-Veg_penne_In_Carbonia" : {
				"price" : [150],
				"category" : ["Non-Veg","Pasta"],
				"image" : "pasta_r_2.jpg"
			}
		},

		"Soup" : {


			"Creeam_Of_Tomato_Soup" : {
				"price" : [60],
				"category" : ["Veg","Soup","Chinese"],
				"image" : "soup_2.jpg"
			},

			"Veg_Sweet_Corn_Soup" : {
				"price" : [65],
				"category" : ["Veg","Soup","Chinese"],
				"image" : "soup_2.jpg"
			},

			"Non_Veg_Sweet_Corn_Soup" : {
				"price" : [70],
				"category" : ["Non-Veg","Soup","Chinese"],
				"image" : "soup_2.jpg"
			},

			"Veg_Hot_n_Sour_Soup" : {
				"price" : [65],
				"category" : ["Veg","Soup","Chinese"],
				"image" : "soup_2.jpg"
			},

			"Non_Veg_Hot_n_Sour_Soup" : {
				"price" : [70],
				"category" : ["Non-Veg","Soup","Chinese"],
				"image" : "soup_2.jpg"
			},

			"Veg_Minesstrone_Soup" : {
				"price" : [65],
				"category" : ["Veg","Soup","Chinese"],
				"image" : "soup_2.jpg"
			},

			"Non_Veg_Minesstrone_Soup" : {
				"price" : [70],
				"category" : ["Veg","Soup","Chinese"],
				"image" : "soup_2.jpg"
			},

			"Veg_Clear_Noodle_Soup" : {
				"price" : [65],
				"category" : ["Veg","Soup","Chinese"],
				"image" : "soup_2.jpg"
			},

			"Non_Veg_Clear_Noodle_Soup" : {
				"price" : [70],
				"category" : ["Veg","Soup","Chinese"],
				"image" : "soup_2.jpg"
			},

			"Veg_Lemon_Cariander" : {
				"price" : [70],
				"category" : ["Veg","Soup","Chinese"],
				"image" : "soup_2.jpg"
			},
			"Non_Veg_Lemon_Cariander" : {
				"price" : [60],
				"category" : ["Veg","Soup","Chinese"],
				"image" : "soup_2.jpg"
			},

			"Veg_Manchow_Soup" : {
				"price" : [65],
				"category" : ["Veg","Soup","Chinese"],
				"image" : "soup_2.jpg"
			},

			"Non_Veg_Manchow_Soup" : {
				"price" : [70],
				"category" : ["Veg","Soup","Chinese"],
				"image" : "soup_2.jpg"
			}

		},

		"Roast" : {


			"Fried_Chicken" : {
				"price" : [130,250],
				"category" : ["Non-Veg","Chicken","Fries","North_Indian"],
				"image" : "chicken_fried_1.jpg"
			},

			"Roasted_Murg" : {
				"price" : [130,250],
				"category" : ["Non-Veg","Chicken","Fries","North_Indian"],
				"image" : "chicken_fried_1.jpg"
			},

			"Murg_Tikka" : {
				"price" : [150,240],
				"category" : ["Non-Veg","Chicken","Fries","North_Indian"],
				"image" : "chicken_fried_1.jpg"
			},

			"Murg_Malai_Tikka" : {
				"price" : [150,240],
				"category" : ["Non-Veg","Chicken","Fries","North_Indian"],
				"image" : "chicken_fried_1.jpg"
			},

			"Murg_Afghani" : {
				"price" : [160,250],
				"category" : ["Non-Veg","Chicken","Fries","North_Indian"],
				"image" : "chicken_fried_1.jpg"
			},

			"Murg_Kali_Mirch_Tikka" : {
				"price" : [160,250],
				"category" : ["Non-Veg","Chicken","Fries","North_Indian"],
				"image" : "chicken_fried_1.jpg"
			},

			"Murg_Hara_Bhara_Kabab" : {
				"price" : [160,250],
				"category" : ["Non-Veg","Chicken","Fries","North_Indian"],
				"image" : "chicken_fried_1.jpg"
			},

			"Paneer_Tikka" : {
				"price" : [100,160],
				"category" : ["Veg","Chicken","Fries","North_Indian"],
				"image" : "paneer_tikka_1.jpg"
			},

			"Paneer_Tikka_Hariyali" : {
				"price" : [120],
				"category" : ["Veg","Chicken","Fries","North_Indian"],
				"image" : "paneer_tikka_2.jpg"
			},

			"Fish_Tikka_6pc" : {
				"price" : [140],
				"category" : ["Non-Veg","Fish","Fries","North_Indian"],
				"image" : "chicken_fried_1.jpg"
			},

			"Fish_Ajwaini_Tikka_6pc" : {
				"price" : [140],
				"category" : ["Non-Veg","Fish","Fries","North_Indian"],
				"image" : "chicken_fried_1.jpg"
			}
		},

		"Rice" : {


			"Steamed_Rice" : {
				"price" : [50],
				"category" : ["Veg","Fries","Rice","North_Indian"],
				"image" : "rice_1.jpg"
			},

			"Jeera_Rice" : {
				"price" : [70],
				"category" : ["Veg","Fries","Rice","North_Indian"],
				"image" : "rice_1.jpg"
			},

			"Veg_Pulao" : {
				"price" : [90],
				"category" : ["Veg","Fries","Rice","North_Indian"],
				"image" : "rice_pulav_1.jpg"
			},

			"Veg_Fried_Rice" : {
				"price" : [90],
				"category" : ["Veg","Fries","Rice","North_Indian"],
				"image" : "rice_1.jpg"
			},

			"Non_Veg_Fried_Rice" : {
				"price" : [120],
				"category" : ["Non-Veg","Fries","Rice","North_Indian"],
				"image" : "rice_1.jpg"
			},

			"Mater_Pulao" : {
				"price" : [90],
				"category" : ["Veg","Fries","Rice","North_Indian"],
				"image" : "rice_1.jpg"
			},

			"Paneer_Fried_Rice" : {
				"price" : [100],
				"category" : ["Veg","Fries","Rice","North_Indian"],
				"image" : "rice_1.jpg"
			},

			"Egg_Fried_Rice" : {
				"price" : [100],
				"category" : ["Veg","Fries","Rice","North_Indian"],
				"image" : "rice_1.jpg"
			},

			"Chicken_Fried_Rice" : {
				"price" : [120],
				"category" : ["Non-Veg","Fries","Rice","North_Indian"],
				"image" : "chicken_biryani_4.jpg"
			},

			"Veg_Szchewan_Fried_Rice" : {
				"price" : [100],
				"category" : ["Veg","Fries","Rice","North_Indian"],
				"image" : "rice_1.jpg"
			},

			"Non_Veg_Szchewan_Fried_Rice" : {
				"price" : [120],
				"category" : ["Veg","Fries","Rice","North_Indian"],
				"image" : "rice_1.jpg"
			},

			"Veg_Biryani" : {
				"price" : [50],
				"category" : ["Veg","Fries","Rice","North_Indian"],
				"image" : "biryani_1.jpg"
			},

			"Non_Veg_Biryani" : {
				"price" : [180],
				"category" : ["Veg","Fries","Rice","North_Indian"],
				"image" : "chicken_biryani_3.jpg"
			}
		},

		"Indian_Bread" : {


			"Roti_Tawa" : {
				"price" : [5],
				"category" : ["Indian_Bread"],
				"image" : "roti_1.jpg"
			},

			"Butter_Roti" : {
				"price" : [10],
				"category" : ["Indian_Bread"],
				"image" : "roti_1.jpg"
			},

			"Tandoori" : {
				"price" : [10],
				"category" : ["Indian_Bread"],
				"image" : "tandoori_roti_2.jpg"
			},

			"Butter_Tandoori" : {
				"price" : [15],
				"category" : ["Indian_Bread"],
				"image" : "tandoori_roti_2.jpg"
			},

			"Naan" : {
				"price" : [20],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg"
			},

			"Butter_Naan" : {
				"price" : [30],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg"
			},

			"Kulcha_Potato" : {
				"price" : [25],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg"
			},

			"Paneer_Kulcha" : {
				"price" : [45],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg"
			},

			"Missi_Roti" : {
				"price" : [25],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg"
			},

			"Butter_Missi_Roti" : {
				"price" : [30],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg"
			},

			"Laccha_Paratha" : {
				"price" : [30],
				"category" : ["Indian_Bread"],
				"image" : "laccha_paratha_1.jpg"
			},

			"Mint_Paratha" : {
				"price" : [35],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg"
			},

			"Potato_Paratha_2pc" : {
				"price" : [40],
				"category" : ["Indian_Bread"],
				"image" : "aalu_paratha_1.jpg"
			},

			"Paneer_Paratha_2pc" : {
				"price" : [45],
				"category" : ["Indian_Bread"],
				"image" : "paneer_paratha_1.jpg"
			},

			"Garlic_Naan" : {
				"price" : [40],
				"category" : ["Indian_Bread"],
				"image" : "garlic_naan_1.jpg"
			},

			"Rumali_Roti" : {
				"price" : [12],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg"
			},

			"Rumali_Paratha" : {
				"price" : [15],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg"
			}

		},

		"FOH_Special_Deals" : {


			"Aaloo_Paratha_2pc" : {
				"price" : [40],
				"category" : ["Indian_Bread","Special"],
				"image" : "aalu_paratha_1.jpg"
			},

			"Paneer_Paratha_2pc" : {
				"price" : [45],
				"category" : ["Indian_Bread","Special"],
				"image" : "paneer_paratha_1.jpg"
			},

			"Paneer_Curry_with_2_Baby_Paratha" : {
				"price" : [65],
				"category" : ["Special"],
				"image" : "butter_naan_5.jpg"
			},

			"Egg_Curry_Rice/2_Baby_Paratha" : {
				"price" : [80],
				"category" : ["Special"],
				"image" : "egg_curry_rice_roti.jpg"
			},

			"Butter_Chicken_2pc_n_2_Baby_Paratha" : {
				"price" : [135],
				"category" : ["Special"],
				"image" : "butter_chicken_meal_1.jpg"
			},

			"Veg_Dum_Biryani_n_Rayta" : {
				"price" : [110],
				"category" : ["Indian_Bread","Special"],
				"image" : "dum_biryani_1.jpg"
			}
		}

	}
}

console.log(foh);

MongoClient.connect(mongourl,function(err,db){
	if(err)
	throw err;
	var dbo = db.db("khanabot");
	dbo.collection('restaurants').update({"number":foh.number},{$set:{"image":foh.image}},function(err,mres){
	  if(err)
	  throw err;
	  console.log("Wrote Your fucking object");
	});
});
