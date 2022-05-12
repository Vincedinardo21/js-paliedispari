// Chiedo di inserire una parola
let inserisciParola = prompt("Inserisci una parola");
let parolaInversa = invertiParola(inserisciParola);

console.log(parolaInversa);

if(inserisciParola == parolaInversa){
    console.log("La parola inserita è palindroma");
} else {
    console.log("La parola inserita NON è palindroma");
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