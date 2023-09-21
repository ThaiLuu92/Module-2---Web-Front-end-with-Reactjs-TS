abstract class Shape {
    private color: string;
    constructor(color: string) {
        this.color = color
        
    }

    getColor():string {
        return this.color
    }
    setColor(color: string) {
        this.color = color;
    }
    abstract getArea():number;
    abstract getPerimeter():number;
    abstract drawShape():void;

}

class Rectangle extends Shape {
  constructor(private width: number, private height: number, color: string) {
    super(color);
    this.width = width;
    this.height = height;
  }
  //   getWidth(): number {
  //     return this.width;
  //   }
  //   getHeight(): number {
  //     return this.height;
  //   }
  //   setWidth(width: number) {
  //      this.width = width;
  //   }
  //   setHeight(height: number) {
  //      this.height = height;
  //   }

  getArea() {
    return this.width * this.height;
  }
  getPerimeter() {
    return (this.width + this.height) * 2;
  }
  drawShape() {
    const drawShape = document.querySelector(
      "#draw-Rectangle"
    ) as HTMLDivElement;
    drawShape.style.width = `${this.width}px`;
    drawShape.style.height = `${this.height}px`;
    drawShape.style.backgroundColor = this.getColor();
  }
}

class Circle extends Shape {
  constructor(private radius: number, color: string) {
    super(color);
    this.radius = radius;
  }
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
  getPerimeter() {
    return Math.PI * this.radius * 2;
  }
  drawShape() {
    const drawShape = document.querySelector("#draw-Circle") as HTMLDivElement;
    drawShape.style.width = `${this.radius * 2}px`;
    drawShape.style.height = `${this.radius * 2}px`;
    drawShape.style.backgroundColor = this.getColor();
    drawShape.style.borderRadius = "50%";
  }
}

const rectangle_1 = new Rectangle (150,70,"green")
const circle_1 = new Circle (50, "red");
const circle_2 = new Circle(70, "grey");


console.log(
  "Hình chữ nhật",
  rectangle_1,
  "Diện tích là:",
  rectangle_1.getArea(),
  "Chu vi là:",
  rectangle_1.getPerimeter()
);
circle_1.drawShape();
circle_2.drawShape();



console.log(
  "Hình tròn",
  circle_1,
  "Diện tích là:",
  circle_1.getArea().toFixed(2),
  "Chu vi là:",
  circle_1.getPerimeter().toFixed(2)
);
rectangle_1.drawShape()

