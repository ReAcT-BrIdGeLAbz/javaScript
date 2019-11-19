let fact = (num) => {
    try {
        if (num == 0 || num == 1) {
            return 1
        } else
            return num * fact(num - 1)
    } catch (e)

    {
        console.log(e)
    }
}
module.exports = {
    fact
}