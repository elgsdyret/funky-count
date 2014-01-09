
init(require('./conf'));

function init(conf) {	
	var pubsub = require('redis-eventemitter')(conf.redis);
	var log = require('./log')(conf.log);
	
	var countSinceStarted = 0;

	pubsub.on('error', function(err) {
		log.error('error: ', err);
	});

	pubsub.on('PoisonDragon:*', function(chan, msg) {
		countSinceStarted++;
		log.info('poison dragon: ', chan, msg, countSinceStarted);		
	});

	log.info("running maybe...");
}