class cards {

}

cards.prototype.shuffle = (arr) => {
    try {
        arr.sort(() => Math.random - 0.5)
        return arr
    } catch (e) {
        console.log(e)
    }
}
cards.prototype.distribute = (arr3, n) => {
    try {
        let i = 0
        var player1 = []
        var player2 = []
        var player3 = []
        var player4 = []
        while (i < n) {
            player1.push(arr3[i])
            i++
            player2.push(arr3[i])
            i++
            player3.push(arr3[i])
            i++
            player4.push(arr3[i])
            i++
        }
        return [player1, player2, player3, player4]
    } catch (e) {
        console.log(e)
    }
}

module.exports = cards