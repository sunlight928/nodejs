var http =require('http');
var querystring =require('querystring');

var postData = querystring.stringify({
    content:'加油加油加油',
    cross_post:1,
    belongId:2862414
});


var options ={
    hostname: 'v.yinyuetai.com',
    port:80,
    path:'/video/2862414',
    method:'POST',
    headers:{
        'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Encoding':'gzip, deflate',
        'Accept-Language':'zh-CN,zh;q=0.8',
        'Cache-Control':'max-age=0',
        'Connection':'keep-alive',
        'Content-Length':postData.length,
        'Content-Type':'application/x-www-form-urlencoded',
        'Cookie':'UM_distinctid=15c1a6f2ef2130-0eca628d400131-396b4e08-e1000-15c1a6f2ef4497; yinyuetai_uid=aVvCO6T48aaKwR3lgBaaf8OA; tid=aPeAiqZVcaa1wkuExNexfPVQ; yyt_pref=2; u_inf=11115947%02songlove%021550940515%40qq.com%02normal_user%02http%3A%2F%2Fimg0.yytcdn.com%2Fuser%2Favatar%2F130921%2F11115947%2FE6C4014140BB8E0AC5763BECC1D0830D_100x100.jpeg%020%02; token=f0165877d7c959d3nOfbD1tLDK.169c0.0; token3=399df800e2e40725tLDK.nOfbD1.rKgbD1.ag.169c0.01.WgDm1; pushState=true; JSESSIONID=aaaNwAFmdfnHVfzZ3CAWv; p2=90ca2d1244345c2c01f02a9df79792e4',
        'Host':'comment.yinyuetai.com',
        'Origin':'http://v.yinyuetai.com',
        'Referer':'http://v.yinyuetai.com/video/2862414',
        'Upgrade-Insecure-Requests':1,
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36'
    }
}



var req =http.request(options,function(res){
    console.log('status: '+res.statusCode);
    console.log('headers: '+JSON.stringify(res.headers));
    res.setEncoding('utf8'); 
    
    res.on('data', function (chunk) { 
    console.log('BODY: ' + chunk); 
    }); 
//    res.on('data',function(chunk){
//        console.log("出来了吗");
//        console.log(Buffer.isBuffer(chunk));
//        console.log(typeof chunk);
//        console.log('data: '+chunk);
//        
//    });
    res.on('end',function(e){
        console.log('评论完毕！');
    })
});

req.on('error',function(e){
    console.log('Error: '+e.message);
});

req.write(postData);//将数据写在请求题中
req.end();
