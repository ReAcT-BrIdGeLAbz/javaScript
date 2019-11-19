/********************************************************************************************************************
 * @Execution : default node : cmd> binarySearchWordMain.js 
 * @Purpose : To learn concepts of algorithm programming
 * @description : Analysis of algorithm programming
 * @overview :Algorithm
 * @author :Kanakalakshmi <kanaka171996@gmail.com>
 * @version : 1.0
 * @since : 02-August-2019
 *******************************************************************************************************/
//to read from the folder
let fs = require('fs')
//readline-sync module is loaded to node js to take the input from the user
let read = require('readline-sync')
//importing the implementation logic present in the utility folder
let imports = require('../functional/utility/binaryWordSearch')
//data is read from the file 
let data = fs.readFileSync("file.txt").toString();
let k = []
//if any whitespaces are there to cut down the spaces trim is used.
let trimmed = data.trim()
//the trimmed data is split to array of words
k = trimmed.split(" ")
//it is sorted using the inbuilt function sort
let sortedString = k.sort()
console.log(sortedString)
let word = read.question("enter the word you want to search")
let m = imports.binSearchString(sortedString, 0, sortedString.length - 1, word)