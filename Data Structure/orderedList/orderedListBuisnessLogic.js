//importing linkedList.js from UTILITY folder
let imports = require('../UTILITY/linkedList')

//object is created to the imported class that is linkedList
let obj = new imports()

//filesystem module allows you to work with file sysytem on your computer 
let file = require('fs')

//readfilesync is sub function.returns file data in byte format.
//toString() converts to String and initalizing the value to array arr.
let data = file.readFileSync('number.txt').toString()

//trim is used to remove any whitespaces
let trimData = data.trim()

//trimmed  data is split into words into an array format
let dataSplit = trimData.split(' ')

//for each element node will be created and linked.
dataSplit.forEach(element => {
    obj.add(element)
});

//displays the fucntion after deleting or adding the data
obj.disp()

/*
 * @description: searchAndPerformOperation
 * @purpose: search the data in linked list if it is present the element is deleted else it is added to the linkedList
 * @param {data}, which has the information about number read from user and passed from orderedList
 */
let searchAndPerformOperation = (data) => {
    obj.search(data)
}
//exporting the function
module.exports = {
    searchAndPerformOperation
}