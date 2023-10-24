#!/usr/bin/env node 

import inquirer from 'inquirer'

const  availabeCourses : {[key : string] : number}= 
    {
    'Programming Fundamental' : 100 , 
    'Object Oriented Programming' : 50 , 
    'Machine Learning' : 500, 
    'Web Development' : 250
}

class Student{
    'name' : string 
    'id' : string = ''
    static 'id' = 0
    courses : string[] = []
    private balance : number = 0
        constructor(name : string){
            this.name = name
            this.id = ''
            for(let count = Student.id ; count <= 5 ; count++){
                    this.id+=String(count)
                    Student.id +=1
            }
        }

        enroll (course : string) {
            if (Object.keys(availabeCourses).includes(course)) 
            {
                if(availabeCourses[course] <= this.balance)
                {
                    this.courses.push(course)
                    this.payFee(course)
                }
                else console.log('Ops You have insuffiecny balance')
            }
            else console.log('Sorry Course Not Available..!!')
        }

        viewBalance(){
                console.log(`Current Balance: ${this.balance}`)
        }

        updateBalance(bal : number) {
            this.balance+=bal
        }

        showStatus(){
            let st = `___________\nName: ${this.name}\nID: ${this.id}\nCourses: ${this.courses}\nBalance: ${this.balance}\n___________`
            console.log(st)
        }

        private payFee(course : string){
                this.balance -= availabeCourses[course]
                console.log('Successfully enrolled in the course !!')
        }

}


let std = new Student('Afifa')
std.updateBalance(2000)
std.enroll('Programming Fundamental')
std.enroll('Machine Learning')
std.viewBalance()
std.showStatus()

