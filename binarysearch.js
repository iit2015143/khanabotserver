var cal = require('./calculatedelta')
var radius = 5;
var long = 82.7756;
var lat = 24.4775;
var long1 = 83.7756;
var lat1 = 25.4775;
var flong = 82.7756;
var flat = 24.4775;

var diff = 10;
var fdiff = diff;

while(diff>=0.0001){
  var mid = (lat+lat1)/2;
  console.log(lat + " "+ long + " "+ mid+" "+long);
  var dist = cal(flat,long,mid,long);
  console.log(dist);
  if(dist>radius)
    lat1 = mid;
  else
    lat = mid;
  diff = Math.abs(dist-radius);
  console.log(dist);
}

console.log(cal(flat,long,mid,long));
deltalat = flat-mid;

lat = flat;
diff = fdiff;

console.log(lat + " "+ long + " "+ lat1+" "+long1);
count = 0;

while(diff>=0.0001){
  var mid = (long+long1)/2;
  console.log(mid);
  console.log(lat + " "+ flong + " "+ lat+" "+mid);
  var dist = cal(lat,flong,lat,mid);
  console.log(dist);
  if(dist>radius)
    long1= mid;
  else
    long = mid;
  diff = Math.abs(dist-radius);
  console.log(dist);
}

console.log(cal(lat,flong,lat,mid));
deltalong = flong-mid;
console.log("Chang in Lat = " + Math.abs(deltalat));
console.log("Change in Long = "+ Math.abs(deltalong));

lat = 21.693660746436944;
long = 70.38988284719471;

saveconfig = {};
saveconfig.radius = radius;
saveconfig.dlatitude = Math.abs(deltalat);
saveconfig.dlongitude = Math.abs(deltalong);
saveconfig.diff = 0.0001;

var fs = require('fs');
fs.writeFile('./saveconfig.json',JSON.stringify(saveconfig),function(err){
  if(err)
  throw err;
  console.log("wrote to saveconfig");
})

console.log(cal(lat,long,lat+deltalat,long));
console.log(cal(lat,long,lat,long+deltalong));
