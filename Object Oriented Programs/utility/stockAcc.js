let file = require('fs')
let read = require('readline-sync')
let li = []
let link = require('../../Data Structure/UTILITY/linkedList')
let path = "/home/admin1/Desktop/javaScript/Object Oriented Programs/commercialData/companyshares.json"
let path1 = "/home/admin1/Desktop/javaScript/Object Oriented Programs/commercialData/membershare.json "
//let linkobj= new link()
class stock {
    constructor() {
        this.data1 = file.readFileSync("/home/admin1/Desktop/javaScript/Object Oriented Programs/commercialData/membershare.json");
        this.arr = JSON.parse(this.data1);
    }
}
stock.prototype.addAccount = () => {
    try {
        let data1 = file.readFileSync("/home/admin1/Desktop/javaScript/Object Oriented Programs/commercialData/membershare.json");
        let arr = JSON.parse(data1);
        //console.log(arr)

        var i = 0
        var companyName = []
        var shares = []
        var amount = []
        var product = read.question("enter name")
        var n = read.questionInt("enter the num of attributes u want to add");
        console.log(n);
        while (i < n) {
            companyName[i] = read.question("enter comapny name")
            shares[i] = read.question("enter shares")
            amount[i] = read.question("enter amount")
            i += 1
        }
        var insert = []
        let k = 0
        while (k < n) {
            insert[k] = {
                companyName: companyName[k],
                shares: shares[k],
                amount: amount[k]
            }

            arr.forEach(element => {
                if (product == element)
                    return
                else
                    element[product] = insert
            });

            k++;
            console.log(k);
        }

        file.writeFileSync("/home/admin1/Desktop/javaScript/Object Oriented Programs/commercialData/membershare.json", JSON.stringify(arr))
    } catch (e) {
        console.log(e)
    }
}

stock.prototype.buy = (amt, username, cmpnyname, share) => {
    try {
        let res = false;
        let date;
        let data2 = file.readFileSync("/home/admin1/Desktop/javaScript/Object Oriented Programs/commercialData/membershare.json");
        let arr2 = JSON.parse(data2);
        console.log(arr2)
        let i = 0
        insert = []
        arr2.forEach(data => {
            let keys = Object.keys(data)
            keys.forEach(ele => {
                insert.push(ele)
                data[ele].forEach(e => {
                    arr2.forEach(element => {
                        if (e.companyName == cmpnyname && ele == username) {
                            res = false;
                            e.shares = (parseInt(e.shares) + parseInt(share));
                            return;
                        } else {
                            res = true;
                        }

                    });
                });
            });
        });
        if (res == true) {
            stock.prototype.addAccount();
        }
        file.writeFileSync("/home/admin1/Desktop/javaScript/Object Oriented Programs/commercialData/membershare.json", JSON.stringify(arr2))
    } catch (e) {
        console.log(e)
    }
}

stock.prototype.sell = (amt, username, cmpnyname, share) => {
    try {
        let res = false;
        let date;
        let data2 = file.readFileSync("/home/admin1/Desktop/javaScript/Object Oriented Programs/commercialData/membershare.json");
        let arr2 = JSON.parse(data2);
        console.log(arr2)
        let i = 0
        insert = []
        arr2.forEach(data => {
            let keys = Object.keys(data)
            keys.forEach(ele => {
                insert.push(ele)
                data[ele].forEach(e => {
                    arr2.forEach(element => {
                        if (e.companyName == cmpnyname && ele == username) {
                            res = false;
                            e.shares = (parseInt(e.shares) - parseInt(share));
                            e.amount = (parseInt(e.amount) + parseInt(amt));
                            return;
                        } else {
                            res = true;
                        }

                    });
                });
            });
        });
        file.writeFileSync("/home/admin1/Desktop/javaScript/Object Oriented Programs/commercialData/membershare.json", JSON.stringify(arr2))
    } catch (e) {
        console.log(e)
    }
}
class Buy extends stock {
    constructor() {
        super();
        this.arr1 = this.arr
        console.log(this.arr1)
    }
    print() {
        // console.log(this.arr1)
        //console.log("in")
        this.arr1.forEach(element => {
            let keys = Object.keys(element)
            keys.forEach(ele => {
                console.log(ele)
                console.log(element[ele])
            });
        });
    }
}
stock.prototype.addLink = () => {
    let arr = []
    let i = 0
    let data1 = file.readFileSync("/home/admin1/Desktop/javaScript/Object Oriented Programs/commercialData/membershare.json");
    let arr2 = JSON.parse(data1);
    let name = read.question("enter the key which had to be deleted")
    arr2.forEach(element => {
        let keys = Object.keys(element)
        keys.forEach(ele => {
            arr[i] = new link()
            arr[i].add(keys[i])
            arr[i].add(element[ele])
            arr[i].disp()
            if (ele === name) {
                delete arr[i]
            }
            //console.log(arr)
            i++
        });
    });
}
module.exports = Buy