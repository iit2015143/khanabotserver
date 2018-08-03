var http = require("http");
var https = require("https");

/**
 * getJSON:  REST get request returning JSON object(s)
 * @param options: http options object
 * @param callback: callback to pass the results JSON object(s) back
 */

 var options = {
     host: '2factor.in',
     port: 443,
     path: '/API/V1/edcd66d9-c0c1-11e7-94da-0200cd936042/SMS',
     method: 'GET',
     headers: {
         'Content-Type': 'application/json'
     }
 };

exports.getJSON = function(otp, number, onResult)
{
    console.log("rest::getJSON");
    options.path = options.path +"/"+number+"/"+otp;
    var port = options.port == 443 ? https : http;
    var req = port.request(options, function(res)
    {
        var output = '';
        console.log(options.host + ':' + res.statusCode);
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            output += chunk;
        });

        res.on('end', function() {
            var obj = JSON.parse(output);
            onResult(res.statusCode, obj);
        });
    });

    req.on('error', function(err) {
        //res.send('error: ' + err.message);
    });

    req.end();
};
