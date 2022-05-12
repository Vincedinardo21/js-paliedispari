// Chiedo di inserire una parola
let inserisciParola = prompt("Inserisci una parola");
let parolaInversa = invertiParola(inserisciParola);
let stampoEsito = document.querySelector(".esito");

console.log(parolaInversa);

if(inserisciParola == parolaInversa){
    stampoEsito.innerHTML = "La parola inserita è palindroma!"
    console.log("La parola " + inserisciParola + " è palindroma");
} else {
    stampoEsito.innerHTML = "La parola inserita NON è palindroma!"
    console.log("La parola " + inserisciParola + " NON è palindroma");
}

// Funzioni
// Creo una funzione che mi permette di invertire la parola inserita
function invertiParola(stringa){
    // Utilizzo la funzione split per creare un array che ha come elementi le lettere della parola inserita
    let stringaDivisa = stringa.split("");
    // Utilizzo reverse per invertire l'ordine degli elementi e join per unirli in una stringa
    let stringaInversa = stringaDivisa.reverse().join("");
    return stringaInversa;
}