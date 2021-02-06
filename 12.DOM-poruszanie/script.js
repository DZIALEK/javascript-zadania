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
