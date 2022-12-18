// Protection of variables mainly

function newAccount(name, initialBalance) {
  let balance = initialBalance;

  function showBalance() {
    console.log(`Hello ${name}, balance is ${balance}`);
  }

  function deposit(amount) {
    if (amount) {
      balance += amount;
    }
    showBalance();
  }

  function withdraw(amount) {
    if (amount > balance) {
      console.log('Insufficient funds...');
      return;
    }
    if (amount) {
      balance -= amount;
    }
    showBalance();
  }

  return {
    showBalance: showBalance,
    deposit: deposit,
    withdraw: withdraw,
  };
}

const testAccount = newAccount('Han', 200);
testAccount.showBalance();
testAccount.deposit(300);
testAccount.showBalance();
testAccount.withdraw(400);

// Cant control the balance
testAccount.balance = 9000;
