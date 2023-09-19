// Tạo 1 class Student
class Student {
  // Trường id lưu trữ mã số của học sinh
  id: number;

  // Trường name lưu trữ tên của học sinh
  name: string;

  // Trường friends là một mảng lưu trữ danh sách bạn bè của học sinh
  friends: string[];

  // Constructor là một phương thức đặc biệt, được gọi khi tạo một đối tượng Student mới
  constructor(id: number = Date.now(), name: string) {
    // Gán giá trị id và name từ tham số đầu vào cho trường tương ứng của đối tượng
    this.id = id;
    this.name = name;

    // Khởi tạo friends là một mảng rỗng
    this.friends = [];
  }

  addFriends(friendName: string) {
    this.friends.push(friendName);
  }

  readFriends() {
    if (this.friends.length === 0) {
      console.log(`${this.name} không có bạn bè`);
    } else {
      console.log(`${this.name} có bạn bè sau:`);
      this.friends.forEach((friend, index) => {
        console.log(`${index + 1}. ${friend}`);
      });
    }
  }
}

// Sử dụng lớp Student

// Tạo đối tượng student1 với id là 1 và tên là "Alice"
const student1 = new Student(1, "Viễn");
console.log(student1);

// Tạo đối tượng student2 với id là 2 và tên là "Bob"
const student2 = new Student(2, "Quyết");
console.log(student2);

// Thêm bạn bè cho student1 và student2
student1.addFriends("Carol");
student1.addFriends("David");
student2.addFriends("Eve");

// Đọc danh sách bạn bè của student1 và student2
student1.readFriends();
student2.readFriends();
