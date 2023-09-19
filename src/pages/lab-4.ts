// class Student {
//   private studentID: number;
//   private studentName: string;
//   private studentAge: number;
//   private studentGender: string;
//   private studentAddress: string;
//   private studentPhone: string;

//   constructor(
//     id: number,
//     name: string,
//     age: number,
//     gender: string,
//     address: string,
//     phone: string
//   ) {
//     this.studentID = id;
//     this.studentName = name;
//     this.studentAge = age;
//     this.studentGender = gender;
//     this.studentAddress = address;
//     this.studentPhone = phone;
//   }

//   getStudentID(): number {
//     return this.studentID;
//   }

//   getStudentName(): string {
//     return this.studentName;
//   }

//   getStudentAge(): number {
//     return this.studentAge;
//   }

//   getStudentGender(): string {
//     return this.studentGender;
//   }

//   getStudentAddress(): string {
//     return this.studentAddress;
//   }

//   getStudentPhone(): string {
//     return this.studentPhone;
//   }

//   setStudentName(name: string): void {
//     this.studentName = name;
//   }

//   setStudentAge(age: number): void {
//     this.studentAge = age;
//   }

//   setStudentGender(gender: string): void {
//     this.studentGender = gender;
//   }

//   setStudentAddress(address: string): void {
//     this.studentAddress = address;
//   }

//   setStudentPhone(phone: string): void {
//     this.studentPhone = phone;
//   }

//   inputData(): void {
//     const readlineSync = require("readline-sync");
//     this.studentName = readlineSync.question("Nhập tên học sinh: ");
//     this.studentAge = parseInt(readlineSync.question("Nhập tuổi học sinh: "));
//     this.studentGender = readlineSync.question("Nhập giới tính học sinh: ");
//     this.studentAddress = readlineSync.question("Nhập địa chỉ học sinh: ");
//     this.studentPhone = readlineSync.question("Nhập số điện thoại học sinh: ");
//   }

//   displayData(): void {
//     console.log(`Mã học sinh: ${this.getStudentID()}`);
//     console.log(`Tên học sinh: ${this.getStudentName()}`);
//     console.log(`Tuổi học sinh: ${this.getStudentAge()}`);
//     console.log(`Giới tính học sinh: ${this.getStudentGender()}`);
//     console.log(`Địa chỉ học sinh: ${this.getStudentAddress()}`);
//     console.log(`Số điện thoại học sinh: ${this.getStudentPhone()}`);
//   }
// }

// class Main {
//   private students: Student[] = [];

//   run(): void {
//     const readlineSync = require("readline-sync");
//     while (true) {
//       console.log("Chọn chức năng:");
//       console.log("1. Hiển thị danh sách học sinh");
//       console.log("2. Thêm học sinh mới");
//       console.log("3. Sửa thông tin học sinh");
//       console.log("4. Xóa học sinh");
//       console.log("5. Thoát");

//       const choice = readlineSync.question("Nhập lựa chọn: ");
//       switch (choice) {
//         case "1":
//           this.displayStudents();
//           break;
//         case "2":
//           this.addStudent();
//           break;
//         case "3":
//           this.editStudent();
//           break;
//         case "4":
//           this.deleteStudent();
//           break;
//         case "5":
//           return;
//         default:
//           console.log("Chọn đúng chức năng.");
//       }
//     }
//   }

//   displayStudents(): void {
//     if (this.students.length === 0) {
//       console.log("Danh sách học sinh trống.");
//       return;
//     }
//     console.log("Danh sách học sinh:");
//     this.students.forEach((student) => {
//       student.displayData();
//       console.log("---------------");
//     });
//   }

//   addStudent(): void {
//     const id = this.students.length + 1;
//     const student = new Student(id, "", 0, "", "", "");
//     student.inputData();
//     this.students.push(student);
//     console.log("Thêm học sinh thành công.");
//   }

//   editStudent(): void {
//     const readlineSync = require("readline-sync");
//     const id = parseInt(readlineSync.question("Nhập mã học sinh cần sửa: "));
//     const student = this.students.find((s) => s.getStudentID() === id);
//     if (student) {
//       student.inputData();
//       console.log("Sửa thông tin học sinh thành công.");
//     } else {
//       console.log("Không tìm thấy học sinh có mã này.");
//     }
//   }

//   deleteStudent(): void {
//     const readlineSync = require("readline-sync");
//     const id = parseInt(readlineSync.question("Nhập mã học sinh cần xóa: "));
//     const index = this.students.findIndex((s) => s.getStudentID() === id);
//     if (index !== -1) {
//       this.students.splice(index, 1);
//       console.log("Xóa học sinh thành công.");
//     } else {
//       console.log("Không tìm thấy học sinh có mã này.");
//     }
//   }
// }

// const main = new Main();
// main.run();
