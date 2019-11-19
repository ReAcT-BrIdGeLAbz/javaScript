let read=require('readline-sync')
let shareName;
let shareNum;
let sharePrice;
let readInput=()=>
{
     shareName=read.question("enter shareName")
     shareNum=read.question("no of shares")
     sharePrice=read.question("price of stock")
}
let file=require('fs');
let calculate=()=>
{   
    readInput()
    let data=file.readFileSync('stockdata.json');
    let arr=JSON.parse(data);
     let price=0;
     let res=true;
     let msg=" ";
      arr.forEach(element => {
     if(element.name.includes(shareName))
        {
         if((parseInt(shareNum))<=(parseInt(element.share)))
         {
             //console.log("in")
             price=(parseInt(shareNum))*(parseInt(sharePrice))
             //console.log(price);
             //console.log(element.stockprice)
             if((parseInt(sharePrice)) <=(parseInt(element.stockprice)))
             {  
                 res=false;
                 console.log("comapany is avail  "+shareName)
                 console.log("no of shares  "+shareNum)
                 console.log("total cost for share  "+price) 
             }else 
             msg=("u have less amount")
         }else 
         msg="no of shares u entered is not available";
        }else 
         msg="company is not present"
    });   
    if(res==true)
    {
        console.log(msg);
    }

    let str2=JSON.stringify(data)
    return str2
}
module.exports={calculate,readInput}