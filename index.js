"use strict";
const http=require('http');
const T=require('laocheng');
//初始化模板引擎
T.init(__dirname);
let i=0;
http.createServer(function(req,resp){
    //清除由ico产生的二次访问
    if(req.url.endsWith('.ico')){
        return;
    }
    i++;
    //为模版设置参数
    let data=T.getValObj();
    data.put('test',12345);
    data.put('abc.tf.a',50);
    data.put('list',{a:1,b:2,c:3,d:4,e:5,f:6,g:7});
    //调用模版
    T.display('index.html',function(M){
        M(resp,data);
        resp.end('');
    });
}).listen(3000);
console.log('已经启动服务器！');
