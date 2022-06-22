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
    return Math.floor(Math.random()*4 +1)
} 
const ispari = prompt('inserisci pari o dispari')
const userNumber = parseInt(prompt('inserisci un numero da 1 a 5'))
const randomNumber = rng()

if (randomNumber !== userNumber) {
    console.log(`rng ha scelto ${randomNumber}`)
    console.log('non uguali numeri')
}   else {
    console.log('uguali numeri')
    console.log(`rng ha scelto ${randomNumber}`)

}