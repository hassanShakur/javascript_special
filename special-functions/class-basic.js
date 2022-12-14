// Much simpler and clean syntax

class ClassAccount {
  constructor(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
  }

  // Methods and properties dont need declaration
  deposit(amount) {
    this.balance += amount;
    console.log(
      `Hello ${this.name}, you have deposited ${amount}. New balance is ${this.balance}`
    );
  }

  bank = 'CHASE';
}

joy = new ClassAccount('Joy', 100);
console.log(joy);
joy.deposit(200);
