"use strict";
class Student {
    constructor(studentId, studentName, sex, className, age, address) {
        this.studentId = studentId;
        this.studentName = studentName;
        this.sex = sex;
        this.className = className;
        this.age = age;
        this.address = address;
    }
    // Getter and Setter methods
    getStudentId() {
        return this.studentId;
    }
    setStudentId(studentId) {
        this.studentId = studentId;
    }
    getStudentName() {
        return this.studentName;
    }
    setStudentName(studentName) {
        this.studentName = studentName;
    }
    getSex() {
        return this.sex;
    }
    setSex(sex) {
        this.sex = sex;
    }
    getClassName() {
        return this.className;
    }
    setClassName(className) {
        this.className = className;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
    getAddress() {
        return this.address;
    }
    setAddress(address) {
        this.address = address;
    }
    // Input student data
    inputData() {
        this.studentId = Number(prompt("Nhập mã sinh viên:"));
        this.studentName = String(prompt("Nhập tên sinh viên:"));
        this.sex = prompt("Nhập giới tính (Nam/Nữ):") === "Nam";
        this.className = String(prompt("Nhập tên lớp:"));
        this.age = Number(prompt("Nhập tuổi:"));
        this.address = String(prompt("Nhập địa chỉ:"));
    }
    // Display student data
    displayData() {
        console.log("Thông tin sinh viên:");
        console.log(`Mã sinh viên: ${this.studentId}`);
        console.log(`Tên sinh viên: ${this.studentName}`);
        console.log(`Giới tính: ${this.sex ? "Nam" : "Nữ"}`);
        console.log(`Lớp: ${this.className}`);
        console.log(`Tuổi: ${this.age}`);
        console.log(`Địa chỉ: ${this.address}`);
        console.log("-----------------------");
    }
}
class StudentManager {
    constructor() {
        this.students = [];
    }
    // Thêm mới sinh viên
    createStudent(student) {
        this.students.push(student);
    }
    // Cập nhật thông tin sinh viên theo id
    updateStudent(id, updatedStudent) {
        const index = this.students.findIndex((student) => student.getStudentId() === id);
        if (index !== -1) {
            this.students[index] = updatedStudent;
        }
    }
    // Hiển thị danh sách sinh viên
    showAllStudents() {
        this.students.forEach((student) => {
            student.displayData();
        });
    }
    // Xóa sinh viên theo id
    deleteStudent(id) {
        const index = this.students.findIndex((student) => student.getStudentId() === id);
        if (index !== -1) {
            this.students.splice(index, 1);
        }
    }
}
const studentManager = new StudentManager();
function mainMenuStudent() {
    const choice = String(prompt("Nhập lựa chọn của bạn: C:Tạo/R: Hiển thị/U: Thêm/D: Xóa và thoát là E")).toUpperCase();
    switch (choice) {
        case "R":
            studentManager.showAllStudents();
            break;
        case "C":
            const student = new Student(1, "Viễn", true, "RA-DN", 18, "Đà Nẵng");
            student.inputData();
            studentManager.createStudent(student);
            console.log("Sinh viên đã được thêm mới.");
            break;
        case "U":
            const studentId = Number(prompt("Nhập mã sinh viên cần cập nhật:"));
            const updatedStudent = new Student(1, "Viễn", true, "RA-DN", 18, "Đà Nẵng");
            updatedStudent.inputData();
            studentManager.updateStudent(studentId, updatedStudent);
            console.log(`Thông tin sinh viên có mã ${studentId} đã được cập nhật.`);
            break;
        case "D":
            const deleteStudentId = Number(prompt("Nhập mã sinh viên cần xóa:"));
            studentManager.deleteStudent(deleteStudentId);
            console.log(`Sinh viên có mã ${deleteStudentId} đã được xóa.`);
            break;
        case "E":
            console.log("Kết thúc chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ.");
    }
    if (choice !== "E") {
        mainMenuStudent();
    }
}
const student1 = new Student(1, "Viễn", true, "RA-DN", 18, "Đà Nẵng");
const student2 = new Student(2, "Quyết", true, "RA-DN", 22, "Quảng Bình");
const student3 = new Student(3, "Hương", false, "RA-DN", 18, "Quảng Trị");
studentManager.createStudent(student1);
studentManager.createStudent(student2);
studentManager.createStudent(student3);
mainMenuStudent();
