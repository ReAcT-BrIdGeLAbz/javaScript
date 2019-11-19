let imports = require('../functional/utility/insertionSort')
let read = require('readline-sync')
let ar = []
let n = read.questionInt("enter how many elements ")
for (let i = 0; i < n; i++) {
    ar.push(read.questionInt())
}
imports.insertionSort(ar)