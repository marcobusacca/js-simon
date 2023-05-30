PROBLEMA:

Visualizzare in pagina 5 numeri casuali.

Da lì parte un timer di 30 secondi. 

Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


- Creare Struttura pagina HTML & CSS;

    - Creare il Container HTML dove inserire:

        - Una riga con dentro un bottone per avviare il Programma (play);

        - Una riga dove verranno inseriti i 5 numeri casuali;

        - Una riga dove verrà inserito il Countdown (30 secondi);

        - Una riga dove verrà inserito il Messaggio Finale con il Punteggio dell'utente;


- Creare Funzione (createRandomNumber(min, max)) che genera dei Numeri Random da 1 a 100:

    - Ritorna (return): Math.floor(Math.random() * (max - min + 1) + min);


- Creare una Funzione (checkRandomNumber(arrayNumber)) che controlli ogni Numero Random Generato per NON avere Numeri Uguali:

    - Dichiarare una Variabile di Controllo (let checkNumber = false);

    - Dichiarare una Variabile che Contiene il Numero Casuale (let randomNumber);


    - Creare un CICLO WHILE che viene eseguito SOLTANTO SE checkNumber === false:

        - Richiamare la Funzione createRandomNumber(1, 100) ed inserirla dentro la Variabile randomNumber;

        - ? SE arrayNumber NON include il randomNumber, ALLORA:

            - checkNumber = true;


    - Ritorna (return) la Variabile randomNumber;


- Creare una Funzione (generateArrayNumber(arrayNumber, maxNumber)) che inserisce i Numeri Random Validati nell'arrayNumber:

    - Creare un CICLO FOR che va da 1 al numero Massimo di Numeri Random da Generare (maxNumber):

        - Richiamare la Funzione checkRandomNumber(arrayNumber) ed inserirla dentro una Variabile che Contiene il Numero Casuale (let randomNumber);

        - Pushare dentro l'arrayNumber il Numero Random Generato e Validato (arrayNumber.push(randomNumber));


- Creare una Funzione (fillArrayNumber(arrayNumber, maxNumber, gridNumber)) che inserisce i Numeri Random Generati e Validati dentro la Griglia HTML:

    - Richiamare la Funzione generateArrayNumber(arrayNumber, maxNumber);

    - Creare un CICLO FOR che va da 1 al numero Massimo di Numeri Random (maxNumber):

        - Creare un DIV HTML dove inserire ogni Numero ed inserirlo dentro una Constante: const containerNumber = document.createElement('div');

        - Aggiungere a containerNumber la classe "number_col": containerNumber.classList.add('number_col');

        - Inserire dentro containerNumber ogni Numero dell'arrayNumber: containerNumber.innerHTML = arrayNumber[i-1];

        - Appendere (append) containerNumber dentro gridNumber = gridNumber.append(containerNumber);


- Recuperare dall'HTML il bottone "play" ed inserirlo in una Constante: const playButton = document.getElementByid('play');


- Quando l'utente CLICCA sul playButton:

    - Recuperare dall'HTML la Griglia dove verranno inseriti i 5 numeri casuali ed inserirla in una Constante: const gridNumber = document.getElementByid('gridNumber');

    - Recuperare dall'HTML il Container dove inserire il Countdown ed inserirlo in una Constante: const containerCountdown = document.getElementByid('countdown');

    - Recuperare dall'HTML il Container dove inserire il Messaggio Finale per l'utente: const containerMessage =  document.getElementByid('message');


    - Resettare gridNumber: gridNumber.innerHTML = '';

    - Resettare containerCountdown: containerCountdown.innerHTML = '';

    - Resettare containerMessage: containerMessage.innerHTML = '';


    - Dichiarare l'arrayNumber = let arrayNumber = [];

    - Dichiarare il Numero Massimo di Numeri Casuali da Generare in una Constante: const maxNumber = 5;


    - Dichiare una Variabile che contiene i secondi del Countdown: timeCountdown = 30;

    - Inserire la Variabile timeCountdown dentro containerCountdown: containerCountdown.innerHTML = timeCountdown; 


    - Richiamare la Funzione fillArrayNumber(arrayNumber, maxNumber, gridNumber);


    - Creare il Countdown ed inserirlo in una Constante: const countdown = setInterval(function(){

        - ? SE timeCountdown === 0, ALLORA:

            - Stoppare il setInterval: clearInterval(countdown);

        - ALTRIMENTI:

            - Decrementare la Variabile timeCountdown: timeCountdown--;

            - Inserire la Variabile timeCountdown dentro containerCountdown: containerCountdown.innerHTML = timeCountdown;

    }, 1000)


    - Creare una Funzione che, dopo 30 secondi, fa scomparire i Numeri Casuali:

        - setTimeout(function(){

            - Resettare gridNumber: gridNumber.innerHTML = '';

            - Resettare containerCountdown: containerCountdown.innerHTML = '';

        }, 30000)


    - Creare una Funzione che, dopo 30,1 secondi, chiede all'utente di inserire i numeri casuali tramite Prompt:

        - setTimeout(function(){

            - Dichiarare una Variabile che Conteggia il Punteggio dell'utente: let userPoint = 0;

            - Dichiarare una Variabile che Salva i Numeri Indovinati dall'utente: let userRightNumber = '';


            - Creare un CICLO FOR che va da 1 al numero Massimo di Numeri Random (maxNumber):

                - Chiedere all'utente ogni Numero ed inserirlo dentro una Constante: const userNumber = parseInt(prompt(`Inserire il ${i}° numero:`));

                - ? SE l'arrayNumber INCLUDE il numero inserito dall'utente: userNumber === arrayNumber[i-1], ALLORA:

                    - ? SE siamo arrivati all'ultimo numero: i === maxNumber, ALLORA:

                        - Inserire il Numero dell'utente in userRightNumber: userRightNumber += `${userNumber}`

                    - ALTRIMENTI:

                        - Inserire il Numero dell'utente in userRightNumber: userRightNumber += `${userNumber} - `

                    - Incrementare la Variabile userPoint: userPoint++;

            - Stampare nel containerMessage il Messaggio Finale:

                - Dichiarare una Variabile dove inserire il Messaggio: let messageContent = '';

                - Inserisci dentro messageContent: messageContent += `I numeri casuali erano: `;

                - Creare un Ciclo FOR che scorre tutti gli indici dell'arrayNumber:

                    - ? SE siamo arrivati all'ultimo indice: i === arrayNumber.length - 1, ALLORA:

                        - Inserisci dentro messageContent: messageContent += `${arrayNumber[i]}`

                    - ALTRIMENTI:

                        - Inserisci dentro messageContent: messageContent += `${arrayNumber[i]} - `

                - Inserisci uno spazio dentro messageContent: messageContent += `<br>`;

                - Inserisci dentro messageContent: messageContent += `I numeri che hai indovinato sono: `;

                - Inserisci userRightNumber dentro messageContent: messageContent += userRightNumber;

                - Inserisci uno spazio dentro messageContent: messageContent += `<br>`;

                - Inserisci dentro messageContent: messageContent += `Il tuo punteggio è: ${userPoint} `;

                - Inserisci dentro containerMessage la Variabile messageContent: containerMessage.innerHTML = messageContent;
        }, 31000)

    
   


    