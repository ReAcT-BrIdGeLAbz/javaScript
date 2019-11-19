let read = require('readline-sync')
//checks if the user inputed string is a power of two,if yes goes for further operations
let checkPowerOfTwo = (n) => {
    if (n % 2 == 0) {
        return true
    } else {
        return false
    }
}
//function to guess the number
let binSearch = (low, high) => {
    //the guessed no is high if both the low and high value are same
    if (high === low) {
        console.log(high)
        return
    }
    //calculates the mid value
    let mid = parseInt((low + high) / 2)
    console.log(low, high);
    //takes the input from the user in the form of true and false
    let rs = read.question("guess a no btw" + low + "to " + high + " \n")
    //if true recurssion is performed  and  parameters are sent 
    if (rs == true) {
        binSearch(low, mid)
        //if false recurssion is performed  and  parameters are sent 
    } else {
        binSearch(mid + 1, high)
    }
}
//it is used to export the functions to the main function where this particular module is imported
module.exports = {
    checkPowerOfTwo,
    binSearch
}