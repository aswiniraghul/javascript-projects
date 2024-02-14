// class Car {
//     constructor(make, model, year, color, mpg){
//        this.make = make;
//        this.model = model;
//        this.year = year;
//        this.color = color;
//        this.mpg = mpg;
//     }
//  }
//  let myCar = new Car('Chevy', 'Astro', 1985, 'gray', 20);
//  console.log(typeof myCar.year);
//  let myCar1 = new Car('Tesla', 'Model S', 2019);
//  console.log(myCar1);
class Plant {
    constructor(type, height) {
       this.type = type;
       this.height = height;
    }
 
    grow (Plant) {
       this.height = this.height + 1;
    }
 }