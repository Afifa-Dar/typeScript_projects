#!/usr/bin/env node
import inquirer from 'inquirer';
let bank_user = {
    name: 'ali',
    pin: 2134,
    balance: Math.random() * 10000 + 1
};
const userInput = await inquirer.prompt([
    {
        message: "Enter user name",
        name: "userName",
        type: "input"
    },
    {
        message: "Enter pin",
        name: "userPin",
        type: "number"
    }
]);
console.log(userInput);
if (userInput.userName == bank_user.name || userInput.userPin == bank_user.pin) {
    console.log('Successfully login');
    while (true) {
        const action = await inquirer.prompt([{
                message: "What you wanr to perform ?",
                name: "userAction",
                type: 'list',
                choices: ["withdrawl", "deposit"]
            },
            {
                message: "Enter Amount: ",
                name: "userAmount",
                type: 'number',
            }]);
        if (action.userAction == "withdrawl") {
            if (bank_user.balance >= action.userAmount) {
                console.log('Transation Successfull !!');
                console.log(`Your Remaining balance is: ${bank_user.balance}`);
            }
            else
                console.log('Sorry! You dont have enough balnce');
        }
        else {
            bank_user.balance = bank_user.balance + action.userAmount;
            console.log("transaction successfull !!");
            console.log(`Your updated balance is: ${bank_user.balance}`);
        }
        const proceed = await inquirer.prompt({
            message: "Want to proceed furthur ? ",
            type: 'list',
            choices: ['Yes', 'No'],
            name: "userChoice"
        });
        if (proceed.userChoice == 'No') {
            console.log('Take Care !! ');
            break;
        }
    }
}
else
    console.log('Invalid Username or pin');
