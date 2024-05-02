

//bottone per iniziare a giocare
let start = document.getElementById('btn');
//creo una variabile con il contenitore della griglia
let tabella = document.getElementById('campo');
//creo variabile per il select
let level = document.getElementById('difficolty');
//creo array vuoto per poi inserirci inumeri random
let bombe = [];


while(bombe.length < 16){

    let numBomba = getRandomNumber (1, 100);
    console.log(numBomba)
    if (bombe.includes(numBomba)){
        numBomba++
    } else{

        bombe.push(numBomba)
    }
    
    
}



start.addEventListener('click', function () {

    //ad ogni giro svuoto la tabella e la sua classList
     tabella.innerHTML = ""
     tabella.classList = ""

    // //se il livello selezionato e` Easy
    if (level.value == 'easy') {
        //richiamo funzione per creare e stampare la tabella a seconda del livello
        generatedTabella(100, 'contenitore_easy')

        //altrimenti se il livello selezionato e` Medium
    } else if (level.value == 'medium') {
        //richiamo funzione per creare e stampare la tabella a seconda del livello
        generatedTabella(81, 'contenitore_medium')

        //altrimenti se il livello selezionato e` Hard
    } else if (level.value == 'hard') {
        //richiamo funzione per creare e stampare la tabella a seconda del livello
        generatedTabella(49, 'contenitore_hard')

    }

})


/**************FUNCTIONS****************/

//creo una funzione per generare un numero random da min a max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

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

}


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

        //aggiungi o rimuovi la classe color
        div.classList.toggle('color');
        console.log('ho cliccato', numero)

        //se dentro l'innerText non c'e` nulla
        if (div.innerText == '') {
            //aggiungi inerText
            div.innerText = numero;
        } else {

            //altrimenti svuota innerText
            div.innerText = ''
        }
    });

    return div

};
/***************************************/