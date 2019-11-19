//this loop checks if the number is prime or not
let checkPrime = (num) => {
    let arr = []
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return 0
        }
    }
    console.log(num)
    return num
}
//this function checks if its the number is palindrome or not
let checkPalindrome = (k) => {
    if (k > 10) {
        let m = k
        let rev = 0
        while (k > 0) {
            let rem = k % 10
            rev = rev * 10 + rem
            k = parseInt(k / 10);
        }

        if (m == rev) {
            return true
        }
    }
}
//it is used to export the functions to the main function where this particular module is imported
module.exports = {
    checkPrime,
    checkPalindrome
}