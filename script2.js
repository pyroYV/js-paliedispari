/*         Pari e Dispari
        L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
        Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
        Sommiamo i due numeri
        Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
        Dichiariamo chi ha vinto.
        Consigli del giorno
        Scriviamo sempre in italiano i passaggi che vogliamo fare
        Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.  */


function rng(){
    return Math.floor(Math.random()*5 +1)
} 

function isparyyyy(input){
    return input % 2 == 0 
}

function scriviH1(testo){
    document.querySelector('h1').innerHTML = testo
}

const ispari = prompt('inserisci pari o dispari')
const userNumber = parseInt(prompt('inserisci un numero da 1 a 5'))
const randomNumber = rng()
const somma = randomNumber + userNumber
console.log({somma,userNumber,randomNumber})

//se l'input "pari o dispari" è un numero o il numero di input non un numero o superiore a cinque o inferiore allo 0
if (!isNaN(ispari) || isNaN(userNumber) || userNumber > 5 || userNumber < 1){
    alert('ricarica la pagina scemo')
} else if (isparyyyy(somma) && (ispari =='pari')) {
    scriviH1('Hai vinto')
}   else if (!isparyyyy(somma) && (ispari == 'dispari')){
    scriviH1('Hai vinto')
} else{
    scriviH1('Hai perso')
 
}


