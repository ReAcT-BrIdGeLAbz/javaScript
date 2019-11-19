/********************************************************************************************************************
 * @Execution : default node : cmd>  prime.js
 * @Purpose : To perform operations specified. 
 * @description : create a two dimentional array of prime numbers
 * @overview : dataStructure  
 * @author : kanakalakshmi <kanaka171996@gmail.com>
 * @version : 1.0
 * @since : 06-august-2019
 *******************************************************************************************************************/
//to take input from user,importing module
let read=require('readline-sync')
//importing twodimarray.js from UTILITY folder
let imports=require('../UTILITY/twoDimArray')
let arr=[]
arr=imports.createTwoDarray()
console.log(arr)