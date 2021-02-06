// zad.1

let buz = document.getElementById("buz");
let baz = document.getElementById("baz");
let foo = document.getElementById("foo");

// 1)
console.log(buz.parentElement);

// 2)
console.log(baz.previousElementSibling);

// 3)
console.log(foo.parentElement.children);

// 4)
console.log(foo.parentElement);

// 5)
console.log(foo.firstElementChild);

// 6)
const children = foo.children;
console.log(children[(children.length-1)/2]);





// zad.2
function printElement(id) {
  var click = document.getElementById(id);
  
  click.addEventListener('click', () =>{
    console.log(click.children[0].children[0].children[0].children[1].children[0].children[0].innerText);
  })
}
printElement('ex2');



// zad.3
const buttons = document.querySelectorAll("#ex3 button");

let status = "none";
function clickText(element) {
  element.addEventListener("click", function(){
    if (this.nextElementSibling.style.display == "none"){
        this.nextElementSibling.style.display = "block";
    }
    else if (this.nextElementSibling.style.display == "block"){
      this.nextElementSibling.style.display = "none";
    }
  })
}
buttons.forEach(button => {
  clickText(button);
})



// zad.4
const buttons = document.querySelectorAll("#ex3 button");
for (let i=0; i<buttons.length;i++){
    buttons[i].addEventListener("click", function(){
        let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        this.parentElement.style.backgroundColor = randomColor;
    })
}



// zad.5

// 1)
let FirstElementColor = (currentColor, elements) => {
  elements[0].style.backgroundColor = currentColor;
};
// 2)
let LastElementColor = (currentColor, elements) => {
  elements[elements.length - 1].style.backgroundColor = currentColor;
};
// 3)
let EvenElementsColor = (currentColor, elements) => {
  for (let i = 0; i < elements.length; i += 2) {
    elements[i].style.backgroundColor = currentColor;
  }
};
// 4)
let AllElementsColor = (currentColor, elements) => {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = currentColor;
  }
};
// 5)
let ListElementsColor = (currentColor, elements) => {
  elements[0].parentElement.style.backgroundColor = currentColor;
};

let changeElementsColor = () => {
  let parent = document.getElementById("ex5");
  let colouredDivs = parent.getElementsByTagName("div");

  for (let i = 0; i < colouredDivs.length; i++) {
    colouredDivs[i].addEventListener("mouseenter", function () {
      let currentColor = this.style.backgroundColor;
      let liElements = parent.getElementsByTagName("li");

      //1)
      //   FirstElementColor(currentColor, liElements);
      
      //2)
      //   LastElementColor(currentColor, liElements);
      
      //3)
         EvenElementsColor(currentColor, liElements);
      
      //4)
      //   AllElementsColor(currentColor, liElements);
      
      //5)
      //   ListElementsColor(currentColor, liElements);
    });
  }
};

changeElementsColor();



 // zad.6
let Parent = document.querySelector("#ex6");

// 1)
let firstPerson = Parent.children[0].children[0].children[0];
console.log(firstPerson);

// 2)
let secondPerson = Parent.children[0].parentNode.children[0].nextSibling.parentNode;
console.log(secondPerson);

// 3)
let thirdPerson = Parent.parentNode.children[0].parentNode.children[1].children[0].children[0].children[0];
console.log(thirdPerson);
