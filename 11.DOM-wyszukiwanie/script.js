// zad.1
const list = document.getElementsByClassName("list");
console.log(list);



// zad.2
const showTags = (tag) => {
  const tags = document.getElementsByTagName(tag);
  console.log(tags);
};
showTags("div");
showTags("ul");



// zad.3
const secondList = document.getElementById("list");
console.log(secondList);



// zad.4

const showElements = (className, idName) => {
    const liElements = document.getElementsByTagName('li');
    const ulElements = document.getElementsByTagName('ul');
    const spanElements = document.getElementsByTagName('span');

    const spanInClass = document.querySelectorAll(`.${className} span`)
    const spanInId = document.querySelectorAll(`#${idName} span`)

    console.log(liElements)
    console.log(ulElements)   
    console.log(spanElements)   
    console.log(spanInClass)   
    console.log(spanInId)     
}

showElements("list", "spans")
