/********************************************************************************************************************
 * @Execution : default node : cmd> insertionSortStringMain.js 
 * @Purpose : To learn concepts of algorithm programming
 * @description : Analysis of algorithm programming
 * @overview :Algorithm
 * @author :Kanakalakshmi <kanaka171996@gmail.com>
 * @version : 1.0
 * @since : 02-August-2019
 *******************************************************************************************************/
//importing the implementation logic present in the utility folder
let imports = require('../functional/utility/insertionSortString')
let read = require('readline-sync')
let str = read.question("enter string")
let arr = []
arr = str.split('')
imports.insertionSortString(arr)