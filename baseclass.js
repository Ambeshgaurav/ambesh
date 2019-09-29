class Shape {
    constructor(id)
    {
       this.id=id;
    }

    toString () {
        return `Shape(${this.id})`
    }
}
class Rectangle extends Shape {
    constructor (id, x, y, width, height) {
        super(id, x, y)
    
    }
    toString () {
        return "Rectangle > " + super.toString()
    }
}
class Circle extends Shape {
    constructor (id, x, y, radius) {
        super(id, x, y)
    
    }
    toString () {
        return "Circle > " + super.toString()
    }
}
let base=new Circle(1,10,20,5);
console.log(base.toString());
