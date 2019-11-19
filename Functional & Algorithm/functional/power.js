/********************************************************************************************************************
 * @Execution : default node : cmd> power.js 
 * @Purpose : To learn concepts of functional programming
 * @description : Analysis of Functional programming
 * @overview :Functional
 * @author :Kanakalakshmi <kanaka171996@gmail.com>
 * @version : 1.0
 * @since : 01-August-2019
 *******************************************************************************************************/
//readline-sync module is loaded to node js to take the input from the userl
let read = require('readline-sync')
let number = read.questionInt("enter no")
//method that prints the power of 2 until the user enter power 
const powerOfNo = (number) => {
    for (let i = 0; i < number; i++) {
        let k = Math.pow(2, i)
        console.log(k)

    }
}
powerOfNo(number)