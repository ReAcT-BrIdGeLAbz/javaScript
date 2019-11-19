/********************************************************************************************************************
 * @Execution : default node : cmd> quadratic.js 
 * @Purpose : To learn concepts of functional programming
 * @description : Analysis of Functional programming
 * @overview :Functional
 * @author :Kanakalakshmi <kanaka171996@gmail.com>
 * @version : 1.0
 * @since : 01-August-2019
 *******************************************************************************************************/
//readline-sync module is loaded to node js to take the input from the user
let read = require('readline-sync')
//takes the user input for a ,b and c variables to calculate quadratic equation
let a = read.questionInt("enter a's value")
let b = read.questionInt("enter b's value")
let c = read.questionInt("enter c's value")
let delta = (b * b) - (4 * (a * c))
//root1 and root2 are calculated using delta that is calculted above ,
//squareroot is found using math.square in built function
let root1 = (-b + (Math.sqrt(delta))) / (2 * a)
let root2 = (-b - (Math.sqrt(delta))) / (2 * a)
//root1 and root2 is displayed 
console.log(root1)
console.log(root2)