#### ���°汾
1.0.0

#### 1��Ŀ¼
��ǰΪ������node.js����Ŀ¼������ģ��Ϊnode_modules/laocheng/

    index.js
	template/
	compile/
	node_modules/
		laocheng/������ģ�飩
			node_modules/��������֧��ģ�飩
			config.json�����������ļ���
			laocheng.js�����ļ���
			Template.js��ģ������ļ���
			Variable.js���������������ļ���

#### 2����װ

������ģ�鸴�Ƶ���node.js��node_modules/Ŀ¼�¡�

#### 3������ģ����������
```json
{
   "template_file":"template",������ģ���ļ���Ŀ¼��
   "compile_file":"compile",��������ģ���ļ�Ŀ¼��
   "extName":".html",��ģ���ļ���չ����
   "dynamic":true���Ƿ�̬����ģ���ļ��Ƿ�仯�����Զ������ļ���
}

```
#### 4�����Ʋ�����
```javascript
const T=require('laocheng');
//��ʼ��ģ������
T.init(__dirname);
```

#### 5�����Ʋ�Ϊģ�����ò���

```javascript
 let data=T.getValObj();
 data.put('test',12345);
 data.put('abc.tf.a',50);
 data.put('list',{a:1,b:2,c:3,d:4,e:5,f:6,g:7});
```

#### 6����ͼ���дģ��
�ڡ�����ģ���ļ���Ŀ¼����Ĭ��Ϊtemplate�����½�һ��ģ���ļ���index.html����Ĭ����չ��Ϊ.html��

#### 7�����Ʋ����ģ��
����ģ����Ҫ������������һ��respΪ�û������response���󣬻���һ��data�ǵ�5���а󶨵����ݶ���
```javascript
 T.display('index.html',function(M){
      M(resp,data);
      resp.end('');
 });
```
#### 8����ǩ
������ӡ
```javascript
${test}
${abc.tf.a}
```
�����ļ���ǩ
```html
<include file="head.html"/>
```
�����жϱ�ǩif elseif else
```html
<if test="${test<1}">
<p>��ڴ�111�ڵĴ���111</p>
<elseif test="${test<100}"/>
<p>��ڴ�ڵĴ���222</p>
<else/>
<p>��ڴ�ڵĴ���333</p>
</if>
```
����ѭ����ǩfor
```html
<for from="${list}" value="v1" key="k1">
     ${k1}=>${v1}<br/>
</for>
```