
let read = require('readline-sync')
let link = require('../UTILITY/linkedList')

let arr = []
let ar2 = []
/*
 * @description : hashing
 * @purpose: create linked list array objects and perform operations specified
 * @param {str}, which has data information of array read from file and passed from hashing
 */
let hashing = (data) => {
    try {
        for (let index = 0; index < 11; index++) {
            arr[index] = new link();
        }
        data.forEach(element => {
            let i = parseInt((parseInt(element) % 11))
            arr[i].add(element)
           // ar2.push(i)
        });
        //console.log(ar2)

        let arr1 = []
        let num = read.questionInt("enter the num")
        let indec = parseInt(parseInt(num) % 11)
        arr[indec].search(num)
        //let prev = null
        let index = parseInt(parseInt(num) % 11)
        for (let i = 0; i < data.length; i++) {
            console.log(arr[i].getArray())
        }
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    hashing
}