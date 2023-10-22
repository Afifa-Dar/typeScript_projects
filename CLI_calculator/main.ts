// #! /usr/bin/env node

import inquirer from "inquirer"
import {add} from "./add.js"
import {sub} from "./sub.js"
import {mul} from "./mul.js"
import {div} from "./div.js"

export const calculate = async ( ) => {
    console.log("\t\t*** My CLI Calculator ***")
    let user_input = await inquirer.prompt(
        [
            {
            message : "Enter 1st Number",
            type: "number",
            name : "operand_a"
            },
            {
                message : "Enter 2nd Number",
                type: "number",
                name : "operand_b"
            },
            {
                message : "Select operator",
                type: "list",
                choices : ['+','-','*','/'],
                name : "operator"
            }
        ]
    )
    let res
    switch(user_input.operator){
        case('+'): 
            res = add(user_input.operand_a , user_input.operand_b)
            break
        case('-'):
            res = sub(user_input.operand_a , user_input.operand_b)
            break
        case('*'):
            res = mul(user_input.operand_a , user_input.operand_b)
            break
        case('/'):
            res = div(user_input.operand_a , user_input.operand_b)
            break
    }
    
    console.log(`${user_input.operand_a} ${user_input.operator} ${user_input.operand_b} = ${res}`)
}
