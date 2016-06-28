var http = require('http');

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello NodeJs;');
}).listen(8888, '0.0.0.0');