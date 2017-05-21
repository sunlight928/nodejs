var http = require('http');
var fs = require('fs');
var request = require('request');

http
    .createServer(function(req,res){
    fs.readFile('logo.png',function(err,data){
        if(err){
            res.end('file is not exist');
        }else{
            res.writeHeader('200',{'Context-Type':'text/html'});
            res.enf(data);
        }
    })
    fs.createReadStream('logo.png').pipe(res);
    
    request('http://static.mukewang.com/static/img/common/logo.png?t=2.3').pipe(res);
})
    .listen(8090)