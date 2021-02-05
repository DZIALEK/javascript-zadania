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
