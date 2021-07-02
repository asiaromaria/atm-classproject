const {pin, bal} = require("./account")
const prompt = require('prompt-sync')()

function getBalance(){
  console.log(bal);

}

function withdraw(){
    // 
    // return amount
    //let amount = prompt("How much would you like to withdraw? ");
    amount = (bal - prompt("How much would you like to withdraw? "));
    // for (let i =0; i<bal; i++)
    console.log("Your new balance is " + amount + ". Have a nice day!");

}

function deposit(){
    //let extraMoney = 5000;
    // let addMon = (bal + "");
    addedFunds = (prompt("Your funds have been deposited. If you are done, press Enter. If amount was incorrect, press Cancel. "));
    if(addedFunds === "Enter")
        addedFunds = "Your deposit is complete. Have a nice day!"
        // return true
    
    if(addedFunds === "Cancel")
        addedFunds = "Please take your returned funds. If there is an issue, please contact support at (888) 679-8387). A specialist would be glad to help you."
        // return false

    console.log(addedFunds)


    //{console.log("Your new balance is " + addedFunds + ". Your deposit is complete. Have a nice day!")}

    //let cancel = "Cancel";
   // {console.log("Please take your returned funds. If there is an issue, please contact support at (888) 679-8387). A specialist would be glad to help you.") 

}
    
    

    
    

        


function validatePin(){


}

module.exports.getBal=getBalance
module.exports.newBal=withdraw
module.exports.addedMon=deposit