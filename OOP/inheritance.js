// Parent
class Animal {
    constructor(name) {
        this.name = name;
    }
}

// Child
class Dog extends Animal {
    bark() {
        console.log(`${this.name} barks: Woof!`);
    }
}

const dog = new Dog('Rex');
dog.bark();