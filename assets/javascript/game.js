// JS for The Psychic Game


// DECLARE VARIABLES

let letterBin = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let compChoice = letterBin[Math.floor(Math.random() * letterBin.length)];

let wins = 0;
let losses = 0;

let guessesLeft = 9;
let yourGuesses = [];

let userChoice;


// DECLARE FUNCTION EXPRESSION VARIABLES

document.onkeyup = function (event) {
    userChoice = event.key.toLowerCase();
    play();
}

let reset = function () {
    guessesLeft = 9;
    document.getElementById("uLeft").textContent = guessesLeft;
    yourGuesses = [];
    document.getElementById("uGuess").textContent = yourGuesses;
    compChoice = letterBin[Math.floor(Math.random() * letterBin.length)];
}

let play = function () {

    if (userChoice === compChoice) {
        reset();
        wins = wins + 1;
        document.getElementById("uWin").textContent = wins;
    } else if (userChoice !== compChoice && guessesLeft > 1) {
        guessesLeft = guessesLeft - 1;
        document.getElementById("uLeft").textContent = guessesLeft;
        yourGuesses.push(" " + userChoice);
        document.getElementById("uGuess").textContent = yourGuesses;
    } else {
        reset();
        losses = losses + 1;
        document.getElementById("uLose").textContent = losses;
    };
}


// WRITE INITIAL VALUES OF VARIABLES ON PAGE LOAD

document.getElementById("uWin").textContent = wins;
document.getElementById("uLose").textContent = losses;
document.getElementById("uLeft").textContent = guessesLeft;
document.getElementById("uGuess").textContent = yourGuesses;