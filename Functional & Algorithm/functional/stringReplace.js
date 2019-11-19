/********************************************************************************************************************
 * @Execution : default node : cmd> stringReplace.js 
 * @Purpose : To learn concepts of functional programming
 * @description : Analysis of Functional programming
 * @overview :Functional
 * @author :Kanakalakshmi <kanaka171996@gmail.com>
 * @version : 1.0
 * @since : 01-August-2019
 *******************************************************************************************************/
//readline-sync module is loaded to node js to take the input from the user
let read = require('readline-sync')
let k = "hi <<username>>, how are you"
//input is taken from the user in the form of string
let l = read.question("enter the name")
//if the entered string length is greater than 3 then the user inputed string is replace with username
if (l.length > 3) {
    let str = k.replace("<<username>>", l)
    //replaced string is displayed
    console.log(str)
}