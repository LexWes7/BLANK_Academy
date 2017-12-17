import randomNumber from "./script";
console.log(randomNumber);
var guessSubmit = document.querySelector(".guessSubmit");
var guessMessage = <HTMLInputElement>document.querySelector("#guessMessage");
var guesses = (<HTMLInputElement>document.querySelector('#guesses')).value;
console.log(guesses);

function colorGuesses() {
if (guesses.toString == randomNumber.toString) {
    
        guessSubmit.addEventListener('click', function () {
            guessMessage.style.backgroundColor = 'red';
        });
    }
}
guessSubmit.addEventListener('click', colorGuesses);