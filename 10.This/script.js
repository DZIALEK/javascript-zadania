// zad.1

function Person(firstName, secondName, age, country, city){
  this.firstName = firstName;
  this.secondName = secondName;
  this.age = age;
  this.contry = country;
  this.city = city;
  this.print = printPerson;
  this.addYear = addYears;
}

function printPerson(){
  console.log(this);
}

function addYears(){
  this.age +=1;
}

var person1 = new Person ("Paweł", "Dz.", 34, "Polska","Kraków");
var person2 = new Person ("John", "English", 55, "England","London");

person1.addYear();
person2.addYear();
person1.addYear();
console.log(person1);
console.log(person2);



// zad.2

function Person(firstName, secondName, age, country, city, meals){
  this.firstName = firstName;
  this.secondName = secondName;
  this.age = age;
  this.contry = country;
  this.city = city;
  this.meals = meals;
  this.print = printPerson;
  this.addYear = addYears;
  this.getMeals = getMeals;
  this.addMeal = addMeal; 
}
//kom
function printPerson(){
  console.log(this);
}

function addYears(){
  this.age +=1;
}

function getMeals(){
  console.log(this.meals);
}

function addMeal(meal){
  this.meals.push(meal);
}
//kom

var person1 = new Person ("Paweł", "Dz.", 34, "Polska","Kraków",["Mielony"]);
var person2 = new Person ("John", "English", 55, "England","London",["Rosół"]);

person1.addYear();
person2.addYear();
person1.addYear();
person1.addMeal("Ziemniaki pieczone");
person2.addMeal("Kiełbaska z grilla");
console.log(person1);
console.log(person2);
person1.getMeals();
person2.getMeals();



