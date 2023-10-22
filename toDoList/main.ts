#!/usr/bin/env node
import 'inquirer' ;
import inquirer from 'inquirer';


class Task {
    name : string 
    status : string 
    init_date : string
    completion_date? : string
    static id : number = 0
    id : number

    constructor(name:string , status : string , init_date: string , completion_date? : string){
        this.name = name ;
        this.status = status ; 
        this.init_date = init_date ; 
        if (this.status == 'no') this.completion_date ='__'
        else this.completion_date = completion_date
        this.id = Task.id+=1
    }

}
let todo = async () => {
    let tasks = []
    let comp_date
    
    while (true){
        const to  = await  inquirer.prompt(
            [
        {
            message : 'enter Task : ' , 
            type : 'string' ,
            name : 'task'
        } , 
        {
            message : 'Task completed ? ' ,
            type : 'list' ,  
            choices : ['yes' , 'no'] ,
            name : 'status'
        } , 
        {
            message : 'initialize date: ' , 
            type : 'string' ,
            name : 'init_date'
        } 
        ])
        if (to.status == 'yes')
        {
            comp_date = await inquirer.prompt({
            message : 'Complettion_date : ' ,
            name : 'complete_date'
        })}
        
        tasks.push (new Task(to.task , to.status , to.init_date , comp_date ? comp_date.complete_date : ''))
    
        const or = await inquirer.prompt({
            message : "Any Furthur task ? " , 
            type : 'list' , 
            choices : ['yes' , 'no'] ,
            name : 'proceed'
        })
        if (or.proceed == 'no') {break}
    }
        console.log('Task \t\t\t Status \t\t\t Start Date \t\t\t End Date' )
        for ( let i of tasks) {
            console.log(`${i.name} \t\t\t ${i.status} \t\t\t ${i.init_date} \t\t\t ${i.completion_date}`)
        }
    
    }
  
todo()
