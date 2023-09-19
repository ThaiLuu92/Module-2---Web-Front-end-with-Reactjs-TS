class Fan {
  readonly SLOW = 1;
  readonly MEDIUM = 2;
  readonly FAST = 3;
  private speed: number;
  private status: boolean;
  readonly color: string;
  readonly radius: number;

  constructor(
    speed: number = 1,
    status: boolean = false,
    color: string,
    radius: number
  ) {
    this.speed = speed;
    this.status = status;
    this.color = color;
    this.radius = radius;
  }
  // Phương thức
  getSpeed = () => {
    switch (this.speed) {
      case this.FAST:
        return "fast";

      case this.MEDIUM:
        return "medium";
      default:
        return "fast";
    }
  };
  getStatus = (): string => {
    return this.status ? "fan is on" : "fan is off";
  };

  setSpeed = (speed: number): void => {
    this.speed = speed;
  };
  setStatus = (status: boolean): void => {
    this.status = status;
  };
  getInfor = (): {
    speed: string;
    status: string;
    color: string;
    radius: number;
  } => {
    return {
      speed: this.getSpeed(),
      status: this.getStatus(),
      color: this.color,
      radius: this.radius,
    };
  };
}
