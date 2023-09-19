"use strict";
class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}
function inputCircleInfo1() {
    const radiusInput = document.getElementById("radiusInput");
    const colorInput = document.getElementById("colorInput");
    const radius = parseFloat(radiusInput.value);
    const color = colorInput.value;
    if (isNaN(radius) || radius <= 0 || color.trim() === "") {
        document.getElementById("circleInfo").textContent =
            "Đầu vào không hợp lệ. Vui lòng nhập giá trị hợp lệ.";
    }
    else {
        const circleTable = document.getElementById("circleTable");
        const radiusValue = document.getElementById("radiusValue");
        const colorValue = document.getElementById("colorValue");
        const areaValue = document.getElementById("areaValue");
        const circumferenceValue = document.getElementById("circumferenceValue");
        const circleCanvas = document.getElementById("circleCanvas");
        const myCircle = new Circle(radius, color);
        radiusValue.textContent = myCircle.getRadius().toString();
        colorValue.textContent = myCircle.getColor();
        areaValue.textContent = myCircle.getArea().toFixed(2);
        circumferenceValue.textContent = myCircle.getCircumference().toFixed(2);
        circleCanvas.style.width = myCircle.getRadius() * 2 + "px";
        circleCanvas.style.height = myCircle.getRadius() * 2 + "px";
        circleCanvas.style.backgroundColor = myCircle.getColor();
        circleCanvas.style.borderRadius = "50%";
    }
}
