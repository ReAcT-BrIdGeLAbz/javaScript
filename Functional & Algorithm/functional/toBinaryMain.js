let read = require('readline-sync')
let imports = require('../functional/utility/toBinary')
let n = read.questionInt("enter a num")
imports.toBinary(n)