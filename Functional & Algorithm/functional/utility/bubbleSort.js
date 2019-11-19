//this function using bubble sort technique
let bubbleSort = (arr) => {
    //nested for loop is used to perform bubble sort
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            //if the jth index element is greater than j+1 index element then swapping operation is performed
            if (arr[j] > arr[j + 1]) {
                let t = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = t
            }

        }

    }
    console.log(arr)
}
//it is used to export the functions to the main function where this particular module is imported
module.exports = {
    bubbleSort
}