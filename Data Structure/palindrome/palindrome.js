/********************************************************************************************************************
 * @Execution : default node : cmd>  orderdList.js
 * @Purpose : To perform operations specified. 
 * @description : perform palindrome  using queue
 * @overview : dataStructure  
 * @author : kanakalakshmi <kanaka171996@gmail.com>
 * @version : 1.0
 * @since : 06-august-2019
 *******************************************************************************************************************/
//to take input from user,importing module
let read=require('readline-sync')
//importing module from palindromeListBussinessLogic.js
let imports=require('../palindrome/palindromeBuissnessLogic')
let str1=read.question("enter the string")
imports.checkPalindrome(str1)

