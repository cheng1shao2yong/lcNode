[TOC]
#### 最新版本
1.0.0

#### 1、目录
当前为完整的node.js测试目录，核心模块为node_modules/laocheng/

    index.js
	template/
	compile/
	node_modules/
		laocheng/（核心模块）
			node_modules/（第三方支持模块）
			config.json（核心配置文件）
			laocheng.js（主文件）
			Template.js（模板编译文件）
			Variable.js（辅助变量设置文件）

#### 2、安装

将核心模块复制到你node.js的node_modules/目录下。

#### 3、设置模板引擎配置
```json
{
   "template_file":"template",（放置模板文件的目录）
   "compile_file":"compile",（编译后的模板文件目录）
   "extName":".html",（模板文件扩展名）
   "dynamic":true（是否动态监听模板文件是否变化，并自动编译文件）
}

```
#### 4、控制层引用
```javascript
const T=require('laocheng');
//初始化模板引擎
T.init(__dirname);
```

#### 5、控制层为模板设置参数

```javascript
 let data=T.getValObj();
 data.put('test',12345);
 data.put('abc.tf.a',50);
 data.put('list',{a:1,b:2,c:3,d:4,e:5,f:6,g:7});
```

#### 6、视图层编写模板
在“放置模板文件的目录”（默认为template）中新建一个模板文件“index.html”（默认扩展名为.html）

#### 7、控制层调用模板
调用模板需要传两个参数，一个resp为用户请求的response对象，还有一个data是第5步中绑定的数据对象。
```javascript
 T.display('index.html',function(M){
      M(resp,data);
      resp.end('');
 });
```
#### 8、标签
- 参数打印
```javascript
${test}
${abc.tf.a}
```
- 引入文件标签
```html
<include file="head.html"/>
```
- 条件判断标签if elseif else
```html
<if test="${test<1}">
<p>大口大111口的贷款111</p>
<elseif test="${test<100}"/>
<p>大口大口的贷款222</p>
<else/>
<p>大口大口的贷款333</p>
</if>
```
- 迭代循环标签for
```html
<for from="${list}" value="v1" key="k1">
     ${k1}=>${v1}<br/>
</for>
```