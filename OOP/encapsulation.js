class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const wallet = new BankAccount();
wallet.deposit(100);
console.log(wallet.getBalance()); // 100
// console.log(wallet.#balance); <- this is mistake
// console.log(wallet.getBalance());
