// Абстракция
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getInfo() {
        throw new Error("Метод должен быть переопределён");
    }
}

// Наследование
class Phone extends Product {
    constructor(name, price, memory) {
        super(name, price);
        this.memory = memory;
    }

    // Полиморфизм
    getInfo() {
        return (`${this.name}, ${this.memory} ГБ - ${this.price}$`);
    }
}

class Laptop extends Product {
    constructor(name, price, cpu) {
        super(name, price);
        this.cpu = cpu;
    }

    // Полиморфизм
    getInfo() {
        return (`${this.name}, процессор ${this.cpu} - ${this.price}$`);
    }
}

// Инкапсуляция
class Cart {
    #products = [];

    addProduct(product) {
        this.#products.push(product);
    }

    showProducts() {
        this.#products.forEach(product => {
            console.log(product.getInfo());
        });
    }

    getTotalPrice() {
        return this.#products.reduce((sum, product) => sum + product.price, 0);
    }
}

const phone = new Phone("iPhone 15", 1000, 256);
const laptop = new Laptop("MacBook Air", 1500, "M3");

const cart = new Cart();

cart.addProduct(phone);
cart.addProduct(laptop);

cart.showProducts();
console.log("Общая стоимость:", cart.getTotalPrice(), "$");