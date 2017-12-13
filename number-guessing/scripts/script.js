var randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);
var guessSubmit = document.querySelector(".guessSubmit");
var para = document.querySelector('.prevGuesses');
var guessMessage = document.getElementById("guessMessage");
var array = [];
var gameCounter = 0;
var lastValue;
var trys = 0;
var rounds;





function roundCounter(){
    rounds = 10 - trys;
}
function reload(){
    location.reload();
}
function showGuesses() {
    if (array.length < 11 && lastValue != randomNumber) {
        var guesses = document.getElementById("guesses").value;
        array.push(guesses);

        para.textContent = array;
        gameCounter++;
        lastValue = array[array.length - 1];
    }
    if (lastValue == randomNumber) {    
        guessMessage.textContent = "You have won! Congratulations!";
        gameOver.parentNode.removeChild(gameOver);
        var x = document.createElement("BUTTON");
        var t = document.createTextNode("Restart Game");
        x.appendChild(t);
        document.body.appendChild(x);
        x.setAttribute("class", "newButton");
        var newButton = document.querySelector(".newButton");
        newButton.addEventListener('click', reload);
    }
    if (lastValue != randomNumber) {

        ++trys;
        roundCounter();
        guessMessage.textContent = "Wrong guess! Try again! "+rounds+" left!";
        if(array.length == 10){
            trys = 0;
        }
    }
    if (array.length == 10) {
        para.textContent = "";
        gameCounter = 0;
        array = [];
    }

}


guessSubmit.addEventListener('click', showGuesses);


