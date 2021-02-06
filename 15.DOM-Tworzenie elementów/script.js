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
