
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

ausgabeName2("Adrian"); // Argument --> Daten für Parameter 
ausgabeName2("Mahmood")
ausgabeName2("Leyla")

function ausgabeName2(firstName)  // Parameter
{
    console.log("Hallo," + firstName + "!")
}