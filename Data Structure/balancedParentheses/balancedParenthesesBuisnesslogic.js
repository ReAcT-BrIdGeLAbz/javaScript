/*
 * @description: balan 
 * @purpose: checks whether the expression is balanced or not
 * @param {data}, which has the information about the expression read from user and passed from balanced
 */
let st = require('../utility/stack');
let obj = new st();
balan = (str) => {
    try {
        //invoking constructor of class stack.
        if (str.length === 0 || str === undefined || str === NaN || str.length < 2) {
            console.log("NOt a proper Expression");
            return;
        }
        str = str.split('');
        obj.stackArray();
        str.forEach(element => {
            if (element == '(') {
                obj.push(element);
            } else if (element == ')') {
                obj.pop();
            }
        });
        //checks for is empty
        if (obj.isEmpty())
            console.log(" Expression is Balanced");
        else
            console.log("Expression is not Balanced");

    } catch (e) {
        console.log(e)
    }
}
//balan(str);
module.exports = {
    balan
}