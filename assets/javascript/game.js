// JS for The Psychic Game

// DECLARE VARIABLES

let letterBin = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// let compChoice = letterBin[Math.floor(Math.random() * letterBin.length)];
let compChoice = "x";

let wins = 0;
let losses = 0;

let reset = function () {
    guessesLeft = 9;
    document.getElementById("uLeft").textContent = guessesLeft;
    yourGuesses = [];
    document.getElementById("uGuess").textContent = yourGuesses;
    compChoice = letterBin[Math.floor(Math.random() * letterBin.length)];
    document.getElementById("cLetter").textContent = compChoice;
}

let guessesLeft = 9;
let yourGuesses = [" a", " b", " c"];


let userChoice = "x";

document.onkeyup = function (event) {

    // THIS STATEMENT DOES NOT WORK
    // WHY WONT THE VALUE OF THE GLOBAL userChoice VARIABLE CHANGE?
    userChoice = event.key.toLowerCase();

    if (userChoice === compChoice) {
        wins++;
        reset();
    }


}


// THIS FUNCTION WORKS
document.onkeyup = function (event) {

    let keyPress = event.key.toLowerCase();

    if (keyPress === "h") {
        alert("hi there!");
    };

}







document.getElementById("uWin").textContent = wins;
document.getElementById("uLose").textContent = losses;
document.getElementById("uLeft").textContent = guessesLeft;
document.getElementById("uGuess").textContent = yourGuesses;

// DEV OUTPUT ONLY--NO OUTPUT FOR PRODUCTION
document.getElementById("cLetter").textContent = compChoice;
document.getElementById("uLetter").textContent = userChoice;