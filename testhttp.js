var rest = require('./sendhttprequest');


rest.getJSON("12568","9807666322", function(statusCode, result) {

    // I could work with the result html/json here.  I could also just return it
    if(statusCode == "200")
    console.log("onResult: (" + statusCode + ")" + JSON.stringify(result));
    else
	console.log(result);
    // res.statusCode = statusCode;
    // res.send(result);
});
