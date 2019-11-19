/********************************************************************************************************************
 * @Execution : default node : cmd>  commercial.js
 * @Purpose : To perform operations specified. 
 * @description : read from json file and perform specified
 * @overview : object oriented programming
 * @author : kanakalakshmi <kanaka171996@gmail.com>
 * @version : 1.0
 * @since : 12-august-2019
 *******************************************************************************************************************/
//to take input from user,importing module
let imports = require('../utility/stockAcc')
let obj = new imports()
for (;;) {
    //asking user to enter  any one option and does operation accordingly
    console.log("1)add  2)buy 3)sell  4)print")
    let choice = read.questionInt()
    switch (choice) {
        case 1:
            obj.addAccount()
            break;
        case 2:
            obj.buy(60, "vh", "BHEL", 1)
            break;
        case 3:
            obj.sell(80, "aishu", "BHARATH", 1)
            break
        case 4:
            obj.print()
            break
        default:
            "enter valid input"
    }
}