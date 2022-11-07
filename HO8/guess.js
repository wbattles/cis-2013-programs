var intMax, intMin, intRandom, intGuess, intCount


intMin = parseInt(prompt("Enter lowest number for the guessing game (no less than 0)"));
while (isNaN(intMin) || intMin <= 0) {
    intMin = parseInt(prompt("Invalid number, try again (no less than 0)"))
}

intMax = parseInt(prompt("Enter highest number for the guessing game (at least 2 more than 0)"));
while (isNaN(intMax) || intMax < 2 || intMax < intMin) {
    intMax = parseInt(prompt("Invalid number, try again (at least 2 more than 0)"));
}


//var guessing = function (intMin, intMax) {
intCount = 0
intRandom = parseInt(Math.floor(Math.random() * (intMax - intMin + 1)) + intMin);
while (intGuess !== intRandom) {
    intGuess = parseInt(prompt("Guess the number"));
    intCount++
    if (intGuess === intRandom) {
        alert("Correct")
        break;
    } else if (intGuess < intMin || intGuess > intMax) {
        alert("Outside of range")
    } else {
        if (intGuess > intRandom) {
            alert("Too high")
        } else if (intGuess < intRandom) {
            alert("Too low")
        }
    }

}
alert("It took you " + intCount + " trys to guess the number")

//}

