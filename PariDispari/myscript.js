let myNumber;

// Mi assicuro che il numero scelto sia minore di 6
do {
    myNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
} while(myNumber > 5);

let pcNumber = getRandomNumber();
console.log("Numero pc: " + pcNumber);

// Sommo il mio numero con quello del pc
let somma = myNumber + pcNumber;
console.log("La somma è: " + somma);

// Le mie funzioni
// Scrivo una funzione che mi restituisce un numero random dell'intervallo [1, 5]
function getRandomNumber(){
    randomNum = Math.floor(Math.random() * 5) + 1;
    return randomNum;
}