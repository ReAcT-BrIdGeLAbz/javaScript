/********************************************************************************************************************
 * @Execution : default node : cmd> prime.js 
 * @Purpose : To learn concepts of functional programming
 * @description : Analysis of Functional programming
 * @overview :Functional
 * @author :Kanakalakshmi <kanaka171996@gmail.com>
 * @version : 1.0
 * @since : 01-August-2019
 *******************************************************************************************************/
//readline-sync module is loaded to node js to take the input from the user
let read = require('readline-sync')
let imports = require('../functional/utility/checkPrime')
let k = []
//this loops until 1000 and checks if its prime number or not and if prime then adds to the array
for (let i = 2; i < 1000; i++) {
        let res = imports.checkPrime(i);
        if (res > 0)
                k.push(res);
}
//this loop checks if the prime no is palindrome or not if yes it prints it
console.log("palindrome nos are")
for (let i = 0; i < k.length; i++) {
        if (imports.checkPalindrome(k[i]))
                console.log(k[i]);
}