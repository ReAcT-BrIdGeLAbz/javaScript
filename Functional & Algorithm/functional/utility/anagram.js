//this function splits and sorts the string
let performOperation = (str1) => {
    let stringSplit = []
    //splits the array into single character 
    stringSplit = str1.split('');
    //sorts the array of characters in an ascending order
    stringSplit.sort();
    //joins the sorted array
    str1 = stringSplit.join("")

    return str1
}
//this function checks whether both the user inputed string is anagram
let checkAnagram = (str1, str2) => {
    //both the strings are passed to above function to split ,sort and join
    let c1 = performOperation(str1)
    let c2 = performOperation(str2)
    //checks if both the strings are equal
    if (c1 === c2) {
        console.log("anagram")
    } else {
        console.log("not anagram")
    }
}
//it is used to export the functions to the main function where this particular module is imported
module.exports = {
    checkAnagram,
    performOperation
}