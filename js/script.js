"use strict";

// FUNZIONE CHE GENERA UN NUMERO CASUALE
function createRandomNumber(min, max){

    // CREA UN NUMERO RANDOM E LO RESTITUISCE
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// FUNZIONE CHE CONTROLLA OGNI NUMERO RANDOM GENERATO
function checkRandomNumber(arrayNumber){

    // VARIABILE DI CONTROLLO
    let checkNumber = false;

    // VARIABILE CHE CONTIENE IL NUMERO CASUALE
    let randomNumber;

    while (checkNumber === false){

        // GENERO IL NUMERO CASUALE
        randomNumber = createRandomNumber(1, 100);

        if(!arrayNumber.includes(randomNumber)){ // L'ARRAY_NUMBER NON INCLUDE IL NUMERO CASUALE GENERATO

            numberCheck = true;
        }
    }

    return randomNumber;
}