/********************************************************************************************************************
 * @Execution : default node : cmd> coupon.js 
 * @Purpose : To learn concepts of functional programming
 * @description : Analysis of Functional programming
 * @overview :Functional
 * @author :Kanakalakshmi <kanaka171996@gmail.com>
 * @version : 1.0
 * @since : 01-August-2019
 *******************************************************************************************************/
//readline-sync module is loaded to node js to take the input from the userlet read = require('readline-sync')
let num = read.questionInt("enter how many random you want to generate")
//empty array to push all the random numbers
let array = []
let count = 0
//loop generates random number
for (let i = 0; i < num + count; i++) {
    let randomNumber = parseInt((Math.random() * 10))
    //if random number generated is present count is incremented and added to condition in loop
    if (array.includes(randomNumber)) {

        count++;
        //if the random number generated is not present it is pushed to the array
    } else {

        k = array.push(randomNumber)
    }
}
//prints the number of random numbers the user is asked to generate
console.log(array)