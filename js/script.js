"use strict";

// FUNZIONE CHE GENERA UN NUMERO CASUALE
function createRandomNumber(min, max){

    // CREA UN NUMERO RANDOM E LO RESTITUISCE
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// FUNZIONE CHE CONTROLLA OGNI NUMERO CASUALE GENERATO
function checkRandomNumber(arrayNumber){

    // VARIABILE DI CONTROLLO
    let checkNumber = false;

    // VARIABILE CHE CONTIENE IL NUMERO CASUALE
    let randomNumber;

    while (checkNumber === false){

        // GENERO IL NUMERO CASUALE
        randomNumber = createRandomNumber(1, 100);

        if(!arrayNumber.includes(randomNumber)){ // L'ARRAY_NUMBER NON INCLUDE IL NUMERO CASUALE GENERATO

            checkNumber = true;
        }
    }

    return randomNumber;
}

// FUNZIONE CHE GENERA TUTTI I NUMERI CASUALI E LI INSERISCE NELL'ARRAY_NUMBER
function generateArrayNumber(arrayNumber, maxNumber){

    for (let i = 1; i <= maxNumber; i++){

        const randomNumber = checkRandomNumber(arrayNumber);
    
        arrayNumber.push(randomNumber);
    }
}

// FUNZIONE CHE INSERISCE I NUMERI CASUALI GENERATI E VALIDATI DENTRO LA GRIGLIA HTML
function fillArrayNumber(arrayNumber, maxNumber, gridNumber){

    // RICHIAMO LA FUNZIONE GENERATE_ARRAY_NUMBER
    generateArrayNumber(arrayNumber, maxNumber);

    // INSERISCO GLI ELEMENTI "DIV", CHE CONTENGONO IL NUMERO CASUALE, NELLA GRIGLIA HTML
    for (let i = 1; i <= maxNumber; i++){

        // CREO L'ELEMENTO HTML "DIV" E LO INSERISCO DENTRO LA CONSTANTE CONTAINER_NUMBER
        const containerNumber = document.createElement('div');

        // AGGIUNGO A CONTAINER_NUMBER LA CLASSE "NUMBER_COL"
        containerNumber.classList.add('number_col');

        // INSERISCO DENTRO CONTAINER_NUMBER IL NUMERO DELL'ARRAY_NUMBER DI OGNI ITERAZIONE
        containerNumber.innerHTML = arrayNumber[i-1];

        // INSERISCO CONTAINER_NUMBER NELLA GRIGLIA HTML
        gridNumber.append(containerNumber);
    }
}

// RECUPERO DALL'HTML IL BOTTONE "PLAY"
const playButton = document.getElementById('play');

// L'UTENTE CLICCA SUL BOTTONE "PLAY"
playButton.addEventListener('clik', function(){

    // RECUPERO DALL'HTML LA GRIGLIA DOVE INSERIRE I 5 NUMERI CASUALI
    const gridNumber = document.getElementByid('gridNumber');

    // RECUPERO DALL'HTML IL CONTAINER DOVE INSERIRE IL COUNTDOWN
    const containerCountdown = document.getElementByid('countdown');

    // RECUPERO DALL'HTML IL CONTAINER DOVE INSERIRE IL MESSAGGIO FINALE
    const containerMessage = document.getElementByid('message');

})