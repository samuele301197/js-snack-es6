// Snack 1
// Creare un array di oggetti
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà nome e peso.
// Stampare a schermo oppure in console la bici con peso minore.


const bici = [
    { nome: "Varietà 1", peso: 10},
    { nome: "Varietà 2", peso: 13},
    { nome: "Varietà 3", peso: 4},
    { nome: "Varietà 4", peso: 11},
    { nome: "Varietà 5", peso: 2},
    { nome: "Varietà 6", peso: 5},
    { nome: "Varietà 7", peso: 8},
    { nome: "Varietà 8", peso: 3},
    { nome: "Varietà 9", peso: 6},
    { nome: "Varietà 10", peso: 14},
  ];

  let biciLeggera = bici[0];   //   variabile di appoggio per iniziare un confronto
  
for (let i = 0; i < bici.length; i++){  // ciclo di di ispezione dell'array
   if (bici[i].peso < biciLeggera.peso) { // condizione di confronto
    biciLeggera = bici[i];   // cambia il valore della variabile in base al peso delle bici ispezionate
}
}
console.log(biciLeggera.peso, biciLeggera.nome);



//   Creare un array di oggetti di squadre di calcio.
//  Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// // Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadre = [
    { nome: "Milan", puntiFatti: 0, golSubiti: 0},
    { nome: "Inter", puntiFatti: 0, golSubiti: 0},
    { nome: "Inter", puntiFatti: 0, golSubiti: 0},
    { nome: "Inter", puntiFatti: 0, golSubiti: 0},
    { nome: "Juventus", puntiFatti: 0, golSubiti: 0},
    { nome: "Bologna", puntiFatti: 0, golSubiti: 0},
    { nome: "Atalanta", puntiFatti: 0, golSubiti: 0},
    { nome: "Lazio", puntiFatti: 0, golSubiti: 0},
    { nome: "Fiorentina", puntiFatti: 0, golSubiti: 0},
    { nome: "Roma", puntiFatti: 0, golSubiti: 0},
    { nome: "Monza", puntiFatti: 0, golSubiti: 0},
    { nome: "Milazzo", puntiFatti: 0, golSubiti: 0},
  ];

  for (let i = 0; i < squadre.length; i++) {
    const curPoints = squadre[i];
    const curGol = squadre[i];
    curPoints.puntiFatti = Math.floor(Math.random() * 100);
    curGol.golSubiti = Math.floor(Math.random() * 100);
  }  console.log(squadre);


  
const squadre2 = [];

for (let i = 0; i < squadre.length; i++) {
    squadre2.push({nome: squadre[i].nome, golSubiti: squadre[i].golSubiti})
}

console.log(squadre2);


  
 
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. Non usare i metodi di array di JS


const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function myFunction(array, numero1, numero2) {
    let array1 = [];
    for (let i = numero1; i <= numero2; i++) {
        array1.push(array[i]);
    } 
    return array1;
}
const risultato = myFunction(numeri, 2, 5);
console.log(risultato);



const numbersMy = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

function myNumbers(array, a, b) {
    let nuovo = [];

    for (let i = a; i <= b; i++) {
      nuovo.push(numbersMy[i]);
    }

    return nuovo;
}

const ciao = myNumbers(numbersMy, 3, 6);
console.log(ciao);
