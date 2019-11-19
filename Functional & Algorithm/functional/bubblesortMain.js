/********************************************************************************************************************
 * @Execution : default node : cmd> bubbleSortMain.js 
 * @Purpose : To learn concepts of algorithm programming
 * @description : Analysis of algorithm programming
 * @overview :Algorithm
 * @author :Kanakalakshmi <kanaka171996@gmail.com>
 * @version : 1.0
 * @since : 02-August-2019
 *******************************************************************************************************/
//importing the implementation logic present in the utility folder
let imports = require('../functional/utility/bubbleSort')
//readline-sync module is loaded to node js to take the input from the user
let read = require('readline-sync')
let ar = []
let n = read.questionInt("enter the no of elements")
for (let i = 0; i < n; i++) {
    ar.push(read.questionInt())
}
//start to calculate the start time when the function is called and stop when the function is finished executing
let start = new Date().getTime()
imports.bubbleSort(ar)
let stop = new Date().getTime()
//elapsed time is calculated to calculate the time taken for the method execution
console.log("elapsed time  " + (stop - start))