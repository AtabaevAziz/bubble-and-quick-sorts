// Абстракция
class Animal {
    constructor(name) {
        this.name = name;
    }

    // Каждый потомок должен реализовать этот метод
    speak() {
        throw new Error("Метод должен быть переопределён");
    }
}

// Наследование
class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    // Полиморфизм
    speak() {
        console.log(`${this.name} говорит: Гав!`);
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }

    // Полиморфизм
    speak() {
        console.log(`${this.name} говорит: Мяу!`);
    }
}

// Инкапсуляция
class Person {
    #age; // приватное поле

    constructor(name, age) {
        this.name = name;
        this.#age = age;
    }

    getAge() {
        return this.#age;
    }
}

const dog = new Dog("Шарик");
const cat = new Cat("Мурка");

dog.speak(); // Шарик говорит: Гав!
cat.speak(); // Мурка говорит: Мяу!

const person = new Person("Иван", 15);
console.log(person.getAge()); // 15
// console.log(person.#age); // Ошибка