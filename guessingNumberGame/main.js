#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
console.log(chalk.rgb(148, 0, 211).bold("\t\t*** Guessing Number Game ***\n\n"));
const number = Math.floor(Math.random() * 10 + 1);
console.log(chalk.cyanBright("\t\t  Lets Guess the number..."));
for (let chance = 1; chance <= 3; chance++) {
    let guess = await inquirer.prompt({
        message: "Your Guess: ",
        type: "number",
        name: "userGuess"
    });
    if (number == guess.userGuess) {
        console.log(chalk.greenBright("Congratulations"), "!! you Win");
        break;
    }
    else {
        if (chance == 3)
            console.log(chalk.redBright("Opss!! your Trails are over"), "\n The number is", number);
        else
            console.log(chalk.yellowBright("Aww!! you Guess wrong number"), "\n lets Try again!!");
    }
}
