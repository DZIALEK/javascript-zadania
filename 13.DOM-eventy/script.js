//zad 1.

//1)
document.getElementById("test-event").addEventListener("click",function(event){
    console.log(event);                                                      
});

//2)
windows.addEventListener("mouseover",function(event){
     console.log(event);                                                     
});

//3)
document.getElementById("test-event").addEventListener("mouseover",function(event){
    console.log(event);                                                      
});

//4)
windows.addEventListener("keydown",function(event){
     console.log(event);                                                     
});

//5)
windows.addEventListener("scroll",function(event){
     console.log(event);                                                     
});

//6)
document.getElementById("input-test").addEventListener("change",function(event){
    console.log(event);                                                      
});



//zad.2
function clickButtonEx2(event) {
    let text = event.target.attributes["data-text"].nodeValue;
    event.target.nextElementSibling.innerText = text;
}
document.getElementById("ex2").addEventListener("click", clickButtonEx2);



// zad.3
document.getElementById("ex3").addEventListener("mouseover", (hover) => {
    hover.target.style.background = "blue";     
  })
document.getElementById("ex3").addEventListener("mouseout", (hover) =>{
    hover.target.style.background = "red";     
  })
  
  
  
// zad.4

function validateNumber(e){
  if (!isNaN(e.data)){
    document.getElementById("ex3-err").innerText="Nie można wpisywać cyfr";
    }
}
document.getElementById("input-test").addEventListener("input",validateNumber);



// zad.5

function clickButton(){
  const button = document.getElementById("ex5-button");
  const a=0;
  button.addEventListener("click", counting);
  
  function counting(){
    a++;
    button.nextElementSibling.innerText = a;
    if (a===10){
      button.removeEventListener("click",counting);
    }
  }
}
clickButton()



// zad.6
window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    document.body.style.backgroundColor = "red";
  }
  else {
    document.body.style.backgroundColor = "white";
      }
})



// zad.7
let calc = document.getElementById("calculator");
let buttons = calc.querySelectorAll("button");
let number = null;
let number2 = 0;
let input = calc.querySelector("input");

for(let i=0; i<buttons.length; i++){
  buttons[i].addEventListener("click", function(){
    if(this.innerText === "+"){
      input.value = number + number2;
      number = null;
      number2 = null;
    } else if (this.innerText ==="-"){
      
      
    }else if (this.innerText ==="*"){ 
      
      
    }else if (this.innerText ==="/"){
      
      
    }else {
      if (number === null){
        input.value ="";
        number = Number(this.innerText);
      }else{
        number2 = Number(this.innerText);
      }
    }
    
  })
}

