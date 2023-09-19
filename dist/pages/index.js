"use strict";
class Person {
    constructor(name, age, id, gender) {
        this.name = name;
        this.gender = gender;
        this.getId = () => this.id;
        this.getName = () => this.name;
        this.getGender = () => this.gender;
        this.setGender = (gender) => {
            this.gender = gender;
        };
        this.setName = (name) => {
            this.name = name;
        };
        this.name = name;
        this.age = age;
        this.id = id;
        this.gender = gender;
    }
}
const person_1 = new Person("Viễn", 30, " ABC123456", true);
