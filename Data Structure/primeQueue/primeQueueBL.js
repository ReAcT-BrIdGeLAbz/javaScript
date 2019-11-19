/*
 * @description: anagram for prime numbers
 * @purpose: to check the passed array of elements are anagram or not using queue
 * @param {data}, which has the information about number read from user and passed from prime 
 */
let que = (arr) => {
    try {
        let queue = require('../UTILITY/queue');
        let an = require('../primeAnagram/primeAnagramBL')
        let q = new queue();
        let arrnew = []
        let arr2 = []
        let rev = []
        //an array of elements is pushed array
        q.Queue()
        arr.forEach(element => {
            element.forEach(ele => {
                arrnew.push(ele);

            });
        });

        arr2 = an.anaGram(arrnew);
        //iterates and push to queue
        arr2.forEach(element => {
            element.forEach(ele => {
                //console.log(ele)
                rev.push(q.enqueue(ele));

            });
        });
        console.log("Anagrams elements in reverse order");
        //iterates and pops from queue
        rev.forEach(element => {
            element.forEach(ele => {
                console.log(q.dequeue(ele))

            });
        });
    } catch (e) {
        console.log(e)
    }
}
module.exports = {
    que
}