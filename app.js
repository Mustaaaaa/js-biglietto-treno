/*Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
oppure applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va stampato in console in forma “umana” cioè con al massimo due decimali, per indicare centesimi sul prezzo. Questo richiederà un minimo di ricerca.*/

/* inserisci l'età del passeggero e il totale dei km */
const numero = parseInt(prompt('Età del passeggero')); //String
const numero1 = parseFloat(prompt('Numero di km')); //String
/* prezzo al km */
let prezzoKm = 0.21; //Number
/* prezzo di tutti i km percorsi */
var prezzotot = (numero1 * prezzoKm);

/* sconto del 20% per i minorenni osconto del 40% per gli over 65 */
if (18 <= numero <= 65) {
    var prezzotot = prezzotot; //Number

    console.log('Il prezzo è di ' + prezzotot.toFixed(2));
}else if(numero < 18) {
    var prezzotot = ((prezzotot * 80) / 100); //Number
    
    console.log('Il prezzo è di ' + prezzotot.toFixed(2));
}









