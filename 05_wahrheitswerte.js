
/* Berechnung Alter */

// Deklaration
let ageJohn, ageMark;
const birthYearJohn = 1980;
const birthYearMark = 1990;

/**  Berechnung Alter version 1
let year = 2024;
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;
*/

let date = new Date();
console.log("Datum " + date);
console.log("Jahr " + date.getFullYear());
let year = date.getFullYear();

ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;


// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);

// Deklaration 
let istJahnOlder;  // Is John older? --> y/n --> true or false 
istJahnOlder = (ageJohn > ageMark); //Test
istMarkOlder = (ageJohn < ageMark)
console.log (istJahnOlder);
console.log("---------------")

/************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos
// Türsteher-Politik (Doors 10 p.m.)

//if(true)
//if(false)
//if(isJahnOlder)
//{
//        console.log("John is älter")
//}


/************ IF - ELSE  ************/
// mit Alternative  
// entweder ja oder nein

if (istMarkOlder) 
{
    console.log("John is älter")
    
} 
else 
{
    console.log("John is jünger")
}