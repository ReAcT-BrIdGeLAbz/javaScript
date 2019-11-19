//this function using insertion sort technique
let insertionSortString = (ar) => {
    let start = new Date()
    //here for loop is used to loop until the array length
    for (let i = 1; i < ar.length; i++) {
        let j = i - 1
        let t = ar[i]
        //if conditions are satisfied in while loop the data is inserted in the index
        while (j >= 0 && ar[j] > t) {
            ar[j + 1] = ar[j]
            j--
        }
        //value present in index i is inserted to j+1 index
        ar[j + 1] = t
    }
    let end = new Date
    console.log(start)
    console.log(end)
    console.log(ar)
}
//it is used to export the functions to the main function where this particular module is imported
module.exports = {
    insertionSortString
}