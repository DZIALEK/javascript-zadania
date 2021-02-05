// zad.1
const Array = [0, 1, 2, 3, 4, 5];
Array.forEach((argument) => {
  console.log(argument);
});



// zad.2
var array = ["aaa", "bbb", "ccc", "ddd", 5, 66];

//1)
console.log(array[0]);
console.log(array[1]);

//2)
console.log(array[array.length-1]);

//3)
array.forEach(a => console.log(a));

//4)
array.forEach((a,i) => {
    if (i % 2 == 0) console.log(a);
})

//5)
array.forEach(a => {
  if (typeof a === "string") console.log(a);
})

//6)
array.forEach(b => {
  if (typeof b === "number") console.log(b);
})



// zad.3

const exampleArray = [1, 2, 3, 4, 5, 6, 7];

// 1)
const sum = exampleArray.reduce((sum, element) => (sum += element));
console.log(`\nsuma wszystkich elementów: ${sum}`);

// 2)
const dif = exampleArray.reduce((dif, element) => (dif -= element));
console.log(`\nróżnica wszystkich elementów: ${dif}`);

// 3)
const average = sum / exampleArray.length;
console.log(`\nśrednia wszystkich elementów: ${average}`);

// 4)
console.log("\nparzyste elementy: ");
exampleArray.forEach((element) => {
  if (element % 2 === 0) {
    console.log("parzyste: ", element);
  }
});

// 5)
console.log("\nelementy nieparzyste: ");
exampleArray.forEach((element) => {
  if (element % 2 !== 0) {
    console.log("nieparzysta: ", element);
  }
});

// 6)
let max = exampleArray[0];
exampleArray.forEach((element) => {
  if (element > max) {
    max = element;
  }
});

console.log(`\nliczba największa : ${max}`);

// 7)
let min = exampleArray[0];
exampleArray.forEach((element) => {
  if (element < min) {
    min = element;
  }
});


// 8)
console.log("\nwypisz tablicę od tyłu:");

for (let i = exampleArray.length - 1; i >= 0; i--) {
  console.log(exampleArray[i]);
}



// zad.4
const result = (array) => {
  const sum = array.reduce((sum, element) => (sum += element));
  console.log(`Suma wszystkich elementów tablicy: ${sum}`);
};

result([1, 2, 3, 4, 5, 6, 7, 8, 9]);



// zad.5

const changeArrayElements = (array) => {
  const sum = array.reduce((sum, element) => (sum += element));
  const average = sum / array.length;

  console.log(`\nwszystkie elementy tej tablicy pomnożone przez średnią tablicy`);
  array.forEach((element) => {
    console.log(element * average);
  });
};

changeArrayElements([1, 2, 3, 4, 5, 6, 7]);



// zad.6

let array = [1, 2, 3, 4, 5, 6, 7];

const evenAvg = (array) => {
  const even = array.filter(element => element % 2 === 0);
  const summaryEven = even.reduce((a,b) => a + b);
  
  console.log(summaryEven / even.length)
}

evenAvg(array);



// zad.7

const num = [2, 11, 33, 5, 1, 24];
function comapreNum(a, b) {
  return a - b;
}
console.log(num.sort(comapreNum));



// zad.8

const arr1 = [10,20,30,40,50];
const arr2 = [1,2,3,4,5];
const newArr = [];

function addIndexes(arr1, arr2) {
  arr1.forEach((num1, i) => {
    newArr.push(num1 + arr2[i]);
  })
  return newArr;
}

console.log(addIndexes(arr1, arr2));


// zad.9 - zmienione zad.10

function invert(arr){
  for(let i = 0; i < arr.length; i++){
    arr[i] = -arr[i];
  }
  return arr;
}

console.log(invert([-2, -1, 0, 1, 2]));
