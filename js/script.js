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
    let timeCountdown = 30;

    // INSERISCO TIME_COUNTDOWN NEL SUO CONTAINER HTML
    containerCountdown.innerHTML = `Tempo rimasto: ${timeCountdown} secondi`;


    // RICHIAMO LA FUNZIONE PER GENERARE I NUMERI CASUALI, CONTROLLARLI ED INSERIRLI NELLA PAGINA HTML
    fillArrayNumber(arrayNumber, maxNumber, gridNumber);

    // console.log(arrayNumber) // VISIONARE IN CONSOLE L'ARRAY CON I NUMERI CASUALI


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

    
    // FUNZIONE CHE DOPO 30 SECONDI FA SCOMPARIRE I NUMERI CASUALI
    setTimeout(function(){

        // RESETTO LA GRIGLIA HTML CHE CONTIENE I NUMERI CASUALI
        gridNumber.innerHTML = '';

        // RESETTO IL CONTENUTO DI CONTAINER_COUNTDOWN
        containerCountdown.innerHTML = '';

    }, 30000)


    // FUNZIONE CHE, DOPO 30,1 SECONDI, CHIEDE ALL'UTENTE DI INSERIRE I NUMERI CASUALI TRAMITE PROMPT, E STAMPA IL MESSAGGIO FINALE
    setTimeout(function(){

        // VARIABILE CHE CONTEGGIA IL PUNTEGGIO DELL'UTENTE
        let userPoint = 0;

        // VARIABILE CHE SALVA I NUMERI INDOVINATI DALL'UTENTE
        let userRightNumber = '';

        // CICLO FOR CHE SCORRE DAL PRIMO ALL'ULTIMO NUMERO CASUALE GENERATO
        for (let i = 1; i <= maxNumber; i++){

            // L'UTENTE INSERISCE IL NUMERO TRAMITE PROMPT
            const userNumber = parseInt(prompt(`Inserire il ${i}° numero:`));

            if (userNumber === arrayNumber[i-1]){ // IL NUMERO INSERITO DALL'UTENTE è GIUSTO

                if (i === maxNumber){ // IL CICLO è ARRIVATO ALL'ULTIMO NUMERO

                    // INSERISCO IL NUMERO DELL'UTENTE IN USER_RIGHT_NUMBER
                    userRightNumber += `${userNumber}`;

                } else{ // IL CICLO NON è ARRIVATO ALL'ULTIMO NUMERO

                    // INSERISCO IL NUMERO DELL'UTENTE IN USER_RIGHT_NUMBER
                    userRightNumber += `${userNumber} - `;             
                }

                // INCREMENTO IL PUNTEGGIO DELL'UTENTE
                userPoint++;

                // console.log(userPoint)  // VISIONARE IN CONSOLE IL PUNTEGGIO DELL'UTENTE
            }
        }

        // STAMPO IL MESSAGGIO FINALE NEL CONTAINER_MESSAGE:

            // DICHIARO UNA VARIABILE DOVE SALVARE IL MESSAGGIO
            let messageContent = '';

            // INSERIMENTO STRINGA DENTRO MESSAGE_CONTENT
            messageContent += `I numeri casuali erano: `;

            // CICLO FOR CHE SCORRE TUTTI GLI INDICI DELL'ARRAY_NUMBER
            for (let i = 0; i < arrayNumber.length; i++){
                
                if (i === arrayNumber.length - 1){ // SIAMO ARRIVATI ALL'ULTIMO INDICE

                    // INSERISCO DENTRO MESSAGE_CONTENT L'ULTIMO ELEMENTO DELL'ARRAY_NUMBER
                    messageContent += `${arrayNumber[i]}`;

                } else{ // NON SIAMO ARRIVATI ALL'ULTIMO INDICE

                    // INSERISCO DENTRO MESSAGE_CONTENT OGNI ELEMENTO DELL'ARRAY_NUMBER
                    messageContent +=  `${arrayNumber[i]} - `;
                }
            }

            // INSERIMENTO SPAZIO TRA IL TESTO HTML
            messageContent += `<br>`;

            // INSERIMENTO STRINGA DENTRO MESSAGE_CONTENT
            messageContent += `I numeri che hai indovinato sono: `;

            // INSERIMENTO NUMERI INDOVINATI DALL'UTENTE DENTRO MESSAGE_CONTENT
            messageContent += userRightNumber;
            
            // INSERIMENTO SPAZIO TRA IL TESTO HTML
            messageContent += `<br>`;

            // INSERIMENTO PUNTEGGIO UTENTE DENTRO MESSAGE_CONTENT
            messageContent += `Il tuo punteggio è: ${userPoint} `;

            // INSERIMENTO NEL CONTAINER MESSAGE HTML IL MESSAGE_CONTENT
            containerMessage.innerHTML = messageContent;
    }, 31000)
})