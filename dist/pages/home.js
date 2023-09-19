"use strict";
class Employee {
    constructor(employeeId, employeeName, age, gen, rate, salary) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.age = age;
        this.gen = gen;
        this.rate = rate;
        this.salary = salary;
    }
    calSalary() {
        this.salary = this.rate * 1300000;
    }
}
const employees = [];
class Main {
    static main() {
        const employee1 = new Employee(1, "Nguyen Van A", 30, "Nam", 1.5, 0);
        const employee2 = new Employee(2, "Tran Thi B", 25, "Nữ", 1.2, 0);
        employees.push(employee1, employee2);
        employees.forEach((employee) => {
            employee.calSalary();
        });
        employees.forEach((employee, index) => {
            console.log(`Nhân viên ${index + 1}:`);
            console.log(`Mã nhân viên: ${employee.employeeId}`);
            console.log(`Tên: ${employee.employeeName}`);
            console.log(`Tuổi: ${employee.age}`);
            console.log(`Giới tính: ${employee.gen}`);
            console.log(`Hệ số lương: ${employee.rate}`);
            console.log(`Lương: ${employee.salary}`);
            console.log("=============================");
        });
    }
}
Main.main();
