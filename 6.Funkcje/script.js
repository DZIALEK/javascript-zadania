// zad.1
const newMessages = () => {
  console.log("Udało się!");
};

newMessages();



//zad.2
const showParameter = (Parameter) => {
  console.log("Parameter: ", Parameter);
};

showParameter("setParametr");



//zad.3
let getArray = (exampleArray) => {
  return exampleArray;
};

let array = getArray([1, 2, 3, 4]);
console.log(array);



//zad.4
let showMessageInInterval = (exampleString) => {
  let intervalCount = 0;
  let interval = setInterval(() => {
    if (intervalCount < 5) {
      console.log(exampleString);
    } else {
      clearInterval(interval);
      console.log("Koniec");
    }
    intervalCount++;
  }, 3000);
};

showMessageInInterval("argument String");
