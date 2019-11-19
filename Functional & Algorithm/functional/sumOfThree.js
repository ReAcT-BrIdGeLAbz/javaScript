/********************************************************************************************************************
 * @Execution : default node : cmd> sumOfThree.js 
 * @Purpose : To learn concepts of functional programming
 * @description : Analysis of Functional programming
 * @overview :Functional
 * @author :Kanakalakshmi <kanaka171996@gmail.com>
 * @version : 1.0
 * @since : 01-August-2019
 *******************************************************************************************************/
//readline-sync module is loaded to node js to take the input from the user
let read = require('readline-sync')
//user defined array 
let ar = [1, 2, -3, 3, 1, -4, 1, 5, 6]
//for the user defined array prints three numbers which adds to zero 
for (let i = 0; i < ar.length - 2; i++) {
    for (let j = i + 1; j < ar.length - 1; j++) {
        for (let k = j + 1; k < ar.length; k++) {
            if (ar[i] + ar[j] + ar[k] == 0) {
                //if sum of three numbers are equal to zero it prints those three numbers
                console.log(ar[i] + " " + ar[j] + " " + ar[k])

            }
        }
    }
}