/********************************************************************************************************************
 * @Execution : default node : cmd> flip.js 
 * @Purpose : To learn concepts of functional programming
 * @description : Analysis of Functional programming
 * @overview :Functional
 * @author :Kanakalakshmi <kanaka171996@gmail.com>
 * @version : 1.0
 * @since : 01-August-2019
 *******************************************************************************************************/
//readline-sync module is loaded to node js to take the input from the user
let read = require('readline-sync')
let headcount = 0
let tailcount = 0
let head, tail
let noOfFlips = read.questionInt("enter no of flips")
//loops until the no of flips 
for (let index = 0; index < noOfFlips; index++) {
    //generates a random no btw 0 to 1  if its less than 0.5 then increments the head else increments tail
    if (Math.random() < 0.5) {
        headcount++
    } else {
        tailcount++
    }
}
//prints the percentage of head vs tail
console.log("percentage of head is" + ((headcount / noOfFlips) * 100))
console.log("percentage of tailis" + ((tailcount / noOfFlips) * 100))