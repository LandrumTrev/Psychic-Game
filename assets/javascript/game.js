// JS for The Psychic Game

// DECLARE VARIABLES

let wins = 0;
let losses = 0;
let guessesLeft = 9;
let yourGuesses = [" a", " b", " c"];
let letterBin = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
let compLetter = "x";

let userKey = "y";
// let keyPressed = function() {
//     let x = document.getElementById("uLetter").value;
//     document.getElementById("uLetter").innerText = x;
// };

let reset = function() {
    guessesLeft = 9;
    document.getElementById("uLeft").textContent = guessesLeft;
    yourGuesses = [];
    document.getElementById("uGuess").textContent = yourGuesses;
    compLetter = "z";
    document.getElementById("cLetter").textContent = compLetter;
}

document.getElementById("uWin").textContent = wins;
document.getElementById("uLose").textContent = losses;
document.getElementById("uLeft").textContent = guessesLeft;
document.getElementById("uGuess").textContent = yourGuesses;

// DEV OUTPUT ONLY--NO OUTPUT FOR PRODUCTION
document.getElementById("cLetter").textContent = compLetter;
document.getElementById("uLetter").textContent = userKey;

// document.addEventListener("keyup", function() {
//     document.getElementById("uLetter").textContent = KeyboardEvent.key;
// });

// document.getElementById("uLetter").textContent = keyup.key;



