/********************************************************************************************************************
 * @Execution : default node : cmd>  hashing.js
 * @Purpose : To perform operations specified. 
 * @description : create a array objects of linked list and add perform operations specified
 * @overview : dataStructure  
 * @author : kanakalakshmi <kanaka171996@gmail.com>
 * @version : 1.0
 * @since : 06-august-2019
 *******************************************************************************************************************/
//importing file server module to read from file
let file=require('fs')
let imports=require('../hashing/hashingBL')    
let data=file.readFileSync('number.txt').toString()
let ar=[]
ar=data.trim().split(' ')
console.log(ar)
imports.hashing(ar)

