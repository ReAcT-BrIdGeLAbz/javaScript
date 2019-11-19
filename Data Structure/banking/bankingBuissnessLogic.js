let read = require('readline-sync')
let imports = require('../UTILITY/queue')
let obj = new imports()
let obj2 = new imports()
let i = 0
let cashw = 0
let cashd = 0
let cashwithdrawn = []
let cashdeposited = []
let cash = () => {
   try {
      for (let i = 0; i < 3; i++) {
         let res = read.question("enter w to withdraw and d to deposit")
         if (res == 'w') {
            obj.enqueue('w')
            let cash = read.questionInt("enter how much money should be withdrawn")
            cashwithdrawn.push(cash)
         } else {
            obj2.enqueue('d')
            let cash = read.questionInt("enter how much money should be withdrawn")
            cashdeposited.push(cash)
         }
      }

   } catch (e) {
      console.log(e)
   }
}

let dequeueing = () => {
   for (let i = 0; i < 3; i++) {
      console.log(obj.dequeue() + "," + cashdeposited[i])
      console.log(obj2.dequeue() + "," + cashwithdrawn[i])
   }
}
cash();
dequeueing();