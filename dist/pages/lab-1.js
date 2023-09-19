"use strict";
class CircleLab {
    constructor(radius, color) {
        this.getColor = () => {
            return this.color;
        };
        this.getRadius = () => {
            return this.radius;
        };
        this.setColor = (color) => {
            this.color = color;
        };
        this.setRadius = (radius) => {
            this.radius = radius;
        };
        this.getArea = () => {
            return Math.PI * this.radius * this.radius;
        };
        this.getPerimeter = () => {
            return Math.PI * this.radius * 2;
        };
        this.radius = radius;
        this.color = color;
    }
}
function inputCircleInfo() {
    const radiusCircleInput = document.getElementById("radiusInput");
    const colorCircleInput = document.getElementById("colorInput");
    const radiusCircle = Number(radiusCircleInput?.value);
    const colorCircle = colorCircleInput?.value || "";
    const circleTable = document.getElementById("circleTable");
    const radiusValue = document.getElementById("radiusValue");
    const colorValue = document.getElementById("colorValue");
    const perimeterValue = document.getElementById("circumferenceValue");
    const areaValue = document.getElementById("areaValue");
    const myCircleLab = new CircleLab(radiusCircle, colorCircle);
    radiusValue.textContent = String(myCircleLab.getRadius());
    colorValue.textContent = myCircleLab.getColor();
    areaValue.textContent = myCircleLab.getArea().toFixed(1);
    perimeterValue.textContent = myCircleLab.getPerimeter().toFixed(1);
    const drawCircle = document.getElementById("circleCanvas");
    drawCircle.style.width = myCircleLab.getRadius() * 2 + "px";
    drawCircle.style.height = myCircleLab.getRadius() * 2 + "px";
    drawCircle.style.backgroundColor = myCircleLab.getColor();
    drawCircle.style.borderRadius = "50%";
}
