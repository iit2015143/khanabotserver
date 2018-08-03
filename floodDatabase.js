
var MongoClient = require('mongodb').MongoClient;
var mongourl = "mongodb://localhost:27017/";

menus = {
  Chinese : {
    Category:["Chinese"],
    Veg_Chawmein:[70,110],
    Veg_Manchurian_Noodles:[70,130],
    Veg_Manchurian_Rice:[80,150],
    Veg_Fried_Rice:[60,130],
    Veg_Manchurian:[70,120],
    Veg_Pasta:[65,120],
    Veg_Manchurian_Pasta:[90,150],
    Hakka_Noodles:[70,130],
    Chilli_Potato:[50,90],
    Chilli_Paneer:[90,160],
    Chicken_Chowmein:[90,170],
    Chicken_Manchurian_Noodles:[100,180],
    Chicken_Fried_rice:[90,170],
    Chicken_Manchurian_Rice:[110,210],
    Chicken_Pasta:[90,160],
    Chicken_Manchurian_Pasta:[110,200],
    Chicken_Manchurian:[90,170],
    Chilly_Chicken:[130,250],
    Egg_Chowmein:[70,130],
    Egg_Fried_Rice:[75,140],
    Egg_Pasta:[80,130],
    Chicken_Egg_Chowmein:[110,200],
    Chicken_Egg_Fried_Rice:[110,210]
  },
  Rolls :{
    Category:["Chinese","Rolls"],
    Chicken_Egg_Roll:[90],
    Chicken_Roll:[80],
    Kabab_Roll:[65],
    Egg_Roll:[60],
    Potato_Roll:[50],
    Veg_Burger:[50],
    Chicken_Burger:[70]
  },
  Drinks :{
    Category:["Drinks"],
    Cold_Drinks:[25],
    Lassi:[35]
  },
  Desserts:{
    Category:["Desserts"],
    Gulab_Jamun:[12]
  },
  Mocktail:{
    Category:["Beverages"],
    Mango:[30],
    Lemon:[30],
    Orange:[30],
    Litchi:[30],
    Fruit_Beer:[30],
    Masala_Soda:[30],
    Cola:[30]
  },
  Gravy:{
    Category:["North Indian"],
    Shahi_Paneer:[120,220],
    Paneer_Butter_Masala:[140,260],
    Khowa_Paneer:[150,280],
    Kaju_Paneer:[150,290],
    Matar_Paneer:[120,230],
    Kadhai_Paneer:[140,270]
  },
  Non_Vegetarian:{
    Category:["Chicken","North Indian"],
    Chicken_Curry:[90,170],
    Chicken_Masala:[90,170],
    Kadhai_Chicken:[90,170],
    Handi_Chicken:[180,340],
    Chicken_Korma:[90,170],
    Butter_Chicken:[90,170],
    Chicken_Kali_Mirch:[190,360],
    Chicken_Mughlai:[210,390],
    Shahi_Chicken:[90,170],
    Bhuna_Chicken:[90,180],
    Chicken_Hariyali:[90,180],
    Chicken_Punjabi:[90,210],
    Chicken_Do_Pyaja:[90,210],
    Chicken_Biryani:[50,80],
    Chicken_Fry:[90,160],
    Roasted_Chicken:[150,280],
    Chicken_Lollypop:100
  },
  Egg:{
    Category:["North Indian"],
    Egg_Curry:[70],
    Egg_Bhujia:[50],
    Omelete:[45]
  },
  Mutton:{
    Category:["North Indian","Mutton"],
    Mutton_Curry:[140,270],
    Kadhai_Mutton:[150,290],
    Mutton_Rogan_Josh:[160,310],
    Masala_Mutton:[150,280],
    Butter_Mutton:[160,310],
    Mutton_Do_Pyaza:[180,330],
    Mattar_Mutton:[150,280]
  },
  Roti:{
    Category:["North Indian"],
    Paratha:[10],
    Butter_Roti:[15]
  },
  Rice:{
    Category:["North Indian"],
    Plain_Rice:[50,90],
    Jeera_Rice:[60,110]
  }
};

resnames =["Red Chilli","Cornflex","Roti","Punjabi","Makkhan","Shehanshah",
"Apna","Redmi","Goldy","Pichkoo","Rishika","Sadhavi",
"Pyaz Mahal","Tandoor Darbar","Lora Mehal","Pkora Mehel"];

hotdeals = [{name:"Chicken Paratha",price:[150],description:"Specifically for IIITA. Take it soon"},
{name:"Chicken Paratha",price:[150],description:"Specifically for IIITA. Take it soon"},
{name:"Paneer Kabab",price:[120],description:"Specifically for IIITA. Take it soon"},
{name:"Paneer Biryani",price:[148],description:"Specifically for IIITA. Take it soon"},
{name:"Shahi Paneer",price:[125],description:"Specifically for IIITA. Take it soon"},
{name:"Chicken Handi",price:[170],description:"Specifically for IIITA. Take it soon"},
{name:"Mutton Kabab",price:[250],description:"Specifically for IIITA. Take it soon"}]

toprated=[{Category:"Mutton",SubCategory:"Mutton_Curry",Ind:0},
{Category:"Egg",SubCategory:"Egg_Bhujia",Ind:0},
{Category:"Gravy",SubCategory:"Shahi_Paneer",Ind:0},
{Category:"Gravy",SubCategory:"Kaju_Paneer",Ind:0},
{Category:"Chicken",SubCategory:"Chicken_Lollypop",Ind:0}];

features= ["Pocket_friendly","Value_for_money","Premium","Luxury"];

console.log(menus);

MongoClient.connect(mongourl,function(err,db){
    if(err)
    throw err;
    var dbo = db.db("khanabot");
    var count = 111111111;
    var array = [];
    for(var i = 0; i<20000; i++){
      insertme = {};
      pindex = Math.floor(Math.random()*features.length);
      insertme.Location = {};
      insertme.HotDeals = [];
      insertme.TopRated = [];
      count+=1;
      insertme.number = count + 9000000000;
      insertme.Location.lat = Math.random()*2 + 24;
      insertme.Location.long = Math.random()*2 +81;
      insertme.feature = features[pindex];
      insertme.name = resnames[Math.floor(Math.random()*resnames.length)];
      insertme.rating = Math.floor(Math.random()*3)+3;
      insertme.reviews = [];
      if(Math.floor(Math.random()*2)===0)
      insertme.HotDeals[0]=hotdeals[Math.floor(Math.random()*hotdeals.length)];

      if(Math.floor(Math.random()*2)===0)
      insertme.TopRated[0]=toprated[Math.floor(Math.random()*toprated.length)];
      tempmenus = {};
      TopRated = {};

      for(category in menus){
        if(Math.floor(Math.random()*2)===0)
        continue;
        tempmenus[category] = {};
        var flag = 0;
        for(item in menus[category]){
          //console.log(item);
          if(flag==0){
            tempmenus[category][item]=menus[category][item];
            flag++;
            continue;
          }
          if(Math.floor(Math.random()*2)===0)
          continue;

          tempmenus[category][item]=[];
          for(price in menus[category][item]){
            temp = menus[category][item][price];
            if(pindex == 2)
            temp = temp*(65)/100 + Math.floor(Math.random()*30);
            else if(pindex == 1)
            temp = temp*(45)/100 + Math.floor(Math.random()*10);
            else if(pindex == 0)
            temp = temp*(25)/100 + Math.floor(Math.random()*5);
            tempmenus[category][item][price] = Math.ceil(temp);
          }
        }
      }
      insertme.menu = tempmenus;
      //console.log(insertme);
      array.push(insertme);
      //console.log(pindex);
    }
    dbo.collection('restaurants').insert(array,function(err,mres){
      if(err)
      throw err;
      console.log("Wrote Your fucking array");
    });
    /*dbo.collection("messwalacredentials").find({"Location.lat":{$gt:25,$lt:25.02}}).toArray(function(err,mres){
      console.log(mres);
    });*/
});
