/*
 * @description: anagram for prime numbers
 * @purpose: to check the passed array of elements are anagram or not using stack
 * @param {data}, which has the information about number read from user and passed from prime 
 */
let ana = require('../primeAnagram/primeAnagramBL')
let stac = require('../UTILITY/stack')
let obj = new stac()
let arrnew = [];
let arr2 = [];
let i = 0;
obj.stackArray()
//iterates 2d array,convertion from 2d array to 1d array
let oneD = (arr) => {
    try {
        arr.forEach(element => {
            element.forEach(ele => {
                arrnew.push(ele);

            })
        });
        arr2 = ana.anaGram(arrnew);
        //iterates and push to stack
        arr2.forEach(element => {
            element.forEach(ele => {
                obj.push(ele);
            });
        });
        console.log("Anagrams elements in reverse order");
        //iteates and pop elements from stack
        arr2.forEach(element => {
            element.forEach(ele => {
                console.log(obj.pop());
            });
        });
    } catch (e) {
        console.log(e)
    }
}
module.exports = {
    oneD
}