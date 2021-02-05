// zad.1
var x =0;
var n = setInterval(() =>{
    if(x == 15){
      clearInterval(n);
      }
      console.log("Cześć po raz "+ x++)
}, 1000);



// zad.2
let tab = ["Maciek", "Jakub", "Aleksandra"]; 
setTimeout(function() {
    for (let i=0; i<tab.length; i++) {
        console.log(tab[i]);
    }
    i = 0;
    var x = setInterval(function() {
  
        if(tab.length>i) {
            console.log(tab[i++]);
        }
        clearInterval(x);
    }, 3000);
    
}, 2000);
