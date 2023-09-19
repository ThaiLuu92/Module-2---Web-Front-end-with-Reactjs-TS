class QuadraticEquation {
  private a: number;
  private b: number;
  private c: number;

  constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getA = (): number => {
    return this.a;
  };
  getB = (): number => {
    return this.b;
  };
  getC = (): number => {
    return this.c;
  };
  setA = (a: number): void => {
    this.a = a;
  };
  setB = (b: number): void => {
    this.b = b;
  };
  setC = (c: number): void => {
    this.c = c;
  };
  getDiscriminant = (): number => {
    return this.b * this.b - 4 * this.a * this.c;
  };
  getRoot1(): number {
    const discriminant = this.getDiscriminant();
    if (discriminant >= 0) {
      return (-this.b + Math.sqrt(discriminant)) / (2 * this.a);
    } else {
      return 0;
      
    }
  }
  getRoot2(): number {
    const discriminant = this.getDiscriminant();
    if (discriminant >= 0) {
      return (-this.b - Math.sqrt(discriminant)) / (2 * this.a);
    } else {
      return 0;
    }
  }

  calculation():string {
    const delta = this.getDiscriminant();
    if (delta > 0) {
       return `Phương trình có 2 nghiệm ${this.getRoot1()} và  ${this.getRoot2()}`;
    } else if (delta ===  0) {
        return `Phương trình có 1 nghiệm ${this.getRoot1()}`;
    } else {
        return `Phương trình vô  nghiệm`;
    }
  }
}

const timX = new QuadraticEquation(1,3,2)
console.log("delta", timX.getDiscriminant().toFixed(2));
console.log("getRoot1", timX.getRoot1().toFixed(2));
console.log("getRoot2", timX.getRoot2().toFixed(2));



