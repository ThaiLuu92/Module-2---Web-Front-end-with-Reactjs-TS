"use strict";
class Fan {
    constructor(speed = 1, status = false, color, radius) {
        this.SLOW = 1;
        this.MEDIUM = 2;
        this.FAST = 3;
        this.getSpeed = () => {
            switch (this.speed) {
                case this.FAST:
                    return "fast";
                case this.MEDIUM:
                    return "medium";
                default:
                    return "fast";
            }
        };
        this.getStatus = () => {
            return this.status ? "fan is on" : "fan is off";
        };
        this.setSpeed = (speed) => {
            this.speed = speed;
        };
        this.setStatus = (status) => {
            this.status = status;
        };
        this.getInfor = () => {
            return {
                speed: this.getSpeed(),
                status: this.getStatus(),
                color: this.color,
                radius: this.radius,
            };
        };
        this.speed = speed;
        this.status = status;
        this.color = color;
        this.radius = radius;
    }
}
