// Prevents creation of the same funcs and properties for every class/constructor instance

function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;

  // Deposit method could have gone here
  // Same to the bank involved but...
}

Account.prototype.bank = 'CHASE';
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(
    `Hello ${this.name}, you have deposited ${amount}. New balance is ${this.balance}`
  );
};

console.log(Account.prototype);
Hassan = new Account('Has', 300);
Hassan.deposit(200);
console.log(Hassan.bank);
