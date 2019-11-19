/********************************************************************************************************************
 * @Execution : default node : cmd> leapYear.js 
 * @Purpose : To learn concepts of functional programming
 * @description : Analysis of Functional programming
 * @overview :Functional
 * @author :Kanakalakshmi <kanaka171996@gmail.com>
 * @version : 1.0
 * @since : 01-August-2019
 *******************************************************************************************************/
//readline-sync module is loaded to node js to take the input from the user
let read = require('readline-sync')
let year = read.questionInt("enter a year")
//it checks whether th e user entered year is leap year or not 
if ((year % 400 == 0) || (year % 4 == 0) & (year % 100 != 0)) {
    console.log("leap year")
} else {
    console.log("not a leap year")
}