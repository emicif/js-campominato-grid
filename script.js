console.log ('JS OK')


// creare una griglia di gioco quadrata
// ogni cella contiene un numero tra quelli compresi in un range compreso tra 1 e 100
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.



//entro all'interno del div creato nell'html
const griglia = document.getElementById('griglia');


// creo le variabili delle colonne e delle righe
const colonna = 8;
const riga = 8;

//calcolo il totale delle colonne e righe
const totalCell = colonna * riga;


const numeri = [];


//inizio il ciclo per individuare le colonne e le righe e inserirle all'interno della griglia
for (let i = 0; i < totalCell; i ++ ){

    const cella = document.createElement('div');

    // aggiungo una classe cella
    cella.classList.add('cella');
    griglia.appendChild(cella);
    cella.innerText = generateNumber (1, totalCell, numeri);
}



// inserire un numero da 1 a 100 in ogni cella



// devo inseire num random dell'array numeri

function generateNumber (min, max, record) {
    let number = generateNumber (min, max);

    while (record.includes (number)) {
        number = generateNumber (min, max)
    }

    return number;
}