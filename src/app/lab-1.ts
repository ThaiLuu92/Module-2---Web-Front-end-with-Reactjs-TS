class ProductLab {
  private id: number;
  private name: string;
  private price: number;
  private quantily: number;

  constructor(id: number, name: string, price: number, quantily: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantily = quantily;
  }
  getId = (): number => {
    return this.id;
  };
  getName = (): string => {
    return this.name;
  };
  getPrice = (): number => {
    return this.price;
  };
  getQuantily = (): number => {
    return this.quantily;
  };
  setId = (id: number) => {
    this.id = id;
  };
  setName = (name: string): void => {
    this.name = name;
  };
  setPrice = (price: number): void => {
    this.price = price;
  };
  setQuantily = (quantily: number): void => {
    this.quantily = quantily;
  };
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
  private products: ProductLab[] = [];
  createProduct() {
    const product = new ProductLab(0, "", 0, 0);
    product.inputData();
    this.products.push(product);
  }

  updateProduct(index: number) {
    const product = this.products[index];
    product.inputData();
    this.products.splice(index, 1, product);
  }

  showAllProduct() {
    this.products.forEach((product) => {
      console.log(product.displayData);
    });
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }
}

class Cart {
  private cart: BakeryLab[] = [];

  addToCart(product: BakeryLab) {
    this.cart.push(product);
  }

  updateCart(index: number, quantity: number) {
    const cart = this.cart[index];
  }

  showAllCart() {
    this.cart.forEach((product) => {
      console.log(product.displayData);
    });
  }

  deleteCart(index: number) {
    this.cart.splice(index, 1);
  }
  
}

const bakery = new BakeryLab();
const cart = new Cart();

const product1 = new ProductLab(1, "Chocolate", 45000, 100);
const product2 = new ProductLab(2, "Cookies", 90000, 100);

