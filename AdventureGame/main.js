#!usr bin/env node
import inquirer from 'inquirer';
// Enimies 
const enimies = [" Sam ", "Zombie ", "Alice", "Bob"];
let enimiesMaxHealth = 75;
const enimiesAttackDamage = 25;
// Player
let playerHealth = 100;
const playerAttackDamage = 50;
let numHealthPotoins = 3;
let healthPotionHealAmount = 50;
let healthPotionDropChance = 50; //percentage
let running = true;
while (running) {
    console.log("----------------------------------------------------------------");
    let enemyHealth = Math.random() * enimiesMaxHealth;
    let enemy = enimies[Math.floor(Math.random() * enimies.length)];
    console.log(`\t #${enemy} appear \n`);
    while (enemyHealth > 0) {
        console.log(`\tYour Health: ${playerHealth}`);
        console.log(`\tEnemy Health: ${enemyHealth}`);
        let user = await inquirer.prompt({
            message: "\tWhat do you want to",
            type: "list",
            name: "action",
            choices: [
                "Attack",
                "Drink Health Potion",
                "Run"
            ]
        });
        if (user.action == "Attack") {
            let enemyDamage = Math.random() * playerAttackDamage;
            let playerDamage = Math.random() * enimiesAttackDamage;
            enemyHealth -= enemyDamage;
            playerHealth -= playerDamage;
            console.log(`\tYou attacked ${enemy} for ${enemyDamage} damage`);
            console.log(`\tyou received ${playerDamage} damage in response`);
            if (playerHealth < 1) {
                console.log("\t\t your are too weak to move on");
                running = false;
                break;
            }
            if (enemyHealth < 1) {
                console.log("\t\tYaayyy You WON !!!!");
                running = false;
                break;
            }
        }
        else if (user.action == "Drink Health Potion") {
            if (numHealthPotoins > 0) {
                playerHealth += healthPotionHealAmount;
                numHealthPotoins--;
                console.log(`\tYou Drinked ${healthPotionHealAmount} Health Potion`);
                console.log('\t now your health is', playerHealth);
                console.log(`\t you have ${numHealthPotoins} health potoins left`);
            }
        }
        else if (user.action == "Run") {
            console.log(`\tYou ran away from ${enemy} !!`);
            break;
        }
    }
    if (running) {
        console.log("--------------------------------------------------------");
        console.log(`\tyou defeated ${enemy}`);
        console.log(`\tyour remaining health is ${playerHealth}`);
        if (Math.random() * 100 < healthPotionDropChance) {
            numHealthPotoins++;
            console.log(`\t${enemy} dropped Health Portions`);
            console.log(`\tyou have now ${numHealthPotoins} Health Portions`);
        }
        console.log("--------------------------------------------------------");
        let opt = await inquirer.prompt({
            message: "\tWhat you want to do",
            type: "list",
            name: "action",
            choices: [
                "Continue Fighting",
                "Exit"
            ]
        });
        if (opt.action == "Exit") {
            running = false;
            console.log("\t\tYou have successfully out of from the game");
        }
    }
}
console.log("################################################################");
console.log("\t\tTHanks For Playing");
