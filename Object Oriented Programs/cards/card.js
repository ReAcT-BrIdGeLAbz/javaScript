/********************************************************************************************************************
 * @Execution : default node : cmd>  card.js
 * @Purpose : To perform operations specified. 
 * @description : shuffling and distrubuting cards to specific players
 * @overview : object oriented programming
 * @author : kanakalakshmi <kanaka171996@gmail.com>
 * @version : 1.0
 * @since : 12-august-2019
 *******************************************************************************************************************/
//to take input from user,importing module
let read = require('readline-sync')
let arr2 = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
let arr1 = ["Clubs", "Diamonds", "Hearts", "Spades"]
let k = require('../cards/cardBL')
let arr3 = []
let disp = []
arr1.forEach(e => {
    arr2.forEach(ele => {
        arr3.push(e + " " + ele)
    });
});
k.disp(arr3)