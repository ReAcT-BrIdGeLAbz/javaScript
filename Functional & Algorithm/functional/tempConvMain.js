let imports = require('../functional/utility/tempConversion')
let read = require('readline-sync')
let C = read.questionFloat("enter the temp in celsius")
imports.tempConvOfCtoF(C)
let F = read.questionFloat("enter the temp in fahrenheit ")
imports.tempConvOfFtoC(F)