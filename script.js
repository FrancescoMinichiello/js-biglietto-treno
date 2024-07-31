/*
 0 recuperare gli elementi dal DOM
 1 chiedere all'utente il numero di chilometri che vuole percorrere
 2 chiedere l'età all'utente 
 3 calcolare il prezzo del biglietto
 4 applicare uno sconto (20% minorenni - 40% over 65)
*/

// # Fase preparatoria
const priceElement = document.getElementById('price')

const kmPrice = 0.21;
console.log('kmPrice', kmPrice);


// # Fase raccolta dati
const kilometres = parseInt(prompt('Quanti chilometri vuoi percorrere?', 10))
console.log('kilometres', kilometres);
const age = parseInt(prompt('Quanti anni hai?', 17))
console.log('age', age);

// # Fase calcolo prezzo biglietto

let total = kmPrice * kilometres
console.log('total', total);

// # Fase calcolo sconto

if (age >= 65) {
    total *= 0.6;
} else if (age < 18) {
    total *= 0.8;
}

total = total.toFixed(2) + '€'
priceElement.innerHTML = total;
