class User {
    constructor(name) {
        // if (new.target === User) {
        //     throw new Error("Нельзя создать User");
        // }
        this.name = name;
    }

    getInfo() {
        throw new Error("Метод должен быть переопределён");
    }
}

// Наследование
class Student extends User {
    constructor(name, grade) {
        super(name);
        this.grade = grade;
    }

    // Полиморфизм
    getInfo() {
        return (`Студент: ${this.name}, курс ${this.grade}`);
    }
}

class Teacher extends User {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }

    // Полиморфизм
    getInfo() {
        return (`Преподаватель: ${this.name}, предмет ${this.subject}`);
    }
}

// Инкапсуляция
class University {
    #users = [];

    addUser(user) {
        this.#users.push(user);
    }

    showUsers() {
        this.#users.forEach(user => {
            console.log(user.getInfo());
        });
    }
}

const university = new University();

university.addUser(new Student("Иван", 2));
university.addUser(new Teacher("Анна", "JavaScript"));
// university.addUser(new User());

university.showUsers();