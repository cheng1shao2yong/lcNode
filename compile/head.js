const Common=require("D:/nodejs/node_modules/laocheng/Common");
function temp(resp,val){
with(val){
resp.write("<p>这里是head</p>\n");
}
}
module.exports=temp;