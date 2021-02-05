// zad.1

const car = {
  type:"Sedan",
  brand:"BMW",
  model:"X5",
  year: "2020",
  color: "blue"
}
console.log(car.type, car.brand, car.model, car.year, car.color);



// zad.2
const car = {
  type:"Sedan",
  brand:"BMW",
  model:"X5",
  year: "2020",
  color: "blue",
  changeName: function(a) {
    this.brand = a;
  }
}
console.log(car.type, car.brand, car.model, car.year, car.color);
car.changeName("Audi")
console.log(car.brand)


// zad.3

const secondObject = {
  sum: 0,
  sumUp: function (array) {
    const sum = array.reduce((sum, element) => (sum += element));
    this.sum = sum;
  },
};

secondObject.sumUp([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log("Suma: ", secondObject.sum);



// zad.4
const newCar = {
  name: "BMW",
  engine: "V8",
  age: 2,
  id: "dsjal43",
};

for (let property in newCar)
  console.log(`${property}: ${newCar[property]}`);
  
  
  
// zad.5
let car = {
  object: {
    prop: "wlasciwosc"
  }
};
console.log(car.object.prop);




// zad.6
let car = {
  object: {
    prop: "wlasciwosc"
  }
};

function sayHello(){
  console.log("Hello");
}
console.log(car.object.prop);

car.variant = "hatchback";
car.greetDriver = sayHello;
car.greetDriver();
