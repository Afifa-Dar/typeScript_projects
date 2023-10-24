#!/usr/bin/env node 
import inquiurer from 'inquirer'

const Exam = [
    {
        "Question" : 'This type of loop will always execute Atleast Once ' , 
        "Choices" : ["for"  , "while" , 'do-While'] , 
        "Answer" : "do-While"
    } , 
    {
        "Question" : "We can fetch the data from Dictionary using: " , 
        "Choices" : ["index" , "key" , "value"] , 
        "Answer" : "key"
    }, 
    {
        "Question" : "Stack data structure follows: ",
        "Choices" : ["FIFO" , "LIFO" , "Not Above"] , 
        "Answer"  :"LIFO" , 
    }, 
    {
        "Question" : "Recusion follow --- data structure: ",
        "Choices" : ["LinkList" , 'Queue' , 'Stack'] , 
        "Answer"  :"Stack" , 
    }, 
    {
        "Question" : "Code will successfully run with the present of --- type of error: ",
        "Choices" : ["Syntax Error" , "Logical Error" , "Run Time Error"] , 
        "Answer"  :"Logical Error" , 
    }
]

let score = 0
let answers = []
console.log('\n\t*** Programming Exam ***\n')

for (let  question of Exam){
   const ans = await inquiurer.prompt({
    message : question.Question , 
    type : "list" , 
    choices : question.Choices , 
    name : "ans"
   })
   answers.push(ans.ans)
   if (ans.ans == question.Answer) score+=1
}

console.clear()

console.log('\n\t *** Result *** \n')

console.log('Your Score is: ' , score)

for (let count = 0 ; count < 5 ; count++){
    const question = Exam[count]
    console.log(`Q${count+1}:  ${question.Question}`)
    console.log("     " , question.Choices)
    console.log(`\t Your answer: ${answers[count]}`)
    console.log(`\tCorrect Answer: ${question.Answer}`)
    console.log('\n')
    
}