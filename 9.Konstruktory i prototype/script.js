// zad.1

function Pearson(name, surname, age, country, city, language){
  
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.language = language;

  
  this.changeAge = function(age) {
    this.age = age;
  }
  
  this.changeCity = function(city) {
    this.city = city;
  }
}
const p1 = new Pearson("Paweł", "Dz", 34, "Polska", "Kraków", "Polski");
const p2 = new Pearson("Paweł", "Kowalski", 12, "Czechy", "Praga", "Czeski");
const p3 = new Pearson("John", "English", 24, "Anglia", "londyn", "Angielski");
const p4 = new Pearson("Marek", "Wariat", 55, "Polska", "Warszawa", "Polski");
const p5 = new Pearson("Carl", "Warrior", 88, "USA", "San Francisco", "Angielski");
console.log(p1)



// zad.2
function add(a, b){
  return a+b;
}

function subtract(a, b){
  return a-b;
}

function multiply(a,b){
  return a*b;
}

function div(a,b){
  if(b == 0){
    console.log("Nie można dzielić przez 0");
    return;
  }
  return a/b;
}

function Calculator(){
  this.memory = [];
  this.showMemory = () => console.log(this.memory);
  this.resetMemory =() => this.memory = [];
  this.calculate = (a,b,operation) => {
    this.memory.push(operation(a,b));
    return operation(a,b);
  }
}

let calc1 = new Calculator();
let calc2 = new Calculator();

console.log(calc1.calculate(4, 4, add));
console.log(calc1.calculate(6, 2, div));
console.log(calc1.memory);

console.log(calc2.calculate(11, 4, subtract));
console.log(calc2.calculate(6, 3, multiply));
console.log(calc2.memory);

calc1.showMemory();
calc2.resetMemory();
console.log(calc2.showMemory());



// zad.3
let firstGame;
let secondGame;

function Game() {}

Game.prototype.number = 0;
Game.prototype.gameInterval = null;

Game.prototype.start = function (anotherGame) {
  Game.prototype.gameInterval = setInterval(() => {
    Game.prototype.gameNumber = Math.floor(Math.random() * 10) + 1;
    console.log("Losowy numer: ", Game.prototype.gameNumber);
    anotherGame.check();
  }, 1000);
};

Game.prototype.check = function () {
  if (Game.prototype.gameNumber > 5) {
    console.log("Koniec");
    clearInterval(Game.prototype.gameInterval);
  }
};

firstGame = new Game();
secondGame = new Game();

firstGame.start(secondGame);
