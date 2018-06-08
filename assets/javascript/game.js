

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

document.onkeyup = function (event) {
    var userGuess = event.key;
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];

    if (letters.indexOf(userGuess) > -1) {

        if (userGuess === computerGuess) {
            wins++;
            guessesLeft = 9;
            guessedLetters = [];
        }

        if (userGuess != computerGuess) {
            guessesLeft--;
            guessedLetters.push(userGuess);
        }

        if (guessesLeft === 0) {
            guessesLeft = 9;
            losses++;
            guessedLetters = [];
        }

        document.querySelector("#wins").innerHTML = "Wins: " + wins;
        document.querySelector("#losses").innerHTML = "Losses: " + losses;
        document.querySelector("#guessesLeft").innerHTML = "Guesses left: " + guessesLeft;
        document.querySelector("#guessedLetters").innerHTML = "Your guessed letters so far: " + guessedLetters;

    }
}




