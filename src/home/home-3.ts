class Car {
  private brand: string;
  private price: number;
  private color: string;
  private category: string;

  constructor(brand: string, price: number, color: string, category: string) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.category = category;
  }

  getBrand(): string {
    return this.brand;
  }

  setBrand(brand: string): void {
    this.brand = brand;
  }

  getPrice(): number {
    return this.price;
  }

  setPrice(price: number): void {
    this.price = price;
  }

  getColor(): string {
    return this.color;
  }

  setColor(color: string): void {
    this.color = color;
  }

  getCategory(): string {
    return this.category;
  }

  setCategory(category: string): void {
    this.category = category;
  }

  inputData(): void {
    this.brand = String(prompt("Nhập tên hãng xe:"));
    this.price = Number(prompt("Nhập giá xe:"));
    this.color = String(prompt("Nhập màu xe:"));
    this.category = String(prompt("Nhập loại xe:"));
  }

  displayData(): void {
    console.log(`Name: ${this.brand}`);
    console.log(`Brand: ${this.brand}`);
    console.log(`Price: ${this.price}`);
    console.log(`Color: ${this.color}`);
    console.log(`Category: ${this.category}`);
    console.log("----------------------------");
  }
}

class CarManager {
  private cars: Car[] = [];

  createCar(car: Car): void {
    this.cars.push(car);
  }

  updateCar(id: number, updatedCar: Car): void {
    const index = id - 1;
    if (index >= 0 && index < this.cars.length) {
      this.cars[index] = updatedCar;
    } else {
      console.log(`Không tìm thấy ô tô có ID ${id}`);
    }
  }

  showAllCars(): void {
    console.log("#\tName\tBrand\tPrice\tColor\tCategory");
    this.cars.forEach((car, index) => {
      console.log(
        `${
          index + 1
        }\t${car.getBrand()}\t${car.getBrand()}\t${car.getPrice()}\t${car.getColor()}\t${car.getCategory()}`
      );
    });
  }

  deleteCar(id: number): void {
    const index = id - 1;
    if (index >= 0 && index < this.cars.length) {
      this.cars.splice(index, 1);
      console.log(`Xoá ô tô có ID ${id} thành công.`);
    } else {
      console.log(`Không tìm thấy ô tô có ID ${id}`);
    }
  }
}

const carManager = new CarManager();

function mainMenu() {
  console.log("Chọn tùy chọn:");
  console.log("R - Hiển thị danh sách ô tô");
  console.log("C - Thêm mới ô tô");
  console.log("U - Cập nhật thông tin ô tô theo ID");
  console.log("D - Xoá ô tô theo ID");
  console.log("E - Thoát");

  const choice = String(prompt("Nhập lựa chọn của bạn:")).toUpperCase();

  switch (choice) {
    case "R":
      carManager.showAllCars();
      break;
    case "C":
      const car = new Car("", 0, "", "");
      car.inputData();
      carManager.createCar(car);
      console.log("Ô tô đã được thêm mới.");
      break;
    case "U":
      const carId = Number(prompt("Nhập ID ô tô cần cập nhật:"));
      const updatedCar = new Car("", 0, "", "");
      updatedCar.inputData();
      carManager.updateCar(carId, updatedCar);
      break;
    case "D":
      const deleteCarId = Number(prompt("Nhập ID ô tô cần xoá:"));
      carManager.deleteCar(deleteCarId);
      break;
    case "E":
      console.log("Kết thúc chương trình.");
      break;
    default:
      console.log("Lựa chọn không hợp lệ.");
  }

  if (choice !== "E") {
    mainMenu();
  }
}



const car1 = new Car("Tesla Model 3", 142800, "White", "SUV");
const car2 = new Car("Audi A8", 184870, "Black", "SUV");
const car3 = new Car("Vinfast Lux 2.0", 21490, "Gray", "SUV");

carManager.createCar(car1);
carManager.createCar(car2);
carManager.createCar(car3);

mainMenu();
