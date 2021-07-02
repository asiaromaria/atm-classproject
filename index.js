

console.log("Hello World!");

const {getBal, newBal, addedMon} = require("./atm")
const prompt = require('prompt-sync')()

//function mainMenu(atm){
let userInput = prompt("Would you like to see your balance? Yes or No. ")
    if(userInput=="Yes"){
        getBal()
    }
    


let userInput2 = prompt("What would you like to do? Deposit, Withdraw, or Exit? ")
    switch (userInput2) {
        case 'Withdraw':
            newBal()
            break; 
        case 'Deposit':
            addedMon()
            //updateBalance = deposit();
            break;
        case 'Exit':
        //create exit function;
            break;
        default:
            mainMenu(atm); // restart app
            break;
    }
      //return mainMenu

    
