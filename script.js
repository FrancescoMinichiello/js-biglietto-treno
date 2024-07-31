/*
 0 recuperare gli elementi dal DOM
 1 chiedere all'utente il numero di chilometri che vuole percorrere
 2 chiedere l'età all'utente 
 3 calcolare il prezzo del biglietto
 4 applicare uno sconto (20% minorenni - 40% over 65)
*/

// # Fase preparatoria

const price = 0.21;
console.log(price);


// # Fase raccolta dati
const kilometres = prompt('Quanti chilometri vuoi percorrere?', '10')
console.log(kilometres);
const age = prompt('Quanti anni hai?', '17')
console.log(age);

// # Fase calcolo sconto