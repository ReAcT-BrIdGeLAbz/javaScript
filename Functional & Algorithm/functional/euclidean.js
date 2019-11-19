/********************************************************************************************************************
 * @Execution : default node : cmd> euclidean.js 
 * @Purpose : To learn concepts of functional programming
 * @description : Analysis of Functional programming
 * @overview :Functional
 * @author :Kanakalakshmi <kanaka171996@gmail.com>
 * @version : 1.0
 * @since : 01-August-2019
 *******************************************************************************************************/
//readline-sync module is loaded to node js to take the input from the user
let read = require('readline-sync')
//takes the user input for x and y variables to calculate euclidean formula
let x = read.questionInt("enter the value of x")
let y = read.questionInt("enter the value of y")
//euclidean distance formula
let distance = Math.sqrt((Math.pow(x, x) + Math.pow(y, y)))
console.log(distance)