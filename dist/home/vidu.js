"use strict";
// // Lớp cơ sở GeometricShape
// class GeometricShape {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   area(): number {
//     return 0;
//   }
// }
// // Lớp con Circle kế thừa từ GeometricShape
// class Circle extends GeometricShape {
//   radius: number;
//   constructor(name: string, radius: number) {
//     super(name);
//     this.radius = radius;
//   }
//   area(): number {
//     return Math.PI * this.radius ** 2;
//   }
// }
// // Lớp con Rectangle kế thừa từ GeometricShape
// class Rectangle extends GeometricShape {
//   width: number;
//   height: number;
//   constructor(name: string, width: number, height: number) {
//     super(name);
//     this.width = width;
//     this.height = height;
//   }
//   area(): number {
//     return this.width * this.height;
//   }
// }
// // Hàm tính tổng diện tích của mảng các hình học
// function totalArea(shapes: GeometricShape[]): number {
//   let sum = 0;
//   for (const shape of shapes) {
//     sum += shape.area();
//   }
//   return sum;
// }
// // Tạo các hình học và thể hiện đa hình
// const shapes: GeometricShape[] = [];
// shapes.push(new Circle("Circle 1", 5));
// shapes.push(new Rectangle("Rectangle 1", 3, 4));
// shapes.push(new Circle("Circle 2", 7));
// console.log(`Tổng diện tích của các hình học là: ${totalArea(shapes)}`);
