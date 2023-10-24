#! usr/bin/env node
import inquirer from 'inquirer';
const userInput = await inquirer.prompt({
    message: 'Enter Seconds For timer: ',
    type: 'number',
    name: 'sec'
});
const timer = setInterval(() => {
    let date = new Date();
    console.clear();
    console.log('Count Down Timer');
    console.log('Hr : Min : Sec');
    console.log(`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`);
}, 1000);
setTimeout(() => clearInterval(timer), userInput.sec * 1000);
