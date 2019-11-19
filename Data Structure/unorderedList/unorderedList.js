/********************************************************************************************************************
 * @Execution : default node : cmd>  unorderdList.js
 * @Purpose : To perform operations specified. 
 * @description : Read data in the form of numbers from a file and arrange it ascending Order in a Linked List. 
 * Take user input for a number, if found then pop the number out of the list else insert the number in appropriate position
 * @overview : dataStructure  
 * @author : kanakalakshmi <kanaka171996@gmail.com>
 * @version : 1.0
 * @since : 06-august-2019
 *******************************************************************************************************************/
//to take input from user,importing module
let read = require('readline-sync')
//importing module from unorderedListBussinessLogic.js
let imports2 = require('./unorderedListBussinessLogic')
//filesystem module allows you to work with file sysytem on your computer 
let file = require('fs')
//readfilesync is sub function.returns file data in byte format.
//toString() converts to String and initalizing the value to array arr.
let Str = file.readFileSync('file.txt').toString()
imports2.stringSplit(Str)