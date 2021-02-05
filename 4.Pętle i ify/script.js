// Zadanie 1:
let value1 = 4;
let value2 = 6;
if(value1>value2) {
console.log(value1);
} else {
console.log(value2);
}



// Zadanie 2:
var nextValue1 =40;
var nextValue2 =10;
var nextValue3 =3;

if (nextValue1 > nextValue2 && nextValue1 > nextValue3){
console.log(nextValue1);
} else if (nextValue2 > nextValue3){
console.log(nextValue2);
} else{
console.log(nextValue3);
}



// Zadanie 3:
for(var x=0; x<=10; x++)
    {
      console.log("Lubię JavaScript")
    }
    


// Zadanie 4:
var result = 0;
for (var i=0;i<=10;++i){
 result=result+i;
}
console.log(result);


// Zadanie 5:
var n=5;
for (var i=0; i<=n; i++)
{
if (i%2==0)
{

console.log("liczba "+i+" jest parzysta");
} else {
	console.log("liczba "+i+" jest nieparzysta");
}		
}



// Zadanie 6:
for(let i=0; i< 3; i++){
    for(let j=0; j < 3; j++){
        console.log("i= " + i + ", j= " + j);
    }    
}



// Zadanie 7:
console.log(0);
for(var i=1;i<=100;++i){
  if(i%3==0 && i%5==0){
      console.log("FizzBuzz");
  } else if(i%3==0){
    console.log("Fizz");
  }
  else if(i%5==0){
      console.log("Buzz");
  }
  else {
      console.log(i);
  }
}



// zadanie 8a
var x = "*";
for (var i=0; i<5; i++){
	console.log(x);
	x+="*";
}


// zadanie 8b
var x = " *";
var z =5;

for (var i=0; i<z; i++){
var space = "";
for (var k=0; k<z-i; k++)
{
	space+=" ";
}
	console.log(space + x);
	x+=" *";
}



// zadanie 8c
const rows = 5;
for (i = 0; i < rows * 2; i += 2) {
  let row = "";
  for (a = rows * 2 + 2; a >= i + 1; a -= 2) {
    row += " ";
  }
  for (b = 0; b <= i; b++) {
    row += "*";
  }
  console.log(`${row}`);
}


// zadanie 8d
const line = 5;

for (i = 0; i < line; i++) {
  let row = "";
  for (a = 0; a <= i; a++) {
    row += "*";
  }
  let number = i+1;
  for (a = line-1 - i; a > 0; a--) {
    row += number;
    number++;
  }

  console.log(`${row}`);
}
console.log("-----");
for (i = 0; i < line; i++) {
  let row = "";
  for (a = line - i; a > 0; a--) {
    row += "*";
  }
  let number = line - i;
  for (b = 0; b < i; b++) {
    row += number;
    number++;
  }

  console.log(`${row}`);
}


//zadanie 8e:
for (i = 1; i <= 5; i++) {
  let line = "";
  for (a = 6; a >= i; a--) {
    line += " ";
  }
  for (b = 1; b <= i; b++) {
    line += " *";
  }
  console.log(`${line}`);
}

for (i = 1; i <= 3; i++) {
  let line = "";
  for (let a = 0; a <= 6; a++) {
    line += " ";
  }
  line += "*";

  for (let a = 0; a <= 6; a++) {
    line += " ";
  }
  console.log(`${line}`);
}
