
let file=require('fs');
let calculate=()=>
{  
    let data=file.readFileSync('inventory.json');
    let arr=JSON.parse(data);

     let invencal;
      arr.forEach(element => {
       let key=Object.keys(element);
       //console.log(key)
         key.forEach(ele => {
          element[ele].forEach(e=>
            {
                 console.log("-----------------"+e.name+"-----------------------------");
                 console.log("price   " + e.price);
                 console.log("weight  "+e.weight);
                 console.log("price   "+e.price);
                 console.log("inventory expense   "+(invencal=(e.weight*e.price)))
            });
           });
         });   
}



module.exports={calculate}