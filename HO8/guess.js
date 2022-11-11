var intMax, intMin, intRandom, intGuess, intCount


// user input for lowest number of guesing range, checks value
intMin = parseInt(prompt("Enter lowest number for the guessing game (no less than 0)"));
while (isNaN(intMin) || intMin <= 0) {
    intMin = parseInt(prompt("Invalid number, try again (no less than 0)"))
}

// use input for highest number of guessing range, checks value
intMax = parseInt(prompt("Enter highest number for the guessing game (at least 2 more than 0)"));
while (isNaN(intMax) || intMax < 2 || intMax < intMin) {
    intMax = parseInt(prompt("Invalid number, try again (at least 2 more than 0)"));
}


// initialize count, generate random number within range
intCount = 0
intRandom = parseInt(Math.floor(Math.random() * (intMax - intMin + 1)) + intMin);

// loop until user enters correct value, count attempts
while (intGuess !== intRandom) {
    intGuess = parseInt(prompt("Guess the number"));
    intCount++
    // success message
    if (intGuess === intRandom) {
        alert("Correct")
        break;
    // compares user input to entered range
    } else if (isNan(intGuess) || intGuess < intMin || intGuess > intMax) {
        alert("Outside of range")
    // compare user input to correct value
    } else {
        if (intGuess > intRandom) {
            alert("Too high")
        } else if (intGuess < intRandom) {
            alert("Too low")
        }
    }

}
// message, guess count
alert("It took you " + intCount + " trys to guess the number");
