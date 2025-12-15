// Crea un contatore automatico con setInterval
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo 
// e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

function creaContatoreAutomatico(timer){
  let counter = 0;
    return function counterFunction() { 
      setInterval(() => console.log(counter++), `${timer}`);
    }
}

const start = creaContatoreAutomatico(3000);
start();
