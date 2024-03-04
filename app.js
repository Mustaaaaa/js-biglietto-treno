/*Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
oppure applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va stampato in console in forma “umana” cioè con al massimo due decimali, per indicare centesimi sul prezzo. Questo richiederà un minimo di ricerca.*/

/* inserisci l'età del passeggero */
const eta = parseInt(prompt('Età del passeggero')); //Number
console.log('Età del passeggero: ' + eta);
/*inserisci il totale dei km percorsi */
const km = parseFloat(prompt('Numero di km')); //Number
console.log('Numero di km: ' + km);

/* prezzi al km per le varie fasce di età*/
var prezzokm = 0.21; //Number
var prezzokmunder = ((0.21 * 80) / 100); //Number
var prezzokmover = ((0.21 * 60) / 100); //Number

/* se il cliente ha un età maggiore uguale a 65 anni allora applica il seguente sconto*/
if (eta >= 65) {
    var prezzototover = (prezzokmover * km); //Number

    console.log('Il prezzo è di ' + prezzototover.toFixed(2));
    console.log('Il prezzo è di ' + prezzokmover.toFixed(2) + ' al km per gli over 65');
}
/* se il cliente ha un età minore di 18 anni allora applica il seguente sconto */
else if (eta < 18) {
    var prezzototunder = (prezzokmunder * km); //Number
    
    console.log('Il prezzo è di ' + prezzototunder.toFixed(2));
    console.log('Il prezzo è di ' + prezzokmunder.toFixed(2) + ' al km per gli under 18');
}
/* altrimenti non applicare nessuno sconto*/
else {
    var prezzokmnormale = (prezzokm * km); //Number
    
    console.log('Il prezzo è di ' + prezzokmnormale.toFixed(2));
    console.log('Il prezzo è di ' + prezzokm.toFixed(2) + ' al km per gli over 18 e gli under 65');
}









