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

has = new ClassAccount('Has', 100);
console.log(has);
has.deposit(200);
