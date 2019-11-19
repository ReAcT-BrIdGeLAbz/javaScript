/********************************************************************************************************************
 * @Execution : default node : cmd> binarySearchStringMain.js 
 * @Purpose : To learn concepts of algorithm programming
 * @description : Analysis of algorithm programming
 * @overview :Algorithm
 * @author :Kanakalakshmi <kanaka171996@gmail.com>
 * @version : 1.0
 * @since : 02-August-2019
 *******************************************************************************************************/
//importing the implementation logic present in the utility folder
let read = require('readline-sync')
//readline-sync module is loaded to node js to take the input from the user
let imports = require('../functional/utility/binarySearchString')
let str1 = read.question("enter the string")
let str = []
str = str1.split('')
str.sort();
console.log(str);
//start to calculate the start time when the function is called and stop when the function is finished executing
let start = new Date().getTime()
console.log(start);
imports.binSearchString(str, 0, str.length - 1, 'a')
let stop = new Date().getTime()
console.log(stop);
//elapsed time is calculated to calculate the time taken for the method execution
console.log("elapsed time  " + (stop - start))