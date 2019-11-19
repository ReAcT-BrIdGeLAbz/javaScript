let imports = require('../functional/utility/binarySearch')
let read = require('readline-sync')
let n = read.questionInt("enter a N value")
let rs = imports.checkPowerOfTwo(n)
if (rs == true) {
    imports.binSearch(0, n)
} else {
    console.log("enter a valid value")
}