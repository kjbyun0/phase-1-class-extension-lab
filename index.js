// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((acc, side) => acc + side, 0);
    }
}

class Triangle extends Polygon {
    get isValid() {
        return this.sides.length === 3 && 
            this.sides[0] < this.sides[1] + this.sides[2] && 
            this.sides[1] < this.sides[0] + this.sides[2] && 
            this.sides[2] < this.sides[0] + this.sides[1];
    }
}

class Square extends Polygon {
    get isValid() {
        return this.sides.length === 4 && 
            this.sides[0] === this.sides[1] && 
            this.sides[0] === this.sides[2] && 
            this.sides[0] === this.sides[3];
    }

    get area() {
        if (!this.isValid) {
            console.log('Invalid square!');
            return 0;
        }
        return this.sides[0] * this.sides[0];
    }
}