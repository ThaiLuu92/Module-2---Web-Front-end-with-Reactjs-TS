"use strict";
class Car {
    constructor(brand, name, price, color, category) {
        this.brand = brand;
        this.name = name;
        this.price = price;
        this.color = color;
        this.category = category;
    }
    getBrand() {
        return this.brand;
    }
    setBrand(brand) {
        this.brand = brand;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    getCategory() {
        return this.category;
    }
    setCategory(category) {
        this.category = category;
    }
    inputData() {
        this.brand = String(prompt("Nhập tên hãng xe:"));
        this.name = String(prompt("Nhập tên xe:"));
        this.price = Number(prompt("Nhập giá xe:"));
        this.color = String(prompt("Nhập màu xe:"));
        this.category = String(prompt("Nhập loại xe:"));
    }
    displayData() {
        console.log(`Name: ${this.name}`);
        console.log(`Brand: ${this.brand}`);
        console.log(`Price: ${this.price}`);
        console.log(`Color: ${this.color}`);
        console.log(`Category: ${this.category}`);
        console.log("----------------------------");
    }
}
class CarManager {
    constructor() {
        this.cars = [];
    }
    createCar(car) {
        this.cars.push(car);
    }
    updateCar(id, updatedCar) {
        const index = id - 1;
        if (index >= 0 && index < this.cars.length) {
            this.cars[index] = updatedCar;
        }
        else {
            console.log(`Không tìm thấy ô tô có ID ${id}`);
        }
    }
    showAllCars() {
        console.log("#\tName\tBrand\tPrice\tColor\tCategory");
        this.cars.forEach((car, index) => {
            console.log(`${index + 1}\t${car.getName()}\t${car.getBrand()}\t${car.getPrice()}\t${car.getColor()}\t${car.getCategory()}`);
        });
    }
    deleteCar(id) {
        const index = id - 1;
        if (index >= 0 && index < this.cars.length) {
            this.cars.splice(index, 1);
            console.log(`Xoá ô tô có ID ${id} thành công.`);
        }
        else {
            console.log(`Không tìm thấy ô tô có ID ${id}`);
        }
    }
}
const carManager = new CarManager();
function mainMenuCar() {
    const choice = String(prompt("Nhập lựa chọn của bạn (R:Xem/ C:Thêm/ U:Sửa/ D: Xóa/ E: Thoát):")).toUpperCase();
    switch (choice) {
        case "R":
            carManager.showAllCars();
            break;
        case "C":
            const car = new Car("", "", 0, "", "");
            car.inputData();
            carManager.createCar(car);
            console.log("Ô tô đã được thêm mới.");
            break;
        case "U":
            const carId = Number(prompt("Nhập ID ô tô cần cập nhật:"));
            const updatedCar = new Car("", "", 0, "", "");
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
        mainMenuCar();
    }
}
const car1 = new Car("Tesla", "Model 3", 142800, "White", "SUV");
const car2 = new Car("Audi", "Audi A8", 184870, "Black", "SUV");
const car3 = new Car("Vinfast", "Vinfast Lux 2.0", 21490, "Gray", "SUV");
carManager.createCar(car1);
carManager.createCar(car2);
carManager.createCar(car3);
mainMenuCar();
