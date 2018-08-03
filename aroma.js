var MongoClient = require('mongodb').MongoClient;
var mongourl = "mongodb://localhost:27017/";


var aroma = {
	//"_id" : ObjectId("02"),
	"Location" : {
		"lat" : 25.430529,
		"long" : 81.766967
	},

	"availability" : {
		"uptime" : 11,
		"downtime" : 9
	},

	"number" :8726959595 ,
	"image":"aroma.jpg",
	"feature" : "Value For Money",
	"name" : "Aroma",
  "rating":3.5,
  "HotDeals":[
	{
		name:"Chicken_Biryani",
		price:[110],
		description:"Specifically for IIITA. Take it soon. Tandoor Paratha After 6 PM To 11 PM",
		image: "chicken_biryani_2.jpg"
	},

	{
		name:"Chicken_Saami_Kabab_4pc",
		price:[100],
		description:"Specifically for IIITA. Take it soon.Tandoor Paratha After 6 PM To 11 PM",
		image : "chicken_saami_kabab_1.jpg"
	}


  ],

  "TopRated":[

  {Category:"Rice",SubCategory:"Chicken_Tikka_Rice_(Boneless)",Ind:1},
  {Category:"Chinese",SubCategory:"Chicken_Lollipop_4pc",Ind:0}

 ],

	"menu" : {


		"Rice" : {


			"Chicken_Biryani_2/3pc" : {
				"price" : [70,110],
				"category" : ["Non-Veg","Fried","Rice","North_Indian"],
				"image" : "biryani_1.jpg"
			},

			"Chicken_Tikka_Rice_(Boneless)" : {
				"price" : [80,140],
				"category" : ["Non-Veg","Fried","Rice","North_Indian"],
				"image" : "chicken_tikka_biryani_1.jpg"
			},

			"Chicken_Lollipop_Piece_Rice" : {
				"price" : [140],
				"category" : ["Non-Veg","Fried","Rice","North_Indian"],
				"image" : "biryani_1.jpg"
			},

			"Chicken_Leg_Piece_Rice" : {
				"price" : [140],
				"category" : ["Non-Veg","Fried","Rice","North_Indian"],
				"image" : "biryani_1.jpg"
			},

			"Egg_Rice" : {
				"price" : [70],
				"category" : ["Non-Veg","Fried","Rice","North_Indian"],
				"image" : "biryani_1.jpg"
			}
		},

		"Gravy_(Shorba)" : {


			"Mutton_Aroma_2/4pc" : {
				"price" : [140,280],
				"category" : ["Non-Veg","North_Indian"],
				"image" : "butter_chicken_5.jpg"
			},

			"Chicken_Kali_Mirch_2/4pc" : {
				"price" : [120,220],
				"category" : ["Non-Veg","North_Indian"],
				"image" : "butter_chicken_5.jpg"
			},

			"Chicken_Masala_2/4pc" : {
				"price" : [100,180],
				"category" : ["Non-Veg","North_Indian"],
				"image" : "butter_chicken_5.jpg"
			},

			"Butter_Chicken_2/4pc" : {
				"price" : [100,180],
				"category" : ["Non-Veg","North_Indian"],
				"image" : "butter_chicken_5.jpg"
			},

			"Kadhai_Chicken_2/4pc" : {
				"price" : [100,180],
				"category" : ["Non-Veg","North_Indian"],
				"image" : "butter_chicken_5.jpg"
			},

			"Egg_Curry" : {
				"price" : [100],
				"category" : ["Non-Veg","North_Indian"],
				"image" : "butter_chicken_5.jpg"
			},

			"Paneer_Kali_Mirch" : {
				"price" : [120],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_makhani_1.jpg"
			},

			"Paneer_Butter_Masala" : {
				"price" : [100],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_makhani_1.jpg"
			},

			"Kadhai_Paneer" : {
				"price" : [100],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_makhani_1.jpg"
			}

		},

		"Roasted_(Tandoori)" : {


			"Chicken_Barra_4/8pc" : {
				"price" : [180,350],
				"category" : ["Non-Veg","North_Indian"],
				"image" : "butter_chicken_5.jpg"
			},

			"Chicken_Malai_Tikka_4/8pc" : {
				"price" : [120,240],
				"category" : ["Non-Veg","North_Indian"],
				"image" : "butter_chicken_5.jpg"
			},

			"Tandoori_Chicken_4/8pc" : {
				"price" : [150,300],
				"category" : ["Non-Veg","North_Indian"],
				"image" : "butter_chicken_5.jpg"
			},

			"Tandoori_Fish_4/8pc" : {
				"price" : [100,180],
				"category" : ["Non-Veg","North_Indian"],
				"image" : "fish_fried_1.jpg"
			},

			"Paneer_Tikka_4/8pc" : {
				"price" : [80,140],
				"category" : ["Veg","North_Indian"],
				"image" : "paneer_tikka_1.jpg"
			}
		},

		"Fry" : {


			"Chicken_Fry_4/8pc" : {
				"price" : [150,300],
				"category" : ["Non-Veg","North_Indian","Fried"],
				"image" : "chicken_fried_1.jpg"
			},

			"Fish_Fry_4/8pc" : {
				"price" : [100,180],
				"category" : ["Non-Veg","North_Indian","Fried"],
				"image" : "fish_fried_1.jpg"
			},

			"Chicken_Tikka_4/8pc" : {
				"price" : [160],
				"category" : ["Non-Veg","North_Indian","Fried"],
				"image" : "chicken_fried_1.jpg"
			},

			"Chicken_Saami_Kabab_4pc" : {
				"price" : [100],
				"category" : ["Non-Veg","North_Indian","Fried"],
				"image" : "chicken_fried_1.jpg"
			}
		},

		"Chinese" : {


			"Chicken_Lollipop_4pc" : {
				"price" : [140],
				"category" : ["Non-Veg","Chinese"],
				"image" : "chicken_lollipop_1.jpg"
			},

			"Chicken_Chilli" : {
				"price" : [160],
				"category" : ["Non-Veg","Chinese"],
				"image" : "chicken_fried_1.jpg"
			},

			"Chilli_Paneer" : {
				"price" : [120],
				"category" : ["Veg","Chinese"],
				"image" : ".jpg"
			}

		},

		"Bread_(Roti)" : {


			"Tandoori_Roti_Plain" : {
				"price" : [10],
				"category" : ["Indian_Bread"],
				"image" : "tandoori_roti_2.jpg"
			},

			"Butter_Tandoori" : {
				"price" : [15],
				"category" : ["Indian_Bread"],
				"image" : "tandoori_roti_2.jpg"
			},

			"Roomali_Roti" : {
				"price" : [12],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg"
			},

			"Lachcha_Paratha" : {
				"price" : [20],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg"
			},

			"Butter_Naan" : {
				"price" : [25],
				"category" : ["Indian_Bread"],
				"image" : "butter_naan_5.jpg"
			},
		}

	}
}



console.log(aroma);

MongoClient.connect(mongourl,function(err,db){
    if(err)
    throw err;
    var dbo = db.db("khanabot");
                dbo.collection('restaurants').update({"number":aroma.number},{$set:{"rating":aroma.rating,"name":aroma.name,
								"menu":aroma.menu,"image":aroma.image,availability:aroma.availability,
								Offers:[],HotDeals:aroma.HotDeals,TopRated:aroma.TopRated}},function(err,mres){
      if(err)
      throw err;
      console.log("Wrote Your fucking object");
    });
		db.close();
});
