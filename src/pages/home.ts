// Định nghĩa lớp Employee để lưu thông tin nhân viên
class Employee {
  constructor(
    public employeeId: number,
    public employeeName: string,
    public age: number,
    public gen: string,
    public rate: number,
    public salary: number
  ) {}

  // Phương thức tính lương của nhân viên
  calSalary(): void {
    this.salary = this.rate * 1300000; // Lương = Hệ số lương * 1.300.000
  }
}

// Mảng để lưu thông tin các nhân viên
const employees: Employee[] = [];

// Lớp Main chứa phương thức main()
class Main {
  static main(): void {
    // Khởi tạo và thêm nhân viên vào mảng
    const employee1 = new Employee(1, "Nguyen Van A", 30, "Nam", 1.5, 0);
    const employee2 = new Employee(2, "Tran Thi B", 25, "Nữ", 1.2, 0);
    employees.push(employee1, employee2);

    // Tính lương cho nhân viên
    employees.forEach((employee) => {
      employee.calSalary();
    });

    // Hiển thị thông tin nhân viên
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

// Gọi phương thức main() từ lớp Main để chạy chương trình
Main.main();
