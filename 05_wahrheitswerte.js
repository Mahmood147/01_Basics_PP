
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
/** 
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
*/

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

/**if (istJohnOlder) 
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
*/

//const firstName = "Jane";

 //job = "driver";  // .. fährt TAXI! / UBER
 //job = "diver"; // .. taucht im Rhein! 
  //job = "artist"; // .. malt ein Bild!
 //job = "pilot"; // .. macht etwas anderes! --> default
//job = "teacher"; // .. unterrichtet!
// job = "instructor"; // .. unterrichtet!

/** 
switch (job) 
{
    case"driver":
        console.log(firstName+ "..fährt Taxi");
        break;
       
    case"diver":
         console.log(firstName+ "..taucht im rhein");
         break;    

    case"artist":
         console.log(firstName+ "..malt ein Bild");
         break;

    case"teacher":
         console.log(firstName+ " ..Unterrichtet");
         break;

    default: 
        console.log(firstName + "..macht etwas anderes!");
        break;
}
/*

/********  Fallunterscheidung / SWITCH|CASE 2 *******/

/**const cond = false;
const value = 1;

switch (cond) 
{
    case (value == 1):
        console.log("Value hat den Wert 1.");
        break;
    case (value == 2):
        console.log("Value hat den Wert 2.");
        break;
    default:
        console.log("Value hat einen anderen Wert.");
        break;
}
*/