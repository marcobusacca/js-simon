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
playButton.addEventListener('click', function(){

    // RECUPERO DALL'HTML LA GRIGLIA DOVE INSERIRE I 5 NUMERI CASUALI
    const gridNumber = document.getElementById('grid');

    // RECUPERO DALL'HTML IL CONTAINER DOVE INSERIRE IL COUNTDOWN
    const containerCountdown = document.getElementById('countdown');

    // RECUPERO DALL'HTML IL CONTAINER DOVE INSERIRE IL MESSAGGIO FINALE
    const containerMessage = document.getElementById('message');


    // RESETTO IL CONTENUTO DI GRID_NUMBER
    gridNumber.innerHTML = '';

    // RESETTO IL CONTENUTO DI CONTAINER_COUNTDOWN
    containerCountdown.innerHTML = '';

    // RESETTO IL CONTENUTO DI CONTAINER_MESSAGE
    containerMessage.innerHTML = '';


    // ARRAY_NUMBER CONTENENTE I NUMERI CASUALI
    let arrayNumber = [];

    // VARIABILE NUMERO MASSIMO DI NUMERI CASUALI DA GENERARE
    const maxNumber = 5;


    // VARIABILE CONTENENTE I SECONDI DEL COUNTDOWN
    let timeCountdown = 3;

    // INSERISCO TIME_COUNTDOWN NEL SUO CONTAINER HTML
    containerCountdown.innerHTML = `Tempo rimasto: ${timeCountdown} secondi`;


    // RICHIAMO LA FUNZIONE PER GENERARE I NUMERI CASUALI, CONTROLLARLI ED INSERIRLI NELLA PAGINA HTML
    fillArrayNumber(arrayNumber, maxNumber, gridNumber);


    // FUNZIONE PER ESEGUIRE IL COUNTDOWN
    const countdown = setInterval(function(){

        if (timeCountdown === 0){ // IL COUNTDOWN è ARRIVATO A ZERO

            // STOPPO L'ESECUZIONE DEL COUNTDOWN
            clearInterval(countdown);

        } else{

            // DECREMENTO LA VARIABILE TIME_COUNTDOWN
            timeCountdown--;

            // INSERISCO TIME_COUNTDOWN NEL SUO CONTAINER HTML
            containerCountdown.innerHTML = `Tempo rimasto: ${timeCountdown} secondi`;
        }  
    }, 1000)


    // VARIABILE CHE CONTEGGIA IL PUNTEGGIO DELL'UTENTE
    let userPoint = 0;

    // VARIABILE CHE SALVA I NUMERI INDOVINATI DALL'UTENTE
    let userRightNumber = '';

    
    // FUNZIONE CHE DOPO 30 SECONDI FA SCOMPARIRE I NUMERI CASUALI
    setTimeout(function(){

        // RESETTO LA GRIGLIA HTML CHE CONTIENE I NUMERI CASUALI
        gridNumber.innerHTML = '';

    }, 3000)
})

        