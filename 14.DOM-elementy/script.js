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
document.getElementById("spanText").innerHTML="inny tekst";



// zad.5
document.getElementById("spanText").className="secondClassName";



// zad.6
let classesDiv = document.querySelector("#classes");
let showElementsClass = classesDiv.classList;

let addString = (showElementsClass) => {
    console.log(showElementsClass);
    showElementsClass.forEach(x => console.log(x));
    let classArray = [...showElementsClass];
    console.log(classArray.join('+'));

    classesDiv.className = "";
    console.log(classesDiv);
    console.log("Usunięto wszystkie klasy");
}
addString(showElementsClass);



// zad.7

const ListModify = (elements) => {
  console.log(elements);
  for (let i = 0; i < elements.length; i++) {
    if (!elements[i].dataset["data-text"]) {
      elements[i].setAttribute("data-text", "text");
    }
  }
};
const li = document.getElementById("longList").getElementsByTagName("li");
ListModify(li);



// zad.8
let elementDiv = document.getElementById("myDiv");
let object = {
  newClass: "string_z_parametru"
}
let secondClass = "mynewclass";

const funString = (object,string) => {
  object["newClass"] = string;
  console.log(object)
}

const funVariable = (elementDiv,one) => {
  elementDiv.classList.add(one.newClass)
}

funString(object,secondClass);
funVariable(elementDiv,object);



// zad.9
const element = document.getElementById("numbers");

const addClass =() => {
  const parameter =Math.floor(Math.random()*10);
  
  if(parameter % 2 == 0) div.className = "even";
  else div.className = "odd";
};
addClass();



// zad.10

let getData = (element) => {
  let children = element.children;
  let arrayList = [];

  for (let i = 0; i < children.length; i++) {
    arrayList.push(children[i].textContent);
  }
  return arrayList;
};
let arrayList = getData(document.getElementById("longList"));
console.log(arrayList);




// zad.11
function randomNumber (Elements) {
    Elements.querySelectorAll('li').forEach(children => {
        children.dataset.oldnumber = children.innerText;
        children.innerText = Math.round(Math.random() * 10);
    });
}
randomNumber(document.getElementById('longList'));
