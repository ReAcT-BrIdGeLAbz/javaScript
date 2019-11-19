/********************************************************************************************************************
 * @Execution : default node : cmd> windChill.js 
 * @Purpose : To learn concepts of functional programming
 * @description : Analysis of Functional programming
 * @overview :Functional
 * @author :Kanakalakshmi <kanaka171996@gmail.com>
 * @version : 1.0
 * @since : 01-August-2019
 *******************************************************************************************************/
//readline-sync module is loaded to node js to take the input from the user
let read = require('readline-sync')

//temperature and windSpeed data is taken from the user from terminal
let temperature = read.questionInt("enter  temperature")
let windSpeed = read.questionInt("enter wind speed")

//windChill is calculated only if the given condition is satisfied
if (temperature > 120 || temperature > 50 || temperature < 3) {
    console.log("enter a valid temperature")
} else {
    let wind = 35.74 + 0.625 * temperature + ((0.4275 * temperature) - 35.75) * Math.pow(temperature, 0.16);
    console.log(wind)
}