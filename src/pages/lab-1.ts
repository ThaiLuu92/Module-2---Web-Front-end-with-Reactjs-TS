class CircleLab {
  private radius: number;
  private color: string;

  constructor(radius: number, color: string) {
    this.radius = radius;
    this.color = color;
  }

  getColor = (): string => {
    return this.color;
  };
  getRadius = (): number => {
    return this.radius;
  };
  setColor = (color: string): void => {
    this.color = color;
  };

  setRadius = (radius: number): void => {
    this.radius = radius;
  };
  getArea = (): number => {
    return Math.PI * this.radius * this.radius;
  };

  getPerimeter = (): number => {
    return Math.PI * this.radius * 2;
  };
}

function inputCircleInfo() {
  const radiusCircleInput = document.getElementById(
    "radiusInput"
  ) as HTMLInputElement | null;
  const colorCircleInput = document.getElementById(
    "colorInput"
  ) as HTMLInputElement | null;

  const radiusCircle = Number(radiusCircleInput?.value);
  const colorCircle = colorCircleInput?.value || "";

  const circleTable = document.getElementById(
    "circleTable"
  ) as HTMLInputElement;
  const radiusValue = document.getElementById(
    "radiusValue"
  ) as HTMLInputElement;
  const colorValue = document.getElementById("colorValue") as HTMLInputElement;
  const perimeterValue = document.getElementById(
    "circumferenceValue"
  ) as HTMLInputElement;
  const areaValue = document.getElementById("areaValue") as HTMLInputElement;

  const myCircleLab = new CircleLab(radiusCircle, colorCircle);

  radiusValue.textContent = String(myCircleLab.getRadius());
  colorValue.textContent = myCircleLab.getColor();
  areaValue.textContent = myCircleLab.getArea().toFixed(1);
  perimeterValue.textContent = myCircleLab.getPerimeter().toFixed(1);

  const drawCircle = document.getElementById("circleCanvas") as HTMLDivElement;

  drawCircle.style.width = myCircleLab.getRadius() * 2 + "px";
  drawCircle.style.height = myCircleLab.getRadius() * 2 + "px";
  drawCircle.style.backgroundColor = myCircleLab.getColor();
  drawCircle.style.borderRadius = "50%";
}

// const circle_1 = new CircleLab(50, "red");
// console.log("Diện tích circle_1", circle_1.getArea().toFixed(2));
// console.log("Chu vi circle_1", circle_1.getPerimeter().toFixed(2));
