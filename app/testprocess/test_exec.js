/**
 * Created by uncle on 16/6/28.
 */
var exec = require('child_process').exec,
	child;

child = exec('cat *.js bad_file | wc -l',
	function (error, stdout, stderr) {
		console.log('stdout: ' + stdout);
		console.log('stderr: ' + stderr);
		if (error !== null) {
			console.log('exec error: ' + error);
		}
	});