

module.exports = function(conf) {

	return {
		error: error,
		info: info, 
		debug: debug
	}

	function error() {
		console.error.apply(console, arguments);
	}

	function info() {
		console.log.apply(console, arguments);
	}

	function debug() {
		if (conf.debug) {
			console.log.apply(console, arguments);
		}
	}
};