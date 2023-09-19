//  Khởi tạo 1 class và instance

class Person {
  public age;
  readonly id: string;
  //   Khai báo những thuộc tính của 1 người
  constructor(
    public name: string,
    age: number,
    id: string,
    private gender: boolean
  ) {
    this.name = name;
    this.age = age;
    this.id = id;
    this.gender = gender;
  }

  getId = (): string => this.id;
  getName = (): string => this.name;
  getGender = (): boolean => this.gender;

  setGender = (gender: boolean): void => {
    this.gender = gender;
  };

  setName = (name: string): void => {
    this.name = name;
  };
}

const person_1 = new Person("Viễn",30," ABC123456", true)
