"use strict";
class QuadraticEquation {
    constructor(a, b, c) {
        this.getA = () => {
            return this.a;
        };
        this.getB = () => {
            return this.b;
        };
        this.getC = () => {
            return this.c;
        };
        this.setA = (a) => {
            this.a = a;
        };
        this.setB = (b) => {
            this.b = b;
        };
        this.setC = (c) => {
            this.c = c;
        };
        this.getDiscriminant = () => {
            return this.b * this.b - 4 * this.a * this.c;
        };
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getRoot1() {
        const discriminant = this.getDiscriminant();
        if (discriminant >= 0) {
            return (-this.b + Math.sqrt(discriminant)) / (2 * this.a);
        }
        else {
            return 0;
        }
    }
    getRoot2() {
        const discriminant = this.getDiscriminant();
        if (discriminant >= 0) {
            return (-this.b - Math.sqrt(discriminant)) / (2 * this.a);
        }
        else {
            return 0;
        }
    }
    calculation() {
        const delta = this.getDiscriminant();
        if (delta > 0) {
            return `Phương trình có 2 nghiệm ${this.getRoot1()} và  ${this.getRoot2()}`;
        }
        else if (delta === 0) {
            return `Phương trình có 1 nghiệm ${this.getRoot1()}`;
        }
        else {
            return `Phương trình vô  nghiệm`;
        }
    }
}
const timX = new QuadraticEquation(1, 3, 2);
console.log("delta", timX.getDiscriminant().toFixed(2));
console.log("getRoot1", timX.getRoot1().toFixed(2));
console.log("getRoot2", timX.getRoot2().toFixed(2));
