  /********************************************************************************************************************
   * @Execution : default node : cmd>  primeAnagram.js
   * @Purpose : To perform operations specified. 
   * @description : create a two dimentional array of prime numbers wchich are anagram
   * @overview : dataStructure  
   * @author : kanakalakshmi <kanaka171996@gmail.com>
   * @version : 1.0
   * @since : 06-august-2019
   *******************************************************************************************************************/
  //to take input from user,importing module
  let read = require('readline-sync')

  //importing module from primeAnagramBussinessLogic.js
  let imports = require('../primeAnagram/primeAnagramBL')

  //importing twodimarray.js from UTILITY folder
  let imports2 = require('../UTILITY/twoDimArray')

  let arr = []
  //two dimentional array passed to arr
  arr = imports2.checktwodarray();
  let a = [];
  //this loop sending each array to anagram and checks if it is anagram and is pushed to a

  arr.forEach(element => {
      a.push(imports.anaGram(element));
  });
  //used to filter null elements
  a = a.filter(ele => ele != '');

  console.log(a);