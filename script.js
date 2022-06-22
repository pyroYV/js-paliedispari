//Palidroma
/* Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma.



/* console.log('works')
*/
const parola1 = prompt('inserisci qui una parola ')

function ispalyndrome(parola1){
    //trasformo stringa in array
    const arrayParola = parola1.split('')
   /*  //inverto ordine array
    const arrayInverso = arrayParola.reverse() */
    const parolaI = []
    for (let index = arrayParola.length -1; index >= 0; index--) {
        parolaI.push(arrayParola[index])
    }
    //trasformo array invertito in stringa di nuovo
    const parolaInversa = parolaI.join('')
    if (parola1.toLowerCase() === parolaInversa.toLowerCase()) {
        console.log('la parola è palindroma')
        document.querySelector('h1').innerHTML = 'la parola è palindroma'
    } else {
        console.log('la parola NON è palindroma')
        document.querySelector('h1').innerHTML = 'la parola non è palindroma'
    }
}

ispalyndrome(parola1)


function ispalyndromeNoArray(stringa){

    let newString =''

    for (let index = stringa.length -1; index >= 0 ; index--) {
        newString += stringa[index]
        console.log(newString)
        
    } return newString
}

let stringaInvertita = ispalyndromeNoArray('supercalifragilisticherspiralidoso')
console.log(stringaInvertita)