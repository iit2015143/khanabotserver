var gcm = require('node-gcm');
var sender = gcm.Sender('AAAAWaqS12o:APA91bHgUG_dDx-2WqwGyNhCPIMCp70BRu_ww5mW4qM_5SsdhoSRLCupcigcV-qE8-yfY5eAwt8hSpxtteNs7F3O_-kjzn8MkFDMx9VWZJRAjzR9vYa39Hrq5HekqOoJc7tPKRia9rSC');
var message = new gcm.Message({
	data:{key1:'msg1'}
});

var regTokens = ['ce7xAa6tFVI:APA91bHjjOphTe8elhfDxmLFDn8bQbzsyTH608K02Vy7CHoZrTogVa-x7x1t6sk_jp2aTOOAnjWrfTtcOPmswzzVBzei2XaG-LCawW9IQA3g8xevIH56ETY9S42GJJKg2pOGk96RPUZj'];

sender.send(message,{registrationTokens:regTokens},function(err,response){
	if(err)
		console.error(err);
	else
		console.log(response);
});
