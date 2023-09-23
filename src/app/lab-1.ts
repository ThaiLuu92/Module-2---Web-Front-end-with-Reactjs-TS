class Product {
  readonly id: number;
  private name: string;
  private price: number;
  private quantity: number;

  constructor(id: number, name: string, price: number, quantity: number) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.id = id;
  }

  get info(): { id: number; name: string; price: number; quantity: number } {
    return {
      name: this.name,
      price: this.price,
      quantity: this.quantity,
      id: this.id,
    };
  }

  set setName(name: string) {
    this.name = name;
  }

  set setPrice(price: number) {
    this.price = price;
  }

  set setQuantity(quantity: number) {
    this.quantity = quantity;
  }
}

class Bakery {
  private productList: Product[] = [];

  createProduct(data: { name: string; price: number; quantity: number }) {
    let id: number = 1;
    if (this.productList.length > 0) {
      id = this.productList[this.productList.length - 1].id + 1;
    }

    const newProduct = new Product(id, data.name, data.price, data.quantity);
    this.productList.push(newProduct);
  }

  showAllProduct(): Product[] {
    return this.productList;
  }

  deleteProduct(id: number): void {
    const index = this.productList.findIndex((product) => product.id === id);
    if (index !== -1) {
      // Lấy số lượng sản phẩm bị xóa để hoàn lại
      const deletedProduct = this.productList[index];
      const deletedQuantity = deletedProduct.info.quantity;

      // Xóa sản phẩm khỏi danh sách
      this.productList.splice(index, 1);

      // Cộng số lượng đã xóa vào sản phẩm khác cùng loại (nếu có)
      for (const product of this.productList) {
        if (product.info.name === deletedProduct.info.name) {
          product.setQuantity += deletedQuantity;
        }
      }
    }
  }

  updateProduct(data: any): void {
    if (data?.id) {
      const product = this.productList.find(
        (product) => product.id === data.id
      );
      if (product) {
        if (data.price !== undefined) {
          product.setPrice = data.price;
        }
        if (data.quantity !== undefined) {
          product.setQuantity = data.quantity;
        }
      }
    }
  }


  // người dùng mua hàng

  buyProduct(id: number): Product | undefined {
    const product = this.productList.find((product) => product.id === id);
    if (product === undefined) {
      console.log("Sản phẩm không tồn tại");
      return;
    }

    if (product.info.quantity > 0) {
      // Giảm số lượng trong Bakery
      product.setQuantity = product.info.quantity - 1;

      // Phải tạo sản phẩm mới với số lượng mới
      const newProduct = new Product(
        product.info.id,
        product.info.name,
        product.info.price,
        1
      );
      return newProduct;
    } else {
      console.log("Sản phẩm hết hàng");
      return;
    }
  }

  // Người dùng trả hàng

  refundProduct(product: Product) {

    // Kiểm tra và đưa vào kho
  }
}

const store = new Bakery();

class Cart {
  private cart: Product[] = [];

  addToCart(product: Product): void {
    this.cart.push(product);
  }

  updateCart(id: number, quantity: number): void {
    const product = this.cart.find((item) => item.info.id === id);
    if (product) {
      product.setQuantity = quantity;
    }
  }

  showAllCart(): Product[] {
    return this.cart;
  }

  deleteCart(id: number): void {
    const index = this.cart.findIndex((product) => product.info.id === id);
    const deleteproduct = this.cart.find((product) => product.info.id === id);
    if (!deleteproduct) {
      return;
    }

    store.refundProduct(deleteproduct);

    // Lấy số lượng sản phẩm bị xóa để hoàn lại
    const deletedProduct = this.cart[index];
   

    // Xóa sản phẩm khỏi giỏ hàng
    this.cart.splice(index, 1);

    // for (const product of this.cart) {
    //   if (product.info.name === deletedProduct.info.name) {
    //     product.setQuantity += deletedQuantity;
    //   }
    // }
  }
}



// Thêm sản phẩm vào cửa hàng
store.createProduct({ name: "Bánh mì", price: 20000, quantity: 50 });
store.createProduct({ name: "Bánh bao", price: 15000, quantity: 0 });
store.createProduct({ name: "Bánh trung thu", price: 150000, quantity: 200 });
store.createProduct({ name: "Bánh gạo", price: 25000, quantity: 100 });
store.createProduct({ name: "Bánh kem", price: 50000, quantity: 30 });
// Cập nhật và xóa sản phẩm
store.updateProduct({ id: 3, price: 80000 });
store.deleteProduct(1);

// Hiển thị danh sách sản phẩm trong cửa hàng
console.log("Danh sách sản phẩm trong cửa hàng:", store.showAllProduct());


const cartInstance = new Cart();



