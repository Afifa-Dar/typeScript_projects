#!/usr/bin/env node 
import 'inquirer';
import inquirer from 'inquirer';
const exchangeRate = {
    "PKR": {
        'PKR': 1,
        'USD': 0.0036,
        'UAE': 0.013,
        'YTL': 0.10,
    },
    'USD': {
        'USD': 1,
        'PKR': 275,
        'UAE': 3.67,
        'YTL': 27.98,
    },
    'UAE': {
        'UAE': 1,
        'USD': 0.27,
        'PKR': 75.84,
        'YTL': 7.62,
    },
    'YTL': {
        'YTL': 1,
        'USD': 0.036,
        'UAE': 0.13,
        'PKR': 9.83,
    }
};
console.log('\t\t***Welcome to Currency convertor***\n');
let input = await inquirer.prompt([
    {
        message: 'Source Currency: ',
        type: 'list',
        choices: ['PKR', 'USD', 'UAE', 'YTL'],
        name: 'from'
    },
    {
        message: 'Target Currency: ',
        type: 'list',
        choices: ['PKR', 'USD', 'UAE', 'YTL'],
        name: 'to'
    },
    {
        message: 'Amount: ',
        type: 'number',
        name: 'amount'
    }
]);
console.log('\n');
const ans = exchangeRate[input.from][input.to] * input.amount;
console.log(` ${input.amount} ${input.from} into ${input.to} is ${ans}`);
