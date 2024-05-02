MILESTONE #1: GENERARE LE BOME
All'avvio della partita abbiamo bisogno di generare una lista di celle contenenti bombe. Le bombe:
devono essere casuali
devono essere sempre 16
non devono includere ripetizioni, sono tutte diverse
devono essere un numero, che rappresenti una cella esistente (es. tra 1 e 100)
Ragionate bene sul da farsi. Potete anche testare una funzioncina in un file separato o in console.
Potete pensare a un ciclo che finchè non raggiunge lo scopo (16 bombe) continua a:
generare numeri casuali
controllare se sono già nella lista di bombe
aggiungere il numero alla lista o ignorarlo, a seconda del caso

MILESTONE #2: CONTROLLARE LE CELLE
Al click su una cella dovremmo controllare se QUELLA cella è inclusa nell'elenco di bombe. In baso al caso aggiungiamo coloriamo la cella di azzurro o di rosso.

MILESTONE #3: GESTIRE IL PUNTEGGIO
Abbiamo bisogno di salvare un dato, il punteggio. Questo dato verrà resettato ad ogni avvio di partita. Inoltre ad ogni cella cliccata, se non è una bomba, dobbiamo incrementare il punteggio e stamparlo in console.

MILESTONE #4: YOU LOSE
Abbiamo bisogno di gestire il caso in cui si clicca una bomba. A quel punto possiamo prendere il punteggio e segnalarlo all'utente (con alert o scrivendolo in pagina).
Inoltre da quel momento non si può più cliccare in giro.
Come faccio? Posso scrivere da qualche parte che la partita è terminata?
Posso in qualche modo controllare ad ogni click se la partita è ancora in corso?

MILESTONE #5: YOU WIN
Arriverà un momento in cui tutte le celle valide saranno state cliccate. Quello è il caso in cui la partita è vinta. Come me ne accorgo? Ci sono dei dati che posso controllare ogni volta che clicco su una cella per rendermi conto che è l'ultima cella?

