/********************************************************************************************************************
 * @Execution : default node : cmd>  addressbook.js
 * @Purpose : To perform operations specified. 
 * @description : read from json file and perform specified
 * @overview : object oriented programming
 * @author : kanakalakshmi <kanaka171996@gmail.com>
 * @version : 1.0
 * @since : 12-august-2019
 *******************************************************************************************************************/
//to take input from user,importing module
let read= require('readline-sync')
let imports=require('../utility/addressutil')
let obj= new imports()
for(;;)
{    
    //asking user to enter  any one option
    console.log("1)add  2)delete 3)edit")
    let choice=read.questionInt()
switch(choice)
{
    case 1:
obj.add()
break;
case 2:
let num=read.question("enter the element u want to delete")
obj.delete(num)
break; 
case 3:
let num1=read.question("enter the element u want to edit")
obj.edit()
break;
default: "enter a valid operation"
}
}
