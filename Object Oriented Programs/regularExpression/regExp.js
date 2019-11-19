var read=require('readline-sync')
var str ="Hello <<name>>, We have your full name as <<full name>> in our system. Your contact number is 91-xxxxxxxxxx. Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016."
//var stringsplit=str.trim('').split(" ")
//console.log(stringsplit)
name=/^[a-z]*/g
num=/^d[10]*/g
date=/^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/
var today = new Date(); 
var dd = today.getDate(); 
var mm = today.getMonth() + 1; 
var yyyy=today.getFullYear();
date=(dd+'/'+mm+'/'+yyyy)
//console.log(date)
name=read.question("enter full name")
num =read.questionInt("enter contact num").toString()
var str2=name.toString().trim( ).split(" ")
var str3=name.toString().trim( ).split(" ").join(" ")
console.log(str2)  
var res=str.replace("<<name>>",str2[0])
var fullName=res.replace("<<full name>>",str3)
var phoneNum=fullName.replace("91-xxxxxxxxxx",num)
var finalStr=phoneNum.replace("01/01/2016",date)
console.log(finalStr)