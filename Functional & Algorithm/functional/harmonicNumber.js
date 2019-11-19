/********************************************************************************************************************
 * @Execution : default node : cmd> harmonicNumber.js 
 * @Purpose : To learn concepts of functional programming
 * @description : Analysis of Functional programming
 * @overview :Functional
 * @author :Kanakalakshmi <kanaka171996@gmail.com>
 * @version : 1.0
 * @since : 01-August-2019
 *******************************************************************************************************/
//readline-sync module is loaded to node js to take the input from the user
let read = require('readline-sync')
let nth = read.questionInt("enter the nth harmonic no u want to find")
let ans = 0
//loops until user entered nth value and prints the nth harmonic number
for (let i = 1; i <= nth; i++) {
    ans += (1 / i);
}
console.log(ans)