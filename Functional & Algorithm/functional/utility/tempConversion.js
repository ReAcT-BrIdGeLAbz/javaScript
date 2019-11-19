let tempConvOfCtoF = (temp) => {
    let F = (temp * (9 / 5)) + 32
    console.log("temp in fahrenhiet" + F)
}
let tempConvOfFtoC = (temp) => {
    let C = ((temp - 32) * (5 / 9))
    console.log("temp in celsius value" + C)
}
module.exports = {
    tempConvOfCtoF,
    tempConvOfFtoC
}