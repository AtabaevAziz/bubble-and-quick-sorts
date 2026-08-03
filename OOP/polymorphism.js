class Cat {
    makeSound() { console.log('Meow'); }
}

class Dog {
    makeSound() { console.log('Woof'); }
}

function activateSound(animal) {
    animal.makeSound();
}

activateSound(new Cat());
activateSound(new Dog());