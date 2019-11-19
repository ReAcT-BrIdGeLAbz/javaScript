/********************************************************************************************************************
 * @Execution : default node : cmd>  primeStack.js
 * @Purpose : To perform operations specified. 
 * @description : Read data in the form of string from a file and arrange it ascending Order in a Linked List. 
 * Take user input for a number, if found then pop the number out of the list else insert the number in appropriate position
 * @overview : dataStructure  
 * @author : kanakalakshmi <kanaka171996@gmail.com>
 * @version : 1.0
 * @since : 06-august-2019
 *******************************************************************************************************************/
//to take input from user,importing module
let twoDarr = require('../UTILITY/twoDimArray')
let arr1 = twoDarr.checktwodarray()
let pass = require('../primeStack/primeStackBL')
pass.oneD(arr1)