function temp(resp,val){
with(val){
resp.write("<!DOCTYPE html>\n");
resp.write("<html lang=\"en\">\n");
resp.write("<head>\n");
resp.write("    <meta charset=\"UTF-8\">\n");
resp.write("    <title>测试模版</title>\n");
resp.write("</head>\n");
resp.write("<body>\n");
        (function(){
        var a=6;
        var b=7;
        resp.write(a+b+"<br/>");
        resp.write(test+"<br/>");
        })();
resp.write("    ");require("./head")(resp,val);resp.write("\n");
resp.write("    <p>"+test+"这里是变量调用22222222"+abc.tf.a+"</p>\n");
resp.write("    <p>这里是if条件判断");if(test==abc.tf.a){resp.write("123");}resp.write("</p>\n");
resp.write("    <form action=\"http://localhost:3000/do\" method=\"post\">\n");
resp.write("        <input type=\"text\" name=\"userName\" value=\"成绍勇\"/><br/><br/>\n");
resp.write("        <input type=\"password\" name=\"password\" value=\"1234567\"/><br/><br/>\n");
resp.write("        <input type=\"submit\" value=\"提交\"/>\n");
resp.write("    </form>\n");
resp.write("    ");if(test<1){resp.write("\n");
resp.write("        <p>大口大111口的贷款111</p>\n");
resp.write("    ");}else if(test<100){resp.write("\n");
resp.write("        <p>大口大口的贷款222</p>\n");
resp.write("    ");}else{resp.write("\n");
resp.write("        <p>大口大口的贷款333</p>\n");
resp.write("    ");}resp.write("\n");
resp.write("    ");for(var key in list){val.put("v1",list[key]);val.put("k1",key);resp.write("\n");
resp.write("        ");if(v1%2==0){resp.write("\n");
resp.write("            "+k1+"=>"+v1+"<br/>\n");
resp.write("        ");}resp.write("\n");
resp.write("    ");}resp.write("\n");
resp.write("    ");require("./foot")(resp,val);resp.write("\n");
        (function(){
        var a=1;
        var b=2;
        resp.write(a+b+"<br/>");
        resp.write(test+"<br/>");
        })();
resp.write("</body>\n");
resp.write("</html>\n");
}
}
module.exports=temp;