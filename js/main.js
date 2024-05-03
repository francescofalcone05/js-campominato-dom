

//bottone per iniziare a giocare
let start = document.getElementById('btn');
//creo una variabile con il contenitore della griglia
let tabella = document.getElementById('campo');
//creo variabile per il select
let level = document.getElementById('difficolty');
//creo array vuoto per poi inserirci inumeri random
let bombe = [];
//creo variabile per punteggio
let punteggio = 0;
//creo variabile con span dove stampare il punteggio finale
let pointsCalc = document.getElementById('points');
//variabile per stabilire la conclusione ndella partita
let gameOver = false
//creo celle per poi salvare il totaale dei quadrati stampati
let celle = ''




//al click
start.addEventListener('click', function () {

    //ad ogni giro svuoto la tabella, la sua classList, l'array, il punteggio ed il booleano che determina la fine della partia
    tabella.innerHTML = ""
    tabella.classList = ""
    bombe = []
    punteggio = 0
    gameOver = false




    // //se il livello selezionato e` Easy
    if (level.value == 'easy') {
        //richiamo funzione per creare e stampare la tabella a seconda del livello
        generatedTabella(100, 'contenitore_easy');
        createArrayBombe(100);

        //altrimenti se il livello selezionato e` Medium
    } else if (level.value == 'medium') {
        //richiamo funzione per creare e stampare la tabella a seconda del livello
        generatedTabella(81, 'contenitore_medium');
        createArrayBombe(81);

        //altrimenti se il livello selezionato e` Hard
    } else if (level.value == 'hard') {
        //richiamo funzione per creare e stampare la tabella a seconda del livello
        generatedTabella(49, 'contenitore_hard');
        createArrayBombe(49);

    }

})


/**************FUNCTIONS****************/

//creo funzione per creare l'array dei numeri bombe, di 16 numeri
function createArrayBombe(cellNum) {

    while (bombe.length < 16) {

        let numBomba = getRandomNumber(1, cellNum);
        console.log(numBomba)
        if (!bombe.includes(numBomba)) {
            bombe.push(numBomba)
        } else {
            //niente
        }

    }
};

//creo una funzione per generare un numero random da min a max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

//funzione per rendere visibile la tabella e generare un tot di di quadrati
function generatedTabella(numQuadrati, classeToAdd) {


    // rimuovo la classe hide dalla tabella
    tabella.classList.remove('hide')
    //aggiungi la classe container al contenitore a secondo del livello selezionato
    tabella.classList.add(classeToAdd)

    //se voglio nascondere bottone e select una volta scelto il livello aggiungo la classe hide
    //start.classList.add('hide')
    //level.classList.add('hide')

    for (let i = 1; i <= numQuadrati; i++) {

        //richiamo funzione
        let elemento = creaElemento(i);

    }

};

//creo una funzione per creare un elemento ed al click add\remove classi 
function creaElemento(numero) {

    //creo un elemento div
    let div = document.createElement("div");

    //aggiungo ad ogni elemento la classe square
    div.classList.add('square');

    //numero i quadrati
    // div.innerText = numero;

    //stampo in pagina i div
    tabella.append(div);

    //una volta creati i quadrati, mi salvo il totale 
    celle = document.getElementsByClassName('square')
    console.log(celle.length)

    //aggiungo eventlistener click
    div.addEventListener('click', function () {

        //se gameOver e` false
        if (gameOver) {

            //niente

        //altimenti
        } else {
            //aggiungi o rimuovi la classe color
            div.classList.add('color');
            // console.log('ho cliccato', numero);

            //se il numero cliccato e` presente nell'array
            if (bombe.includes(numero)) {

                //stampa lose dentro il quadrato
                div.innerHTML = "LOSE";
                //aggiungi la classe lose
                div.classList.add('lose');
                //crea alert con timer di 1 secondo
                setTimeout(function () {
                    alert('HAI PERSO. Ricomincia')
                }, 1 * 1000);
                //frizza la pagina 
                gameOver = true

                //se abbiamo gia` cliccato su quel quadrato
            } else if (div.innerText == '+1') {
                //il punteggio non cambia
                punteggio = punteggio

            } else {

                //aggiungi inerText
                div.innerText = '+1';
                //aumenta il punteggio di 1
                punteggio++
                //stampa il punteggio in pagina
                pointsCalc.innerHTML = punteggio

                //se il punteggio e` uguale alla length delle celLe meno 16 
                if (punteggio == celle.length - 16) {
                    //hai vinto, quindi stampa alert con timer di 1 secondo
                    setTimeout(function () {
                        alert('HAI VINTO')
                    }, 1 * 1000);

                }

            }
        }

    });

    return div

};



/***************************************/
