/********************************************************************************************************************
 * @Execution : default node : cmd> anagramMain.js 
 * @Purpose : To learn concepts of algorithm programming
 * @description : Analysis of algorithm programming
 * @overview :Algorithm
 * @author :Kanakalakshmi <kanaka171996@gmail.com>
 * @version : 1.0
 * @since : 02-August-2019
 *******************************************************************************************************/
//importing the implementation logic present in the utility folder
let imports = require('../functional/utility/anagram')
//readline-sync module is loaded to node js to take the input from the user
let read = require('readline-sync')
//enter two strings to whether it is anagram
let str1 = read.question("enter string1")
let str2 = read.question("enter string2")
//entered parameters are passed to implementation logic present in util folder
let k = imports.checkAnagram(str1, str2);