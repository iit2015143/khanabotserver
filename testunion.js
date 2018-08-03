var one = {
  cola:{
    piku:[20,30],
    chiku:"lkddl",
    liku:"ldjlk"
  },
  shola:{
    hat:"dkljkl",
    bhat:[7878]
  }
};

var two = {
  cola:{
    piku:[18,32],
    chiku:"lkddl",
    liku:"ldjlk"
  },
  bola:{
    fuck:"dlkdk",
    luck:"kldj",
    suck:"kdll"
  },
  shola:{
    hat:"dkljkl",
    bhat:[78788],
    sat:7878
  }
};

function twolevelunion(one,two){
  if(Object.keys(one).length === 0)
    one = two;
  else{
    for(key in two){
      if(one.hasOwnProperty(key)){
        for(keyagain in two[key]){
          if(one[key].hasOwnProperty(keyagain)){
              temparray  = one[key][keyagain];
              tempdasharr = two[key][keyagain];
              for(i = 0; i<tempdasharr.length; i++){
                if(tempdasharr[i]>temparray[i])
                  temparray[i] = tempdasharr[i];
              }
          }
          else {
            one[key][keyagain] = two[key][keyagain];
          }
        }
      }
      else {
        one[key] = two[key];
      }
    }
  }
  return one;
}

module.exports = twolevelunion;
