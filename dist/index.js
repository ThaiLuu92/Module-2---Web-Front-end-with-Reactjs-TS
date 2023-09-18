"use strict";
// Tự gán type
let number = 20;
// Gán type
let username = "John";
// Khai báo 1 function + return 1 giá trị
function sum(a, b) {
    return a + b;
}
const testSum = sum(3, 5);
console.log("Test", testSum);
const studenInfor = {
    name: "Dương",
    age: 20,
    address: "Hội An",
    gender: "Nam",
    cardId: 123456,
};
function rectangularArea(a, b) {
    return a * b;
}
const rectangularAreaE = rectangularArea(5, 6);
console.log(rectangularAreaE);
const listProduct = [
    {
        type: "Sedan hạng C",
        brand: "Toyota",
        model: "Camry",
        yearOfOpening: 2023,
    },
    {
        type: "Sedan hạng C",
        brand: "Honda",
        model: "Accord",
        yearOfOpening: 2022,
    },
    {
        type: "Sedan hạng B",
        brand: "Hyundai",
        model: "Accent",
        yearOfOpening: 2023,
    },
    {
        type: "Sedan hạng B",
        brand: "Mazda",
        model: "CX3",
        yearOfOpening: 2023,
    },
];
listProduct.push({
    type: "Sedan hạng B",
    brand: "Vin",
    model: "VF8",
    yearOfOpening: 2023,
});
console.log(listProduct);
