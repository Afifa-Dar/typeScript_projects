#! usr/bin/env node

class Person{
    private pesonlaity : string 

    constructor(){
        this.pesonlaity = 'Mystery'
    }

    askQuestion(choice : number){
        if(choice == 1) this.pesonlaity = 'Extrovert'
        else if (choice == 2) this.pesonlaity = 'Introvert'
        else this.pesonlaity =  "still Mystery"
    }
    getPersonality(){
        return this.pesonlaity
    }
}
class Student extends Person{
    private _name : string 
    constructor(){
        super()
        this._name = ""
    }
    get name(){
        return this._name
    }
    set name(name : string){
        this._name = name
    }
}

import inquirer from 'inquirer'
let choice = await inquirer.prompt({
    message : '"Type1 -> If you like to talk to other" \n "Type2 -> if you rather keep to your self"\n ',
    type : 'number' , 
    name : 'userChoice'
})
console.clear()
let person = new Person()
person.askQuestion(choice.userChoice)
console.log(` You are ${person.getPersonality()}`)

let std = new Student()
let name = await inquirer.prompt({
    message : 'Your Name: ' , 
    type : 'string' , 
    name : 'stdName'
})
std.name = name.stdName

console.log(`Your name is ${std.name} and you personality is ${std.getPersonality()}`)