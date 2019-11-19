/********************************************************************************************************************
 * @Execution : default node : cmd> gamble.js 
 * @Purpose : To learn concepts of functional programming
 * @description : Analysis of Functional programming
 * @overview :Functional
 * @author :Kanakalakshmi <kanaka171996@gmail.com>
 * @version : 1.0
 * @since : 01-August-2019
 *******************************************************************************************************/
//readline-sync module is loaded to node js to take the input from the user
let read = require('readline-sync')
let trials = read.questionInt("enter no of trials")
//method gamble takes three parameters
let gamble = (stake, goal, trials) => {
    let wins = 0
    let bets = 0
    //loop checks the no of times won and lost for each trial
    for (let i = 0; i < trials; i++) {
        let cash = stake
        while (cash > 0 && cash < goal) {
            //no of bets made to reach goal or until cash becomes 0
            bets++
            //if random number generated is less than 0.5 then cash is incremented
            if (Math.random() < 0.5)
                cash++
            else
                cash--
            //if the cash becomes equal to goal then win increments
            if (cash == goal)
                wins++
        }
    }
    console.log("no of bets" + bets)
    //prints in the terminal percentage of win and loss
    console.log("win percentage" + ((wins / trials) * 100.00))
    console.log("lost percentage" + ((trials - wins) / trials) * 100.0)
}
//method is called
gamble(30, 50, 5)