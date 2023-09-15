const number = [1, 2, 3, 4, 5];
// Sử dụng map để tạo 1 array mới chứa bình phương của các số trong mảng numbers
const squareNumbers = number.map((x) => x * x);
// nếu đúng function bình phương
//const squareNumbers = numbers.map(function(x) {
//  return x * x;
//});
console.log(squareNumbers); // Output : [1, 4, 9, 16, 25]


const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };

const combinedObject = { ...obj1, ...obj2 };
console.log(combinedObject); // Output : { x: 1, x: 2, x: 3 }

// Ví dụ: Hàm tính tổng các số được truyền vào 
function tinhTong(...cacSo) {
  let tong = 0;
  for (let so of cacSo) {
    tong += so;
}
  return tong;
}

// sử dụng Rest parameter để tính tổng của các số
let ketQua = tinhTong(1, 2, 3, 4, 5);
console.log(ketQua); // Kết quả: 15

ketQua = tinhTong(19, 20, 30); 
console.log(ketQua); // Kết quả: 69


// Sử dụng for thường
function tinhTong2(...cacSo) {
    let tong = 0; 
    for (let index = 0; index < cacSo.length; index++) {
      tong += cacSo[index];
    }
    return tong;
}

let ketQua2 = tinhTong2(1, 2, 3, 4, 5);
console.log("Kết quả 2:",ketQua2); // Kết quả: 15

ketQua2 = tinhTong2(19, 20, 30); 
console.log("Kết quả 2:",ketQua2); // Kết quả: 69

// Sử dụng for each
function tinhTong3(...cacSo) {
    let tong = 0
    cacSo.forEach((so) => {
        tong += so;
    });
    return tong;
}

let ketQua3 = tinhTong3(1, 2, 3, 4, 5);
console.log("Kết quả 3:",ketQua3); // Kết quả: 15

ketQua3 = tinhTong3(19, 20, 30); 
console.log("Kết quả 3:",ketQua3); // Kết quả: 69


// Ví dụ: Hàm chào mừng với giá trị mặc định cho tham số name 
function chaoMung (name = "Bạn") {
  return `Xin chào, ${name}!`;
}

// sử dụng Default Parameter khi không truyền giá trị cho tham số name
let ketQua4 = chaoMung();
console.log(ketQua4); // Kết quả: "Xin chào, Bạn!"

// sử dụng tham số name với giá trị được truyền vào 
let ketQua5 = chaoMung("John");
console.log(ketQua5); // Kết quả: "Xin chào, John!"


// Exercise 01

const users = [
  { id: 1, first_name: "John", last_name: "Doe" },
  { id: 2, first_name: "Jane", last_name: "Smith" },
  { id: 3, first_name: "Mike", last_name: "Johnson" },
];

const namesArray = [];

users.forEach((user) => {
  const { first_name, last_name } = user;
  namesArray.push({ first_name, last_name });
});

console.log("Exercise 01",namesArray);


// Exercise 02

function getUsersWithCondition(users) {
  // Sử dụng phương thức filter để lọc các user thỏa mãn điều kiện
  const filteredUsers = users.filter((user) => {
    // Kiểm tra giới tính là nam và tuổi nhỏ hơn 40
    return user.gender === "male" && user.age < 40;
  });

  // Trả về mảng các user thỏa mãn điều kiện
  return filteredUsers;
}

// Ví dụ sử dụng hàm với mảng users
const usersList = [
  { id: 1, name: "John", gender: "male", age: 35 },
  { id: 2, name: "Jane", gender: "female", age: 42 },
  { id: 3, name: "Bob", gender: "male", age: 28 },
  { id: 4, name: "Alice", gender: "female", age: 38 },
];

const filteredUsers = getUsersWithCondition(usersList);
console.log("Exercise 02", filteredUsers);

// Exercise 03
function getFullNames(users) {
  // Sử dụng map để biến đổi mảng users thành mảng chứa tên đầy đủ
  const fullNames = users.map((user) => {
    return `${user.first_name} ${user.last_name}`;
  });

  return fullNames;
}

// Ví dụ sử dụng hàm với mảng users
const usersFullname = [
  { first_name: "John", last_name: "Doe" },
  { first_name: "Jane", last_name: "Smith" },
  { first_name: "Bob", last_name: "Johnson" },
];

const fullNames = getFullNames(usersFullname);
console.log("Exercise 03", fullNames);

// Exercise 04

function convertToCamelCase(users) {
  // Sử dụng map để biến đổi mảng users thành mảng mới với key viết dưới dạng camelCase
  const usersInCamelCase = users.map((user) => {
    const camelCaseUser = {};

    // Duyệt qua các key trong user và chuyển đổi chúng sang dạng camelCase
    for (const key in user) {
      if (Object.hasOwnProperty.call(user, key)) {
        const camelCaseKey = key.replace(/_([a-z])/g, (_, letter) =>
          letter.toUpperCase()
        );
        camelCaseUser[camelCaseKey] = user[key];
      }
    }

    return camelCaseUser;
  });

  return usersInCamelCase;
}

// Ví dụ sử dụng hàm với mảng users
const usersCC = [
  { first_name: "John", last_name: "Doe", birth_year: 1990 },
  { first_name: "Jane", last_name: "Smith", birth_year: 1985 },
  { first_name: "Bob", last_name: "Johnson", birth_year: 1995 },
];

const usersInCamelCase = convertToCamelCase(usersCC);
console.log("Exercise 04", usersInCamelCase);

// Đoạn mã JavaScript trên là một vòng lặp for...in được sử dụng để chuyển đổi các khóa (keys) trong một đối tượng user sang dạng camelCase và sao chép giá trị tương ứng từ khóa gốc sang một đối tượng mới có tên là camelCaseUser. Dưới đây là sự giải thích chi tiết cho đoạn mã:

// for (const key in user): Vòng lặp for...in được sử dụng để lặp qua tất cả các khóa trong đối tượng user. Mỗi lần lặp, biến key sẽ lưu giữ tên của khóa hiện tại.

// if (Object.hasOwnProperty.call(user, key)): Điều kiện kiểm tra xem khóa này thuộc về đối tượng user. Việc sử dụng Object.hasOwnProperty.call giúp đảm bảo rằng chúng ta chỉ xử lý các khóa mà đối tượng user thực sự có, không bao gồm các khóa được thừa kế từ prototype.

// const camelCaseKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase()): Đoạn mã này sử dụng phương thức replace để chuyển đổi khóa gốc sang dạng camelCase. Cụ thể:

// /.../g là biểu thức chính quy (regular expression) được sử dụng để tìm kiếm và thay thế các chuỗi trong biến key.
// /_([a-z])/g là một biểu thức chính quy khớp với dấu gạch dưới _ và một ký tự thường từ a đến z. Ký tự trong ngoặc tròn ([a-z]) được ghi nhớ để sử dụng sau này.
// (_, letter) => letter.toUpperCase() là một hàm gọi lại (callback function) được sử dụng để thay thế các chuỗi khớp bằng chữ cái thường (được trả về bởi letter.toUpperCase()) để tạo dạng camelCase. Biến _ đại diện cho toàn bộ chuỗi khớp, và letter đại diện cho ký tự thường được tìm thấy trong khớp.
// camelCaseUser[camelCaseKey] = user[key];: Sau khi chuyển đổi khóa sang dạng camelCase, giá trị tương ứng từ khóa gốc trong đối tượng user được sao chép sang đối tượng camelCaseUser với khóa mới là camelCaseKey.

// Kết quả cuối cùng là một đối tượng camelCaseUser chứa các khóa được đổi sang dạng camelCase và giữ nguyên giá trị tương ứng của chúng từ đối tượng user

// Exercise 05

function tinhTrungBinhTuoi(users) {

  let tongTuoi = 0;
  for (const user of users) {
    tongTuoi += user.age;
  }

  const trungBinhTuoi = tongTuoi / users.length;
  return trungBinhTuoi;
}

// Sử dụng hàm với mảng users
const users5 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

const trungBinhTuoi = tinhTrungBinhTuoi(users5);
console.log(`Exercise 05 :Trung bình tuổi của các user là: ${trungBinhTuoi}`);
//Trong ví dụ này, chúng ta sử dụng một vòng lặp for...of để tính tổng tuổi của các user trong mảng. Sau đó, chúng ta tính trung bình tuổi bằng cách chia tổng tuổi cho số lượng user trong mảng. Kết quả trung bình tuổi của các user trong mảng được in ra màn hình.


// Exercise 06

// Mảng chứa các đối tượng user
const users601 = [
  { first_name: "John", last_name: "Doe" },
  { first_name: "Alice", last_name: "Johnson" },
  { first_name: "Bob", last_name: "Smith" },
];

// Hàm trả về toàn bộ tên đầy đủ của các user trong mảng
function getFullNames0601(users) {
  // Sử dụng reduce để kết hợp các tên đầy đủ
  const fullNames = users.reduce((accumulator, user) => {
    const fullName = `${user.first_name} ${user.last_name}`;
    accumulator.push(fullName); // Thêm tên đầy đủ vào mảng kết quả
    return accumulator;
  }, []);

  return fullNames;
}

// Gọi hàm và lấy kết quả
const fullNames0601 = getFullNames0601(users601);
console.log("Exercise 0601", fullNames0601);






// Exercise 0602
const users0602 = [
  { name: 'John', gender: 'male', age: 35 },
  { name: 'Alice', gender: 'female', age: 42 },
  { name: 'Bob', gender: 'male', age: 28 },
  { name: 'Eve', gender: 'female', age: 38 },
];

const filteredUsers0602 = users0602.reduce((accumulator, user) => {
  if (user.gender === "male" && user.age < 40) {
    accumulator.push(user);
  }
  return accumulator;
}, []);

console.log("Exercise 0602",filteredUsers0602);
// Kết quả: [ { name: 'John', gender: 'male', age: 35 }, { name: 'Bob', gender: 'male', age: 28 } ]





// Exercise 07
function sortUsersByFirstName(users) {
  // Sử dụng phương thức sort để sắp xếp theo first_name
  const sortedUsers = users.slice(); // Tạo một bản sao của mảng users để không làm thay đổi mảng gốc
  sortedUsers.sort((a, b) => {
    // So sánh theo first_name
    const firstNameA = a.first_name.toLowerCase(); // Chuyển first_name về chữ thường để so sánh không phân biệt hoa thường
    const firstNameB = b.first_name.toLowerCase();
    if (firstNameA < firstNameB) {
      return -1;
    }
    if (firstNameA > firstNameB) {
      return 1;
    }
    return 0;
  });

  return sortedUsers;
}

// Mảng người dùng ví dụ
const users07 = [
  { first_name: "John", last_name: "Doe" },
  { first_name: "Alice", last_name: "Smith" },
  { first_name: "Bob", last_name: "Johnson" },
];

const sortedUsers = sortUsersByFirstName(users07);
console.log("Exercise 07",sortedUsers);

