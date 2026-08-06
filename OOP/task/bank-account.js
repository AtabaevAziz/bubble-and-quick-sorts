// Абстракция: базовый класс описывает общую модель банковского счёта
class BankAccount {
    // Инкапсуляция: приватное поле недоступно напрямую снаружи
    #balance;

    constructor(owner, balance = 0) {
        // Запрещаем создавать абстрактный базовый класс напрямую
        if (new.target === BankAccount) {
            throw new Error("BankAccount — абстрактный класс");
        }

        this.owner = owner;
        this.#balance = balance;
    }

    // Публичный метод для безопасного изменения приватного баланса
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Сумма пополнения должна быть больше нуля");
        }

        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Сумма снятия должна быть больше нуля");
        }

        if (amount > this.#balance) {
            throw new Error("Недостаточно средств");
        }

        this.#balance -= amount;
    }

    getBalance() {
        return this.#balance;
    }

    // Абстрактный метод: каждый тип счёта реализует его по-своему
    calculateMonthlyProfit() {
        throw new Error("Метод calculateMonthlyProfit() должен быть реализован");
    }

    printInfo() {
        console.log(
            `${this.owner}: баланс ${this.getBalance()}, доход за месяц ${this.calculateMonthlyProfit()}`
    );
    }
}

// Наследование: SavingsAccount получает свойства и методы BankAccount
class SavingsAccount extends BankAccount {
    constructor(owner, balance, interestRate) {
        super(owner, balance);
        this.interestRate = interestRate;
    }

    // Полиморфизм: своя реализация расчёта дохода
    calculateMonthlyProfit() {
        return this.getBalance() * (this.interestRate / 100);
    }
}

// Наследование
class CashbackAccount extends BankAccount {
    constructor(owner, balance, cashbackRate, monthlyExpenses) {
        super(owner, balance);
        this.cashbackRate = cashbackRate;
        this.monthlyExpenses = monthlyExpenses;
    }

    // Полиморфизм: тот же метод, но другое поведение
    calculateMonthlyProfit() {
        return this.monthlyExpenses * (this.cashbackRate / 100);
    }
}

const savings = new SavingsAccount("Алексей", 100_000, 1);
const cashback = new CashbackAccount("Мария", 50_000, 5, 20_000);

savings.deposit(10_000);
cashback.withdraw(5_000);

// Полиморфизм:
// вызывается один и тот же метод, но результат зависит от типа объекта
const accounts = [savings, cashback];

accounts.forEach((account) => {
    account.printInfo();
});