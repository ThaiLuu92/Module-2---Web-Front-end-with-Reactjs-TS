"use strict";
// class Product {
//   private id: number;
//   private name: string;
//   private price: number;
//   private quantity: number;
//   constructor(id: number, name: string, price: number, quantity: number) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;
//   }
//   getId(): number {
//     return this.id;
//   }
//   getName(): string {
//     return this.name;
//   }
//   getPrice(): number {
//     return this.price;
//   }
//   getQuantity(): number {
//     return this.quantity;
//   }
//   inputData(): void {
//     this.id = Number(prompt("Nhập ID sản phẩm:"));
//     this.name = String(prompt("Nhập tên sản phẩm:"));
//     this.price = Number(prompt("Nhập giá sản phẩm:"));
//     this.quantity = Number(prompt("Nhập số lượng sản phẩm:"));
//   }
//   displayData(): void {
//     console.log(`Id: ${this.id}`);
//     console.log(`Name: ${this.name}`);
//     console.log(`Price: ${this.price}`);
//     console.log(`Quantity: ${this.quantity}`);
//     console.log("-----------------------");
//   }
// }
// class Bakery {
//   private products: Product[] = [];
//   createProduct(product: Product): void {
//     this.products.push(product);
//   }
//   updateProduct(id: number, updatedProduct: Product): void {
//     const index = this.products.findIndex((product) => product.getId() === id);
//     if (index !== -1) {
//       this.products[index] = updatedProduct;
//     }
//   }
//   showAllProducts(): void {
//     this.products.forEach((product) => {
//       product.displayData();
//     });
//   }
//   deleteProduct(id: number): void {
//     const index = this.products.findIndex((product) => product.getId() === id);
//     if (index !== -1) {
//       this.products.splice(index, 1);
//     }
//   }
// }
// class Cart {
//   private cart: Product[] = [];
//   addToCart(product: Product): void {
//     this.cart.push(product);
//   }
//   updateCart(id: number, quantity: number): void {
//     const index = this.cart.findIndex((product) => product.getId() === id);
//     if (index !== -1) {
//       this.cart[index] = new Product(
//         this.cart[index].getId(),
//         this.cart[index].getName(),
//         this.cart[index].getPrice(),
//         this.cart[index].getQuantity() + quantity
//       );
//     }
//   }
//   showAllCart(): void {
//     this.cart.forEach((product) => {
//       product.displayData();
//     });
//   }
//   deleteCart(id: number): void {
//     const index = this.cart.findIndex((product) => product.getId() === id);
//     if (index !== -1) {
//       this.cart.splice(index, 1);
//     }
//   }
// }
// const bakery = new Bakery();
// const cart = new Cart([]);
// const product1 = new Product(1, "Chocolate", 45000, 100);
// const product2 = new Product(2, "Cookies", 90000, 100);
// bakery.createProduct(product1);
// bakery.createProduct(product2);
// while (true) {
//   console.log("Sản phẩm có trong cửa hàng:");
//   bakery.showAllProducts();
//   const productName = prompt(
//     "Nhập tên sản phẩm bạn muốn mua (hoặc E để thoát):"
//   );
//   if (productName.toUpperCase() === "E") {
//     console.log("Cảm ơn bạn đã mua hàng!");
//     break;
//   }
//   const productInStore = bakery.products.find(
//     (product) => product.getName().toUpperCase() === productName.toUpperCase()
//   );
//   if (!productInStore) {
//     console.log("Chúng tôi không có sản phẩm đó.");
//     continue;
//   }
//   const productInCart = cart.cart.find(
//     (product) => product.getId() === productInStore.getId()
//   );
//   if (!productInCart) {
//     cart.addToCart(
//       new Product(
//         productInStore.getId(),
//         productInStore.getName(),
//         productInStore.getPrice(),
//         1
//       )
//     );
//   } else {
//     cart.updateCart(productInCart.getId(), 1);
//   }
//   console.log("Sản phẩm đã được thêm vào giỏ hàng của bạn.");
//   const continueShopping = prompt("Tiếp tục mua hàng? (yes/no):");
//   if (continueShopping.toLowerCase() !== "yes") {
//     console.log("Cảm ơn bạn đã mua hàng!");
//     break;
//   }
// }
// console.log("Danh sách sản phẩm trong giỏ hàng của bạn:");
// cart.showAllCart();
