let toBinary = (num) => {
    let rev = ""
    while (num > 0) {
        let m = num % 2
        rev = m + rev
        num = parseInt(num / 2)
    }
    console.log("equivalent binary representation" + rev)
}
module.exports = {
    toBinary
}