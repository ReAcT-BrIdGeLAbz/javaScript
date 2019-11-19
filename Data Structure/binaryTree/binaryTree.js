/********************************************************************************************************************
 * @Execution : default node : cmd>  binaryTree.jsv     
 * @Purpose : To perform operations specified. 
 * @description : binarTree
 * @overview : dataStructure  
 * @author : kanakalakshmi <kanaka171996@gmail.com>
 * @version : 1.0
 * @since : 06-august-2019
 *******************************************************************************************************************/
//importing module from primeAnagramBussinessLogic.js
let imports=require('../binaryTree/binaryTreeBL')
//to take input from user,importing module
let read=require('readline-sync')
let n=read.questionInt("enter number")
let num=parseInt(((imports.fact(2*n)))/(imports.fact(n))*(imports.fact(2*n))-n)
let catal=parseInt(num/parseInt(num+1))
console.log(catal)

