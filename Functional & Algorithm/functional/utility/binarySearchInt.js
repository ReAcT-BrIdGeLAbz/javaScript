//function performs binary search
let binSearch = (ar, low, high, ele) => {
    //calculates the mid value
    let mid = parseInt((low + high) / 2)
    //if the element is found in mid return the value
    if (ar[mid] == ele) {
        console.log("ele is present in" + mid)
        //if element is less than mid recurssion is performed  and  parameters are sent 
    } else if (ele < ar[mid]) {
        binSearch(ar, low, mid, ele)
        //if element is greater than mid recurssion is performed  and  parameters are sent 
    } else {
        binSearch(ar, mid + 1, high, ele)

    }
}
//it is used to export the functions to the main function where this particular module is imported
module.exports = {
    binSearch
}