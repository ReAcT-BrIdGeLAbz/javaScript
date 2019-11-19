let read=require('readline-sync')
let file=require('fs')
let par=require('../utility/readAddr')
let parobj= new par()
class book
{
constructor(read)
{
this.read=read
}
}
book.prototype= parobj
let rd=parobj.jsonread()
var instance1 = new book(rd)
 
book.prototype.add=()=>
{ 
    var i=0
    var name=[]
    var address=[]
    var  pincode=[] 
    var obj=rd
    //console.log(rd)
    //var name=read.question("enter name")
 var n=read.questionInt("enter the num of attributes u want to add")
  while(i<n)
  {
     name[i]=read.question("enter name of attribute")
     address[i]=read.question("enter address ")
     pincode[i]=read.question("enter pincode")
     i+=1
  }
   i=0
   while(i<n)
   {
       var insert={
           name:name[i],
           address:address[i],
           pincode:pincode[i]
       }
   
     obj.push(insert)
   i++
}
file.writeFileSync("/home/admin1/Desktop/javaScript/Object Oriented Programs/addressBook/address.json",JSON.stringify(obj))
}
book.prototype.delete=(key)=>
{ 
    var obj=rd
    obj.forEach(element => {
        let keys =Object.keys(element)
            keys.forEach(ele => {
                if(element[ele]===key)
                return
        else
                    return obj=obj.filter(e=>e[ele]!=key)
                 });
        });
   //console.log(obj)
   file.writeFileSync("/home/admin1/Desktop/javaScript/Object Oriented Programs/addressBook/address.json",JSON.stringify(obj))
}
book.prototype.edit=()=>
{
   let objj=rd
   let key =read.question("enter vvalue to search person")
   objj.forEach(element => {
    let keys =Object.keys(element)
        keys.forEach(ele => {
            if(element[ele]===key)
            {
               let change = read.question("enter what do u what to change")
               let value= read.question("enter ur value that u want to change")
             if(element[change]==="pincode")
             {
                 element[change]=parseInt(value)
             }
             else 
                element[change]=value
            }
        });
});
file.writeFileSync("/home/admin1/Desktop/javaScript/Object Oriented Programs/addressBook/address.json",JSON.stringify(objj))
}
   module.exports=book

