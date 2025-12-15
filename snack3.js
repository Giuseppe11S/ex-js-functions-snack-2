// Definisci una funzione eseguiOperazione che accetta tre parametri: 
// due numeri e una funzione operatore (callback).
// La funzione deve eseguire l'operazione fornita sui due numeri.

const dividi = (a,b) => a / b;
const sottrai = (a,b) => a - b;

const eseguiOperazione = (a, b, operazione) => operazione(a,b);

console.log(eseguiOperazione(10,2, dividi));
console.log(eseguiOperazione(10,2, sottrai));