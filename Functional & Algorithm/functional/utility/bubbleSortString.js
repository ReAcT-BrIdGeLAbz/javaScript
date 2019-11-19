//this function using bubble sort technique
let bubbleSortString = (str) => {
    let ch = []
    //the string is split using the inbuilt function split
    ch = str.split('')
    //nested for loop is used to perform bubble sort
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length - 1 - i; j++) {
            //if the jth index element is greater than j+1 index element then swapping operation is performed
            if (ch[j] > ch[j + 1]) {
                let t = ch[j]
                ch[j] = ch[j + 1]
                ch[j + 1] = t
            }

        }

    }
    console.log(ch.join(''))
    return
}
//it is used to export the functions to the main function where this particular module is imported
module.exports = {
    bubbleSortString
}