/**
 * Created by uncle on 16/5/20.
 */
var formidable = require('formidable'),
	http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (req, res) {
	var str = '';
	if (req.url == '/') {
		travelSync('/Users/uncle/DeskTop/需求', function (pathname) {
			str += pathname + '<br>';
			console.log(pathname, path.extname(pathname));
		});
	}
	str = '<html>' +
		'<head>' + '<title>My Node.js Test</title>' +
		'<meta http-equiv="Content-Type" content="text/html; ' +
		'charset=UTF-8" />' +
		'</head>' +
		'<body>' +
		str +
		'</body>' +
		'</html>';
	res.writeHead(200, {'content-type': 'text/html'});
	res.end(str);
}).listen(8888);

function travelSync(dir, callback) {
	fs.readdirSync(dir).forEach(function (file) {
		var pathname = path.join(dir, file);

		if (fs.statSync(pathname).isDirectory()) {
			travelSync(pathname, callback);
		} else {
			callback(pathname);
		}
	});
}
function travelNotSync(dir, callback, finish) {
	fs.readdir(dir, function (err, files) {
		(function next(i) {
			if (i < files.length) {
				var pathname = path.join(dir, files[i]);

				fs.stat(pathname, function (err, stats) {
					if (stats.isDirectory()) {
						travelNotSync(pathname, callback, function () {
							next(i + 1);
						});
					} else {
						callback(pathname, function () {
							next(i + 1);
						});
					}
				});
			} else {
				finish && finish();
			}
		}(2));
	});
}