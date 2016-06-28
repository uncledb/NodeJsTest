var fs = require('fs');

var src = '/Users/uncle/Desktop/test.txt';
var srcDir = '/Users/uncle/Desktop/';


// fs.readFile(src, 'utf-8', function (error, data) {
// 	if (error) {
// 		throw error;
// 	}
// 	// console.log(data);
// 	// console.log(data.toString());
// });
//
//
// // 写入文件内容（如果文件不存在会创建一个文件）
// // 写入时会先清空文件
// fs.writeFile('/Users/uncle/Desktop/test.txt', 'test test', function (err) {
// 	if (err) {
// 		throw err;
// 	}
//
// 	console.log('Saved.');
//
// 	// 写入成功后读取测试
// 	fs.readFile('/Users/uncle/Desktop/test.txt', 'utf-8', function (err, data) {
// 		if (err) {
// 			throw err;
// 		}
// 		console.log(data);
// 	});
// });


// // 打开文件
// fs.open(src, 'r', function (err, fd) {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log('open file success.');
// 	var buffer = new Buffer(255);
// 	// 读取文件
// 	fs.read(fd, buffer, 0, 10, 0, function (err, bytesRead, buffer) {
// 		if (err) {
// 			throw err;
// 		}
// 		// 打印出buffer中存入的数据
// 		console.log(bytesRead, buffer.slice(0, bytesRead).toString());
//
// 		// 关闭文件
// 		fs.close(fd);
// 	});
// });


// // 打开文件
// fs.open(src, 'a+', function (err, fd) {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log('open file success.');
// 	var buffer = new Buffer('asdfasdfasdf');
// 	// 读取文件
// 	fs.write(fd, buffer, 0, 6, 0, function (err, written, buffer) {
// 		if (err) {
// 			throw err;
// 		}
//
// 		console.log('write success.');
//
// 		// 打印出buffer中存入的数据
// 		var byteLength = buffer.byteLength;
// 		console.log(byteLength, buffer.slice(0, byteLength).toString());
//
// 		// 关闭文件
// 		fs.close(fd);
// 	});
// });


// 创建 newdir 目录
// fs.mkdir(srcDir + 'testMkDir', function(err) {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log('make dir success.');
// });
// // 删除dir
// fs.rmdir(srcDir + 'testMkDir', function(err) {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log('rm dir success.');
// });

//读取dir

fs.readdir(srcDir + '需求', function (err, files) {
	if (err) {
		throw err;
	}
	// files是一个数组
	// 每个元素是此目录下的文件或文件夹的名称
	console.log(files);
});