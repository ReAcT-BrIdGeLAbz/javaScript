let file=require('fs')
class read
{

}
read.prototype.jsonread=()=>
{   try{
    let data=file.readFileSync("/home/admin1/Desktop/javaScript/Object Oriented Programs/addressBook/address.json");
    let arr=JSON.parse(data);
    console.log(arr)
    return arr;
}
catch(e)
{
console.log("try"|+e)
}
}
module.exports=read