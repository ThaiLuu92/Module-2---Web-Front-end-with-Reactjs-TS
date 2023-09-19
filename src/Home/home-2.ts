// Định nghĩa lớp Circle với các thuộc tính và phương thức
class Circle {
  radius: number;
  color: string;

  constructor(radius: number, color: string) {
    this.radius = radius;
    this.color = color;
  }

  getRadius(): number {
    return this.radius;
  }
  setRadius(radius: number): void {
    this.radius = radius;
  }
  getColor(): string {
    return this.color;
  }
  setColor(color: string): void {
    this.color = color;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  getCircumference(): number {
    return 2 * Math.PI * this.radius;
  }
}

// Hàm để xử lý đầu vào từ người dùng và hiển thị thông tin hình tròn
function inputCircleInfo1() {
  // Lấy giá trị đầu vào từ người dùng
  const radiusInput = document.getElementById(
    "radiusInput"
  ) as HTMLInputElement;
  const colorInput = document.getElementById("colorInput") as HTMLInputElement;

  // Phân tích giá trị đầu vào của người dùng để lấy bán kính và màu sắc
  const radius = parseFloat(radiusInput.value);
  const color = colorInput.value;

  // Kiểm tra tính hợp lệ của đầu vào
  if (isNaN(radius) || radius <= 0 || color.trim() === "") {
    document.getElementById("circleInfo")!.textContent =
      "Đầu vào không hợp lệ. Vui lòng nhập giá trị hợp lệ.";
  } else {
    // Lấy các phần tử từ DOM
    const circleTable = document.getElementById(
      "circleTable"
    ) as HTMLTableElement;
    const radiusValue = document.getElementById(
      "radiusValue"
    ) as HTMLTableCellElement;
    const colorValue = document.getElementById(
      "colorValue"
    ) as HTMLTableCellElement;
    const areaValue = document.getElementById(
      "areaValue"
    ) as HTMLTableCellElement;
    const circumferenceValue = document.getElementById(
      "circumferenceValue"
    ) as HTMLTableCellElement;
    const circleCanvas = document.getElementById(
      "circleCanvas"
    ) as HTMLDivElement;
    // Tạo một đối tượng Circle với thông tin từ người dùng
    const myCircle = new Circle(radius, color);

    // Cập nhật giá trị trong bảng
    radiusValue.textContent = myCircle.getRadius().toString();
    colorValue.textContent = myCircle.getColor();
    areaValue.textContent = myCircle.getArea().toFixed(2);
    circumferenceValue.textContent = myCircle.getCircumference().toFixed(2);

    // Vẽ hình tròn
    circleCanvas.style.width = myCircle.getRadius() * 2 + "px";
    circleCanvas.style.height = myCircle.getRadius() * 2 + "px";
    circleCanvas.style.backgroundColor = myCircle.getColor();
    circleCanvas.style.borderRadius = "50%";
  }
}
