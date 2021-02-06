//zad.1

const divs = document.querySelectorAll(".more-divs");

function listTags(divArray){
    let newArray = [];
    divArray.forEach(element => {
        newArray.push(element.tagName)
    });
    return newArray;
}
console.log(listTags(divs));



// zad.2

let shortList = document.getElementsByClassName("short-list")[0];

function showElements(shortList) {
  console.log(shortList.innerHTML);
  console.log(shortList.outerHTML);
  console.log(shortList.className);
  console.log(shortList.classList);
  console.log(shortList.dataset);
}
showElements(shortList);



// zad.3
const element = document.querySelector('#datasetCheck');
console.log(element.dataset)
const firstNumber = Number(element.dataset.numberone);
const secondNumber = Number(element.dataset.numbertwo);
const thirdNumber = Number(element.dataset.numberThree);

console.log(firstNumber+secondNumber+thirdNumber);
console.log(firstNumber-secondNumber-thirdNumber);



// zad.4
