class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
  showBalance() {
    console.log("solde: " + this.balance + "EUR");
  }
}
