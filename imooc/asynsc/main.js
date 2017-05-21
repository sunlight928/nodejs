var fs =require("fs");
var data =fs.readFileSync('input.txt','utf-8');
console.log(data.toString());
console.log("程序执行结束！");

//
//var fs = require('fs');
// 
//var contentText = fs.readFileSync('input.txt','utf-8');
// 
//console.log(contentText);
//var fs = require('fs');
//
//fs.readFile('input.txt', 'utf-8', function(err, data) {
//    if(err) {
//        console.error(err);
//    } else {
//	    console.log("readFile");
//    }
//});
//console.log('end. of readFile');
//
//var data2 = fs.readFileSync('input.txt', 'utf-8');
//console.log("readFileSync");
//console.log('end. of readFileSync');

//var fs = require("fs");
//
//fs.readFile('input.txt', function (err, data) {
//    if (err) return console.error(err);
//    console.log(data.toString());
//});
//
//console.log("程序执行结束!");