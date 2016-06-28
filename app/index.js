/**
 * Created by uncle on 16/5/20.
 */
var server = require('./server');
var router = require('./router');
var requestHandlers = require("./requestHandlers");

var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route, handle);


var myInterval = setInterval(function () {
	if (fname !== undefined) {
		function fname() {
			var yourcode;
		}

		clearInterval(myInterval);
	}
}, 100);