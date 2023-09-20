// Lớp cơ sở Animal
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeSound() {
    console.log(`${this.name} kêu.`);
  }
}

// Lớp con Bird kế thừa từ Animal
class Bird extends Animal {
  constructor(name: string) {
    super(name);
  }
  makeSound() {
    console.log(`${this.name} là chim và kêu "Chíp chíp".`);
  }
  fly() {
    console.log(`${this.name} có thể bay.`);
  }
}

// Lớp con Dog kế thừa từ Animal
class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  makeSound() {
    console.log(`${this.name} là chó và kêu "Gâu gâu".`);
  }
  run() {
    console.log(`${this.name} có thể chạy.`);
  }
}

// Hàm sử dụng đa hình
function animalInfo(animal: Animal) {
  console.log(`Thông tin về ${animal.name}:`);
  animal.makeSound();
}

// Tạo các động vật và thể hiện đa hình
const bird = new Bird("Chim Đại Bàng");
const dog = new Dog("Chó Husky");

animalInfo(bird);
animalInfo(dog);

bird.fly(); // Chỉ có Bird mới có phương thức fly
dog.run();  // Chỉ có Dog mới có phương thức run