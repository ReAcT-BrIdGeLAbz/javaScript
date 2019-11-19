let binSearchString = (str, low, high, ele) => {
    let res = false
    while (low < high) {
        let mid = parseInt((low + high) / 2)
        if (str[mid] === ele) {
            console.log("ele is present in" + mid)
            res = true
            process.exit(0)
        } else if (ele < str[mid]) {
            binSearchString(str, low, mid, ele)
        } else {
            binSearchString(str, mid + 1, high, ele)
        }
    }
    if (res == false)
        console.log("ele is not present")
    process.exit(0)
}

module.exports = {
    binSearchString
}