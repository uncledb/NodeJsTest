/**
 * Created by uncle on 16/6/28.
 */
// sub.js
process.on('message', function(m) {
	console.log('CHILD got message:', m);
});

process.send({ foo: 'bar' });