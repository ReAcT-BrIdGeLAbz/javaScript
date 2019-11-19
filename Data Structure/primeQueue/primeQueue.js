/********************************************************************************************************************
 * @Execution : default node : cmd>  primeQueue.js
 * @Purpose : To perform operations specified. 
 * @description : create a two dimentional array of prime numbers using queue
 * @overview : dataStructure  
 * @author : kanakalakshmi <kanaka171996@gmail.com>
 * @version : 1.0
 * @since : 06-august-2019
 *******************************************************************************************************************/
//importing twodimarray.js from UTILITY folder
let twoDarr = require('../UTILITY/twoDimArray')
//two dimentional array passed to arr1
let arr1 = twoDarr.checktwodarray()
//importing module from primeQueueBussinessLogic.js
let pass = require('../primeQueue/primeQueueBL')
pass.que(arr1)
