"use strict";
exports.__esModule = true;
var script_1 = require("./script");
console.log(script_1["default"]);
var guessSubmit = document.querySelector(".guessSubmit");
var guessMessage = document.querySelector("#guessMessage");
var guesses = document.querySelector('#guesses').value;
console.log(guesses);
function colorGuesses() {
    if (guesses.toString == script_1["default"].toString) {
        guessSubmit.addEventListener('click', function () {
            guessMessage.style.backgroundColor = 'red';
        });
    }
}
guessSubmit.addEventListener('click', colorGuesses);
