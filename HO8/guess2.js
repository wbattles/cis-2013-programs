var $ = function (id) {
    return document.getElementById(id);
}

var intMax, intMin, intRandom, intGuess, intCount, intPrevious

function startPlay() {
    userPlay = prompt("Would you like to play a game?")
    if (userPlay === "Yes") {
        guessingGame()
    } else {
        alert(":(")
    }
}

function guessingGame() {
    intMin = parseInt(prompt("Enter lowest number for the guessing game (no less than 0)"));
    while (isNaN(intMin) || intMin <= 0) {
        intMin = parseInt(prompt("Invalid number, try again (no less than 0)"))
    }

    intMax = parseInt(prompt("Enter highest number for the guessing game (at least 2 more than 0)"));
    while (isNaN(intMax) || intMax <= 2 || intMax < intMin) {
        intMax = parseInt(prompt("Invalid number, try again (at least 2 more than 0)"));
    }

    intLimiter = Math.ceil((intMax - intMin) / 2)
    intCount = 0
    intRandom = parseInt(Math.floor(Math.random() * (intMax - intMin + 1)) + intMin);
    intPrevious = []

    while (intGuess !== intRandom && intCount < intLimiter) {
        floatTri1 = parseInt($("guess").value);
        intPrevious.push(intGuess)
        intCount++
        if (intGuess === intRandom) {
            alert("Correct")
            break;
        } else if (intCount >= intLimiter) {
            alert("Out of trys")
            break;
        } else if (isNaN(intGuess) || intGuess < intMin || intGuess > intMax) {
            alert("Outside of range")
        } else {
            if (intGuess > intRandom) {
                alert("Too high")
            } else if (intGuess < intRandom) {
                alert("Too low")
            }
        }
        alert(intPrevious)
        $("output").value = intPrevious
        alert((intLimiter - intCount) + " attempts left")
    }
    var intScore = (((intLimiter-intCount)/intLimiter)*100)
    alert(intCount + " trys" + "\n" + "For a score of " + intScore)
    startPlay()
}


window.onload = function () {
    $("startGame").onclick = guessingGame;
};

/* future features:
* main menu
* limited tries (hangman)
* display guesses
* already chosen 
* only DOM input
* finish screen (another HTML page)


*/