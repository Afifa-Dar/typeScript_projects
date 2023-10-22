#!/usr/bin/env node 
import inquirer from 'inquirer';
let wordCount = (para) => {
    return para.split(" ").length;
};
let charCount = (para) => {
    return para.replace(/ +/g, "").length;
};
let para = await inquirer.prompt({
    message: "Enter Any Paragragh: ",
    name: 'para',
});
console.log(`\n\tTotal Words in para: ${wordCount(para.para)}`);
console.log(`\tTotal Characters in para: ${charCount(para.para)}`);
