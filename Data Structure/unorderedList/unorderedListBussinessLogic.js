//importing linkedList.js from UTILITY folder
var imports = require('../UTILITY/linkedList')
//object is created to the imported class that is linkedList
var objj = new imports();

/*
 * @description : stringSplit
 * @purpose: perform split operation on string and link each data to node in linked list
 * @param {str}, which has data information about string read from file and passed from unorderedList
 */
let stringSplit = (str) => {
    try {
        var splitString = str.split(" ");
        splitString.forEach(element => {
            objj.add(element);
        });
        //user is asked to enter a word if the word is present it is removed from the linkedlist else it is added
        let word = read.question("enter a word")
        if (splitString.includes(word)) {
            objj.remove(word)
        } else {
            objj.add(word)

        }
        //displays the fucntion after deleting or adding the data
        objj.disp()
    } catch (e) {
        console.log(e)
    }
}
//exporting the function
module.exports = {
    stringSplit
}