
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken


// Funktionsaufrufe
// test()

// Funktionsrumpf / Call
function test()
{
console.log("Hallo, Marius!")
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

//ausgabeNamen()

function ausgabeNamen() {
    let firstName = "Marius"; 
    console.log("Hallo," + firstName + "!")
}


/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

 
 //ausgabeName2("Leyla") // Argument --> Daten für Parameter 

function ausgabeName2(firstName)  // Parameter
{
    console.log("Hallo," + firstName + "!")
}


/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente

//const prompt = require('prompt-sync')({sigint: true});
//ausgabeNamenParams(prompt("Vorname?: "),prompt("Name?: "));


function ausgabeNamenParams(firstName, FamilyName) 
{
    console.log("Hallo, " + firstName + " " + FamilyName + "!")
}


/***** Funktionen 03a *****/
// 03a. Vorbereitung -Trennen der Funktionalitäten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

 //ausgabeNamenSRP("Max","Mütze");



function ausgabeNamenSRP(firstName, familyName) 
{
   // 1. Funktionalität : string composing

   const GAP = " "
    let outputStr = console.log("Hallo, " + firstName + " " + familyName + "!")


   // 2. Funktionalität : string output

    console.log(outputStr)
}


/***** Funktionen 03b *****/

 // 1. Funktionalität: string composing
output(getString("Max", "Mütze"))
function getString(firstName, familyName) {
    const GAP = " ";
  let outputStr = "Hallo " + firstName + GAP + familyName + "!"; 
return outputStr; // output, return schickt die Daten an den call ...


}

// 2. Funktionalität : string output

function output(outputData) {
    console.log(outputData)
}