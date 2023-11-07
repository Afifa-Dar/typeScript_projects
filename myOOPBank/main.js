#!usr/bin/env/node
class BankAccount {
    constructor() {
        this.balance = 0;
    }
    checkBalance() {
        if (this.balance > 0)
            console.log(`your balance is ${this.balance}`);
        else
            console.log('There is no amount in your bank account');
    }
    debit(amount) {
        if (amount > 0) {
            if (this.balance < amount)
                console.log('You have insufficient balance');
            else {
                this.balance -= amount;
                console.log('transaction successful !!');
                console.log(`your Remaining balance: ${this.balance}`);
            }
        }
        else
            console.log('transaction failed');
    }
    credit(amount) {
        if (amount > 0) {
            this.balance += amount;
            if (amount > 100)
                this.balance -= 1;
            console.log(`Your update balance is ${this.balance}`);
        }
        else
            console.log('transaction failed');
    }
}
class User extends BankAccount {
    constructor(fisrtName, lastName, age, gender, mobileNumber) {
        super();
        this.fisrtName = fisrtName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.mobileNumber = mobileNumber;
    }
    getUserInfo() {
        console.log("Fist Name: ", this.fisrtName);
        console.log("Last Name: ", this.lastName);
        console.log("Age: ", this.age);
        console.log("Gender: ", this.gender);
        console.log("Mobile Number: ", this.mobileNumber);
        console.log("Balance: ", this.balance);
    }
}
let user = new User("John", "Doe", 25, "Male", "07123456789");
user.debit(100);
user.credit(-1000);
user.credit(10000);
user.checkBalance();
user.debit(100);
user.checkBalance();
export {};
