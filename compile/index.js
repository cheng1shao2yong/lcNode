const Common=require("D:/nodejs/node_modules/laocheng/Common");
function temp(resp,val){
with(val){
resp.write("<!DOCTYPE html>\n");
resp.write("<html lang=\"en\">\n");
resp.write("<head>\n");
resp.write("    <meta charset=\"UTF-8\">\n");
resp.write("    <title>测试模版</title>\n");
resp.write("</head>\n");
resp.write("<body>\n");
{
        (function(){
        var a=6;
        var b=7;
        resp.write(a+b+"<br/>");
        resp.write(test+"<br/>");
        })();
}
resp.write("    ");require("./head")(resp,val);resp.write("\n");
resp.write("    <p>"+(test)+"这里可以直接使用字符串的任意方法："+(abc.tf.a.slice(0,3))+"</p>\n");
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
resp.write("            "+(k1)+"=>"+(v1)+"<br/>\n");
resp.write("        ");}resp.write("\n");
resp.write("    ");}resp.write("\n");
resp.write("    ");require("./foot")(resp,val);resp.write("\n");
{
        (function(){
        var a=1;
        var b=2;
        resp.write(a+b+"<br/>");
        resp.write(test+"<br/>");
        })();
}
resp.write("    <br/>\n");
resp.write("    <br/>\n");
resp.write("    ");if(Common.permit(1,PERMIT)){resp.write(""+(PERMIT)+"显示，该项目id为1<br/>");}resp.write("\n");
resp.write("    ");if(Common.permit(2,PERMIT)){resp.write(""+(PERMIT)+"显示，该项目id为2<br/>");}resp.write("");if(Common.permit(3,PERMIT)){resp.write(""+(PERMIT)+"显示，该项目id为3<br/>");}resp.write("\n");
resp.write("    ");if(Common.permit(4,PERMIT)){resp.write("\n");
resp.write("        "+(PERMIT)+"显示，该项目id为4<br/>\n");
resp.write("    ");}resp.write("\n");
resp.write("    ");if(Common.permit(5,PERMIT)){resp.write("\n");
resp.write("        "+(PERMIT)+"显示，该项目id为5<br/>\n");
resp.write("    ");}resp.write("\n");
resp.write("    ");if(Common.permit(6,PERMIT)){resp.write("\n");
resp.write("        "+(PERMIT)+"显示，该项目id为6<br/>\n");
resp.write("    ");}resp.write("\n");
resp.write("    ");if(Common.permit(7,PERMIT)){resp.write("\n");
resp.write("        "+(PERMIT)+"显示，该项目id为7<br/>\n");
resp.write("    ");}resp.write("\n");
resp.write("    ");if(Common.permit(8,PERMIT)){resp.write("\n");
resp.write("        "+(PERMIT)+"显示，该项目id为8<br/>\n");
resp.write("    ");}resp.write("\n");
resp.write("    ");if(Common.permit(9,PERMIT)){resp.write("\n");
resp.write("        "+(PERMIT)+"显示，该项目id为9<br/>\n");
resp.write("    ");}resp.write("\n");
resp.write("    ");if(Common.permit(10,PERMIT)){resp.write("\n");
resp.write("        "+(PERMIT)+"显示，该项目id为10<br/>\n");
resp.write("    ");}resp.write("\n");
resp.write("</body>\n");
resp.write("</html>\n");
}
}
module.exports=temp;