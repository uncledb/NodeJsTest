/**
 * Created by uncle on 16/6/28.
 */

process.stdin.setEncoding('utf8');

process.stdin.on('readable', function () {
	var chunk = process.stdin.read();
	if (chunk !== null) {
		process.stdout.write('data: ' + chunk);
	}
});

process.stdin.on('end', function () {
	process.stdout.write('end');
});