// Crea una funzione che somma due numeri.
// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

let interger = 2;
let interger2 = 5;

// funzione dichiarativa
function sum(a, b){
  return a + b;
}
console.log(sum(interger,interger2))

// ridefinizione come funzione anonima
sum = function (a,b){
  return a + b;
}
console.log(sum(2,2));

// ridefinzione come arrow function
sum = (a, b) => (a + b);
console.log(sum(5,5));



