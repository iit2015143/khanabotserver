var gcm = require('node-gcm');
/*
// Set up the sender with your GCM/FCM API key (declare this once for multiple messages)
var sender = new gcm.Sender('AIzaSyCvXEDrsI3wHWWft-IcrTzd1bWcAkOJKx4');

// Prepare a message to be sent
var message = new gcm.Message({
	data: {message:'test notification'}
});
message.delay_while_idle = 1;

// Specify which registration IDs to deliver the message to
var regTokens = ['ce7xAa6tFVI:APA91bHjjOphTe8elhfDxmLFDn8bQbzsyTH608K02Vy7CHoZrTogVa-x7x1t6sk_jp2aTOOAnjWrfTtcOPmswzzVBzei2XaG-LCawW9IQA3g8xevIH56ETY9S42GJJKg2pOGk96RPUZj'];

// Actually send the message
sender.send(message, { registrationTokens: regTokens }, function (err, response) {
    if (err) console.error(err);
    else console.log(response);
});
*/
var sender = new gcm.Sender('AIzaSyCvXEDrsI3wHWWft-IcrTzd1bWcAkOJKx4');
var message = new gcm.Message( {
    collapseKey: 'demo',
    priority: 'high',
    contentAvailable: true,
    delayWhileIdle: true,
    timeToLive: 3,
    data: {
        key1: 'message1',
        key2: 'message2'
    },
    notification: {
        title: "Hello, World",
        icon: "homeicon",
        sound:"margun",
        body: "This is a notification that will be displayed if your app is in the background."
    }
});

message.delay_while_idle = 1;
var registrationIds = [];
registrationIds.push('e7zR8yuBfyY:APA91bFic5p52tCahOUez4v0WyFoO8ORxgDo1k21FLJnlrzPIWJh-0jnJn70m3y1N5wFx0g1aDPZYzsmD-6tk_LaKjUd6ENuhZ-NwIVLjkpPGHj_w5tZ0T5r0GXs_idzwtdrQUt_VXiLlvpnvBI2aLjk0VZVo3W_DQ');
sender.send(message, registrationIds, 4, function (err, result) {
console.log(result);
});
