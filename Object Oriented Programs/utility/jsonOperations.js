let read= require('readline-sync')
let file=require('fs')
class json
{

}
json.prototype.read=()=>
{   try{
    let data=file.readFileSync("/home/admin1/Desktop/javaScript/Object Oriented Programs/inventoryManager/dataInv.json");
    let arr=JSON.parse(data);
    //console.log(arr)
    return arr;
}
catch(e)
{
console.log("try"|+e)
}
}
json.prototype.calculate=()=>
{
    var obj=json.prototype.read()
    console.log(obj)
    let invencal;
    obj.forEach(element => {
     let key=Object.keys(element);
     //console.log(key)
       key.forEach(ele => {
        element[ele].forEach(e=>
          {
               console.log("-----------------"+e.name+"-----------------------------");
               console.log("price   " + e.price);
               console.log("weight  "+e.weight);
               console.log("price   "+e.price);
               console.log("inventory expense   "+(invencal=(e.weight*e.price)))
          });
         });
  });   
}
json.prototype.insertEle=()=>
{ 
    var i=0
    var name=[]
    var weight=[]
    var  price=[] 
    var obj=json.prototype.read()
    var product=read.question("enter product name")
 var n=read.questionInt("enter the num of attributes u want to add")
  while(i<n)
  {
     name[i]=read.question("enter name of attribute")
     weight[i]=read.question("enter weight of attribute")
     price[i]=read.question("enter the price")
     i+=1
  }
   var insert=[]
   i=0
   while(i<n)
   {
       insert[i]={
           name:name[i],
           weight:weight[i],
           price:price[i]
       }
   obj.forEach(element => {
       if(product == element)
       return
       else
       element[product]=insert
   });
   i++
}
   console.log(obj)
   file.writeFileSync("/home/admin1/Desktop/javaScript/Object Oriented Programs/inventoryManager/dataInv.json",JSON.stringify(obj))
}
json.prototype.delete=(ky)=>
{
    console.log("delete")
let objj=json.prototype.read()
objj.forEach(element=> {
    var key=Object.keys(element)
    key.forEach(ele => {
        if(ele===ky){
            delete element[ele];
    }
    });
});
console.log(objj)
file.writeFileSync("/home/admin1/Desktop/javaScript/Object Oriented Programs/inventoryManager/dataInv.json",JSON.stringify(objj))
}
module.exports= json