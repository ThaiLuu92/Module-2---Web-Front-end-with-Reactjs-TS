"use strict";
class Student {
    constructor(id = Date.now(), name) {
        this.id = id;
        this.name = name;
        this.friends = [];
    }
    addFriends(friendName) {
        this.friends.push(friendName);
    }
    readFriends() {
        if (this.friends.length === 0) {
            console.log(`${this.name} không có bạn bè`);
        }
        else {
            console.log(`${this.name} có bạn bè sau:`);
            this.friends.forEach((friend, index) => {
                console.log(`${index + 1}. ${friend}`);
            });
        }
    }
}
const student1 = new Student(1, "Viễn");
console.log(student1);
const student2 = new Student(2, "Quyết");
console.log(student2);
student1.addFriends("Carol");
student1.addFriends("David");
student2.addFriends("Eve");
student1.readFriends();
student2.readFriends();
