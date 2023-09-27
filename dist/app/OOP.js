"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Dog extends Animal {
    speak() {
        console.log(`${this.getName()} barks`);
    }
}
class Cat extends Animal {
    speak() {
        console.log(`${this.getName()} meows`);
    }
}
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");
dog.speak();
cat.speak();
