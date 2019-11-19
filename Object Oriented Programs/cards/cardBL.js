let imp = require('../utility/cardutil')
let obj = new imp()
/*
 * @description: display
 * @purpose: to display each player cards
 * @param {arr}, which has the information about given numbers and passed 
 */
let disp = (arr) => {
    arr3 = obj.shuffle(arr3)
    disp = obj.distribute(arr3, 36)
    console.log("player1" + "   " + disp[0])
    console.log("player2" + "  " + disp[1])
    console.log("player3" + "  " + disp[2])
    console.log("player4" + "  " + disp[3])
}
module.exports = {
    disp
}