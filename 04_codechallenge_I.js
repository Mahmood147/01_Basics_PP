
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt = require('prompt-sync')({sigint: true});
let Zahl1 = prompt ("Gebe Zahl ein:");
let Zahl2 = prompt ("Gebe Zahl ein:");
let summe = Number(Zahl1) + Number(Zahl2);

console.log("Die Summe der Zahlen ist:" + summe);