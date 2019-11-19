//importing queue from UTILITY folder
let imports = require('../UTILITY/queue')
//object is created to the imported class that is queue
let obj = new imports()
/*
 * @description : stringSplit
 * @purpose: perform split operation on string and pass parameter to check if its palindrome or not
 * @param {str}, which has data information about string read from file and passed from palindrome
 */
let splitString = (str) => {
    let splitStr = str.split('').toString()
    this.checkPalindrome(splitStr)
}
/*
 * @description: checkpalindrome
 * @purpose: data is pushed to and retrieved from queue and check whether its is palindrome or not
 * @param {data}, which has the information about string read from user and passed from palindrome
 */
let checkPalindrome = (str) => {
    try {
        let str2 = obj.enqueue()
        let strrev = obj.dequeue()
        if (str2 === strrev) {
            console.log("palindrome")
        } else {
            console.log("not palindrome")
        }
    } catch (e) {
        console.log(e)
    }
}
module.exports = {
    checkPalindrome
}