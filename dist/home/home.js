"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    speak() {
        console.log(`${this.name} barks loudly.`);
    }
    fetch() {
        console.log(`${this.name} fetches a ball.`);
    }
}
class Cat extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }
    speak() {
        console.log(`${this.name} meows softly.`);
    }
    climb() {
        console.log(`${this.name} climbs a tree.`);
    }
}
const dog = new Dog("Buddy", "Golden Retriever");
const cat = new Cat("Whiskers", "Gray");
dog.speak(); // Output: "Buddy barks loudly."
dog.fetch(); // Output: "Buddy fetches a ball."
cat.speak(); // Output: "Whiskers meows softly."
cat.climb(); // Output: "Whiskers climbs a tree."
