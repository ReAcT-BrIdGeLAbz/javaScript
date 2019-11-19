/********************************************************************************************************************
 * @Execution : default node : cmd>  balancedParanthesis.js
 * @Purpose : To perform operations specified. 
 * @description : Read data in the form of an expression and check whether its balanced or not.
 * @overview : dataStructure  
 * @author : kanakalakshmi <kanaka171996@gmail.com>
 * @version : 1.0
 * @since : 06-august-2019
 *******************************************************************************************************************/
/*--->Importing modules */
let read = require('readline-sync');
let imports = require('../balancedParentheses/balancedParenthesesBuisnesslogic')
let str = read.question("Enter arthematic Expression:");
//data entered is sent to a function balan which is present in balancedParenthesesBuisnesslogic
imports.balan(str)