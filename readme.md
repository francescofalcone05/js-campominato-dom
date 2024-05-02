: CONSEGNA
L'utente clicca su un bottone che genererà una griglia di gioco quadrata 10x10 (con 100 celle).
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

MILESTONE #1
Create la vostra griglia in HTML e CSS, in maniera grossolana. Vi servirà solo per testare le classi, come visto in mattinata con la griglia 3x3.

MILESTONE #2
Commentate l'HTML e iniettatelo tramite un ciclo in JS, senza pensare al click o alle funzioni.

MILESTONE #3
Aggiungete la gestione dell'evento di click, che stampi il numero e cambi il colore della cella.

MILESTONE #4
Spostate alcuni elementi in funzioni, ad esempio la creazione del quadrato e/o l'event listener.

BONUS #1: CAPIRE LO SCOPE
In milestone #3 stampate il numero della cella al click, prendendolo dal contenuto della cella. Qualcosa del tipo cella.innerHtml.
Provate adesso a modificare il ciclo che crea le vostre celle facendo in modo che le celle siano vuote, non contengano nessun numero.
Come fate adesso a stampare qualcosa al click? Nello scope dell'event-handler ho qualche variabile visibile che mi può indicare il numero?
E se provo a controllare lo scope "padre" dell'event handler?

BONUS #2: CAPIRE EVENTI E FUNZIONI
Provate a eseguire quanto fatto fin qui NON al caricamento della pagina, ma al click su un pulsante "Avvia gioco".

BONUS #3: QUANDO IL GIOCO SI FA DURO
Aggiungere una select accanto al bottone di start. La select presenterà tre difficoltà di gioco tra cui scegliere (easy, medium, hard).
Quando generate la griglia userete un numero di celle che dipende dalla difficoltà.
Easy: 100 celle (10x10)
Medium: 81 celle (9x9)
Hard: 49 (7x7)
Ragionate bene su quando vi serve conoscere la selezione dell'utente: è in quel momento che dovrete recuperare il dato.