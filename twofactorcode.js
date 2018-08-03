var https = require("https");

https.get("https://2factor.in/API/V1/53a00358-7bf4-11e8-a895-0200cd936042/SMS/7488663497/12346/khanabot",function(res){
  let data = '';
  res.on("data",(chunk)=>{
    data+=chunk;
  });
  res.on("end",()=>{
    console.log(data);
  });
  res.on("error",(error)=>{
    console.log(error);
  });
})
