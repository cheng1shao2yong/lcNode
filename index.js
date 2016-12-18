"use strict";
/*********************************************************************/
/*这里是node.js的标准写法*/
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
        resp.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        M(resp,data);
        resp.end();
    });
}).listen(3000);
console.log('已经启动服务器！');


/*********************************************************************/
/*这里是express中的写法*/

/*
var express = require('express');
var T=require('laocheng');
//初始化模板引擎
T.init(__dirname);
var app = express();
app.listen(3000);
app.get('/index', function (req, resp) {
    //为模版设置参数
    var data=T.getValObj();
    data.put('test',12345);
    data.put('abc.tf.a',50);
    data.put('list',{a:1,b:2,c:3,d:4,e:5,f:6,g:7});
    //调用模版
    T.display('index.html',function(M){
        M(resp,data);
        resp.end();
    });
});
console.log('已经启动服务器！');
*/


/*********************************************************************/
/**这里是koa中的写法**/
/*
 * koa中使用lcNode还需要修改一下源代码，koa/lib/application.js的221行，修改return res.end(body);改为return;
 * 意思是当不设置this.body时，直接返回。
 */

/*
var koa = require('koa');
var T=require('laocheng');
//初始化模板引擎
T.init(__dirname);
var app = koa();
app.use(function *(){
    var resp=this.res;
    //为模版设置参数
    var data=T.getValObj();
    data.put('test',12345);
    data.put('abc.tf.a',50);
    data.put('list',{a:1,b:2,c:3,d:4,e:5,f:6,g:7});
    //调用模版
    T.display('index.html',function(M){
        M(resp,data);
        resp.end()
    });
});
app.listen(3000);
console.log('已经启动服务器！');
*/