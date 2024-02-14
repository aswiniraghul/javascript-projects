//Try adding new properties inside constructor.
class Astronaut {
   constructor(name, age, mass){
     this.name = name;
     this.age = age;
     this.mass = mass;
   }
}

let fox = new Astronaut('Fox', 7, 12);
let cat =new Astronaut ('cat',age=9,mass=90);
console.log(fox);
console.log(fox.age, fox.color);

fox.age = 9;
fox.color = 'red';
cat.color ='blue';
console.log(fox);
console.log(fox.age, fox.color);

console.log(cat);
console.log(cat.age, cat.color);

//Try modifying or adding properties below.