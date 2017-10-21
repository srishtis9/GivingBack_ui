var request = require('request');
var defered = protractor.promise.defer();
var lupus = require('lupus');

var postloop = function(){
	
	this.loop = function(usercount,piece1,piece2){
		
		lupus(piece1, piece2, function(n){
	
	myJSONObject = {'pledgeTypes':[0] , 'puzzlePiece': n};
	
	//console.log('pledging for piece ' + n);
	
	lupus(0, 9, function(m){
		
		usercount = usercount+1;
		
		//sending the pledge request
		
		request({
    url: 'http://s2-dev-mobile-2:9010/givingback/user'+usercount+'/pledge',
    method: "POST",
    json: true,   // <--Very important!!!
    body: myJSONObject
}, function (error, response, body){
	 
	if(!error && response.statusCode == 200){
		defered.fulfill(body);
		console.log(response.statusCode );
	}
	else{
				defered.reject(body);
				console.log(body.status);
	    }
});
	});
	
	
});
	return defered.promise;	
	};
};

module.exports = new postloop();