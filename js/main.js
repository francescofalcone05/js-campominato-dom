

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








start.addEventListener('click', function () {

    //ad ogni giro svuoto la tabella, la sua classList e l'array
    tabella.innerHTML = ""
    tabella.classList = ""
    bombe = []
    punteggio = 0


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


//funzione per creare un elemento ed al click add\remove classi 
function creaElemento(numero) {

    //creo un elemento div
    let div = document.createElement("div");

    //aggiungo ad ogni elemento la classe square
    div.classList.add('square');

    //numero i quadrati
    // div.innerText = numero;

    //stampo in pagina i div
    tabella.append(div);

    //aggiungo eventlistener click
    div.addEventListener('click', function () {

        //se gameOver e` false
        if (gameOver) {

            //niente

        } else {
            //aggiungi o rimuovi la classe color
            div.classList.add('color');
            console.log('ho cliccato', numero);

            if (bombe.includes(numero)) {

                div.innerHTML = "LOSE";
                div.classList.add('lose');
                alert('HAI PERSO. Ricomincia')
                gameOver = false
                //
                //if punteggio = numero celle meno 16 , hai vinto
                //
            } else {

                //aggiungi inerText
                div.innerText = '+1';
                punteggio++
                console.log(punteggio)
                pointsCalc.innerHTML = punteggio


            }
        }

        });

    return div

};
/***************************************/