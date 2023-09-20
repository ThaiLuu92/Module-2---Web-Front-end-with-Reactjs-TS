"use strict";
class ProductLab {
    constructor(id, name, price, quantily) {
        this.getId = () => {
            return this.id;
        };
        this.getName = () => {
            return this.name;
        };
        this.getPrice = () => {
            return this.price;
        };
        this.getQuantily = () => {
            return this.quantily;
        };
        this.setId = (id) => {
            this.id = id;
        };
        this.setName = (name) => {
            this.name = name;
        };
        this.setPrice = (price) => {
            this.price = price;
        };
        this.setQuantily = (quantily) => {
            this.quantily = quantily;
        };
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantily = quantily;
    }
    inputData() {
        const id = Number(prompt("Nhập ID sản phẩm:"));
        const name = prompt("Nhập tên sản phẩm:");
        const price = Number(prompt("Nhập giá sản phẩm:"));
        const quantily = Number(prompt("Nhập số lượng sản phẩm:"));
        if (id) {
            this.id = id;
        }
        if (name) {
            this.name = name;
        }
        if (price) {
            this.price = price;
        }
        if (quantily) {
            this.quantily = quantily;
        }
    }
    get displayData() {
        return `ID: ${this.getName} Name: ${this.getName} Price: ${this.getPrice} Quantity: ${this.getQuantily} `;
    }
}
class BakeryLab {
    constructor() {
        this.products = [];
    }
    createProduct() {
        const product = new ProductLab(0, "", 0, 0);
        product.inputData();
        this.products.push(product);
    }
    updateProduct(index) {
        const product = this.products[index];
        product.inputData();
        this.products.splice(index, 1, product);
    }
    showAllProduct() {
        this.products.forEach((product) => {
            console.log(product.displayData);
        });
    }
    deleteProduct(index) {
        this.products.splice(index, 1);
    }
}
class Cart {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
    updateCart(index, quantity) {
        const cart = this.cart[index];
    }
    showAllCart() {
        this.cart.forEach((product) => {
            console.log(product.displayData);
        });
    }
    deleteCart(index) {
        this.cart.splice(index, 1);
    }
}
const bakery = new BakeryLab();
const cart = new Cart();
const product1 = new ProductLab(1, "Chocolate", 45000, 100);
const product2 = new ProductLab(2, "Cookies", 90000, 100);
