
/* Berechnung Alter */

// Deklaration
let ageJohn, ageMark;
const birthYearJohn = 1990;
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
let istJohnOlder;  // Is John older? --> y/n --> true or false 
istJohnOlder = (ageJohn > ageMark); //Test
istMarkOlder = (ageJohn < ageMark)
isJohnEqual =  (ageJohn == ageMark)

console.log (istJohnOlder);
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

if (istJohnOlder) 
{
    console.log("John is älter")  
} 

else if (isJohnEqual) 
    {
        console.log("John ist gleich alt")  
    } 


else 
{
    console.log("John is jünger")
}


