abstract class Animal {
  constructor(private name: string) {}

  abstract speak(): void;

  getName(): string {
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
