let read= require('readline-sync')
let imports=require('../utility/jsonOperations')
imports.prototype.insertEle();
var key = read.question("enter a attribute u want to delete")
imports.prototype.delete(key)
imports.prototype.calculate()