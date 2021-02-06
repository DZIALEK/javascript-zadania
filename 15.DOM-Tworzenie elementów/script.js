// zad.1
let newElementDiv = document.createElement("div");
newElementDiv.innerText = "To jest nowy element";
document.body.appendChild(newElementDiv);



//zad.2
let bestFruits = ["malina","banan","jabłko","winogron","pomarańcza"];
let newUl = document.createElement("ul");
bestFruits.forEach(elements => {
    let newLi = document.createElement("li");
    newLi.innerText = elements;
    newUl.appendChild(newLi);
  });
document.body.appendChild(newUl);



// zad.3
const btnRemove = document.createElement("button")
document.body.appendChild(btnRemove);
btnRemove.innerHTML = "Remove"
btnRemove.addEventListener("click", function(){
removeIt();
}
    
})

function removeIt(){
    const elementsToRemove = document.getElementById("list").children;
    for (let i = 0; i < elementsToRemove.length; i++){
        elementsToRemove[i].remove();
        console.log(Usunięto: ${elementsToRemove[i].innerText})
    }




// zad.4
let button = document.createElement("button");
button.innerText = "ClickToRemove";

button.addEventListener("click", function() {
  this.remove();
});
document.body.appendChild(button);

    

//zad.5
let numberOfDiv = Math.floor(Math.random() * 7);
for (let i = 0; i < numberOfDiv; i++) {
    let newDiv = document.createElement('div');
    newDiv.innerText = `to jest div numer ${i}`;
    document.body.appendChild(newDiv);
}



// zad.6
let DivOne = document.createElement('div');
let DivTwo = document.createElement('div');
let DivThree = document.createElement('div');
let SpanOne = document.createElement('span');
let SpanTwo = document.createElement('span');

document.body.appendChild(DivOne);
DivOne.innerHTML = 'To jest div'
document.body.appendChild(SpanOne);
SpanOne.innerHTML = 'To jest span'
document.body.appendChild(DivTwo);
DivTwo.appendChild(DivThree);
DivThree.innerHTML = 'To jest div'
document.body.appendChild(SpanTwo);
SpanTwo.innerHTML = 'To jest span'



// zad.7


// zad.8

const newBr = document.createElement("br");
document.body.append(newBr);

const instruction = document.createElement("div");
instruction.innerText =
  "Dodaj do strony: rodzaj; tekst; kolor; ilość";
document.body.append(instruction);

let Input = document.createElement("input");
Input.setAttribute("type", "text");
document.body.append(Input);

let newButton = document.createElement("button");
newButton.innerText = "Dodaj";
newButton.addEventListener("click", function () {
  let inputValue = input.value;
  let values = inputValue.split(";");

  for (let i = 0; i < count; i++) {
    let newElement = null;

    try {
      addElement = document.createElement(values[0]);
      addElement.style.color = values[2];
      addElement.innerText = values[1];
    } catch (err) {
      console.log(err);
    }

    if (addElement) {
      document.body.appendChild(addElement);
    }
  }
});
document.body.append(newButton);



//zad.9

let Forms = [
    "Imie",
  "Nazwisko",
  "Wiek",
  "Ilość dzieci"
]
Forms.forEach(element => {
    let newDiv = document.createElement("div");
    let newLabel = document.createElement("label");
    let newField = document.createElement("input");
    newLabel.innerText = element + ":";
    document.body.appendChild(newDiv);
    newDiv.appendChild(newLabel);
    newDiv.appendChild(newField);
});
const buttonWiecej = document.createElement("button");
buttonWiecej.innerText = "Więcej";
document.body.appendChild(buttonWiecej);

buttonWiecej.addEventListener("click", function(){
  const inputs = document.querySelectorAll("input");
  
  if(!window.functionIsSet){
    let table = document.createElement("table");
    let row = document.createElement("tr");

      Forms.forEach(element => {
        let column = document.createElement("th");
        column.innerText = element;
        row.appendChild(column);
        });
    
    document.body.appendChild(table);
    table.appendChild(row);
  }
  window.functionIsSet = true;
  
  
  function createRow(){
    const table = document.querySelector("table")
    const row = document.createElement("tr");
        inputs.forEach(element => {
          const col = document.createElement("th");
          let textInInput = element.value;
          col.innerText = textInInput;
          element.value = "";
          row.appendChild(col);
        })
    table.appendChild(row);
    
    let buttonUsun = document.createElement("button");
    buttonUsun.innerText = "Usuń";
    row.appendChild(buttonUsun);
    buttonUsun.addEventListener("click", function(){
      row.remove();
      let buttons = document.querySelectorAll("button").length;
      if(buttons <= 1){
        let table = document.querySelector("table");
        table.remove();
        window.functionIsSet = false;
      }
    })
  }
  createRow()
  
})
window.functionIsSet = false;



// zad.10

column.innerText = FirstLetter(element); 
function FirstLetter(element){
  
    textInInput = element.charAt(0).toUpperCase() + element.slice(1);
    return textInInput;
  }



// zad.11




// zad.12

let Object = {
  Property: "",
  findAndReplace: function () {
    const ReplaceString = "Ala";
    const index = this.Property.indexOf(ReplaceString);
    if (index !== -1) {
      this.Property = this.Property.replace(
        ReplaceString,
        "Ola"
      );
      console.log(this.Property);
    } else {
      let div = document.createElement("div");
      div.innerText = "\nSłowo Ala nie występuje w tekście.\n";
      document.body.appendChild(div);
    }//k
  },
};

const addPropertyToObject = (string) => {
  Object.Property = string;
};

addPropertyToObject("Ala ma kota, Marcin ma żyrafę");
Object.findAndReplace();

addPropertyToObject("Ola ma kota, Marcin ma żyrafę");
Object.findAndReplace();




// zad.13

let arrayOfStrings = ["dsgfdg", "dsfghhj", "cdfhgjkkuhjgfc3","jfkdhgf","jkdgfda"];
function Count(newTable) {
    let numberLetters = 0;
    newTable.forEach(i => {
        let isStr = i.replace(/[^a-z]/gi, '');
        numberLetters += isStr.length;
    });
    return numberLetters;
}
function sumNumbers(newTable) {
    const numbers = newTable.map(i => i.match(/[0-9]+/g));
    const allNumbers = numbers.flat();
    return allNumbers.reduce((x, y) => Number(x) + Number(y));
}
function avg(newTable) {
    let numbers = newTable.map(v => v.match(/[0-9]+/g));
    let allNumbers = numbers.flat().filter(i => i);
    let sum = allNumbers.reduce((x, y) => Number(x) + Number(y));
    return sum / allNumbers.length;
}
console.log(Count(arrayOfStrings));
console.log(sumNumbers(arrayOfStrings));
console.log(avg(arrayOfStrings));




// zad.14

let object = {
    name: '',
    surname: '',
    age: '',
  };
  
  function modifyObject(name, surname, age) {
    object.name = 'Pawełek';
    object.surname = 'Dz.';
    object.age = 34;
  
    if (object.name.length >= 5 || object.surname.length >= 5) {
      let previousButton = document.createElement("button");
      previousButton.textContent = "Stan początkowy"
      previousButton.addEventListener('click', () => {
        object = { name: '', surname: '', age: '' }
        console.log(object);
      });
      document.body.appendChild(previousButton);
    }
  }
modifyObject();
console.log(object);
