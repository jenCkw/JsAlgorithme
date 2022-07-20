class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  showBalance() {
    console.log("Solde: " + this.balance + " EUR");
  }
}

const jenny = new BankAccount("jenny", 500);
jenny.showBalance();
