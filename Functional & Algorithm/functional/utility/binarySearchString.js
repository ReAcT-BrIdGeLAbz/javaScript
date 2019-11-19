//function performs binary search of string
let binSearchString = (str, low, high, ele) => {
    while (low < high) {
        //calculates the mid value
        let mid = parseInt((low + high) / 2)
        //if the element is found in mid return the value
        if (str[mid] === ele) {
            console.log("ele is present in" + mid)
            return
            //if element is less than mid recurssion is performed  and  parameters are sent 
        } else if (ele < str[mid]) {
            binSearchString(str, low, mid, ele)
            //if element is greater than mid recurssion is performed  and  parameters are sent 
        } else {
            binSearchString(str, mid + 1, high, ele)
        }
    }
}
//it is used to export the functions to the main function where this particular module is imported
module.exports = {
    binSearchString
}