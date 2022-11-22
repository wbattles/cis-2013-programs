var $ = function (id) {
    return document.getElementById(id);
}

var intMax, intMin, intRandom, intGuess, intCount, intPrevious




window.onload = function () {
    $("guess").onclick = guessingGame;
};

/* future features:
* main menu
* limited tries (hangman)
* display guesses
* already chosen 
* only DOM input
* finish screen (another HTML page)


*/