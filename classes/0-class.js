class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    // method
    calcArea() {
        return this.height * this.width;
    }

    // getter
    get area() {
        return this.calcArea();
    }
    *getSides() {
        yield this.height;
        yield this.width;
        yield this.height;
        yield this.width;
    }
}

const square = new Rectangle(10, 10);

console.log(square.area);
console.log([...square.getSides()]);
