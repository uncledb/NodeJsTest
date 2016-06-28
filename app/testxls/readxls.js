/**
 * Created by uncle on 16/6/28.
 */
var xlsx = require("node-xlsx");
var fs = require('fs');


var excelPath = '/Users/uncle/Desktop/11.xlsx';
var resultPath = '/Users/uncle/Desktop/mobile.txt';
var space = '\r\n\r\n';

var sheets = xlsx.parse(excelPath);
var mobileArr = [];
sheets[0].data.forEach(function (row) {
	if (Number(row[5])) {
		mobileArr.push(row[5]);
	}
});

var resultStrArr = [];
for (var i = 0; i < mobileArr.length; i += 30) {
	resultStrArr.push(mobileArr.slice(i, i + 30).join());
}


fs.writeFile(resultPath, resultStrArr.join(space), function (err) {
	if (err) {
		throw err;
	}
	console.log('.........OK.........');
});
console.log('总数:' + mobileArr.length, resultStrArr.join(space));
