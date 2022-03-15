console.log ('JS OK')


// creare una griglia di gioco quadrata
// ogni cella contiene un numero tra quelli compresi in un range compreso tra 1 e 100
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.



//entro all'interno del div creato nell'html
const griglia = document.getElementById('griglia');


// creo la funzione per modificarla poi in base al numero totali di celle che ho

function totgriglia (colonna, riga) {
    const totalCell = colonna * riga;
    return totalCell;
}
// per il bonus modificare con difficoltà 2 con (9, 9) e diccoltà 3 con (7, 7)
const totalCell = totgriglia (10, 10);





//inizio il ciclo per individuare le colonne e le righe e inserirle all'interno della griglia
for (let i = 0; i < totalCell; i ++ ){
    //const cella = document.createElement('div');
    const cella = createCell ();
    // aggiungo una classe cella
    // cella.classList.add('cella');
    griglia.appendChild(cella);

// inserire un numero da 1 a 100 in ogni cella
    cella.innerText = (i + 1);

// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
    cella.addEventListener('click', function() {
    cella.classList.toggle ('bg-azzurro');
    }
  )
 
}

// funzione per creare celle
function createCell(){
    const cella = document.createElement('div');
    cella.classList.add('cella');
    return cella;
}



