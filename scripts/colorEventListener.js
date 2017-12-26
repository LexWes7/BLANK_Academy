function highlightResponse() {
    var guesses2 = document.getElementById("guesses").value;
    
    if (guesses2 !== randomNumber) {
            guessResponse.style.backgroundColor = 'red';
    }
    if (guesses2 == randomNumber) {
            guessResponse.style.backgroundColor = 'green';
    }
}