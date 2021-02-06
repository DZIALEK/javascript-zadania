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



