// task 1

const arrayNames = new Array("John", "Jimmy", "Bonzo")
const arrayInstruments = []
arrayInstruments[0] = "bass"
arrayInstruments[1] = "vocals"
arrayInstruments[2] = "guitar"
arrayInstruments[3] = "drums"

var stringMessage = ""
var intCount

for (intCount = 0; intCount < arrayNames.length; intCount++) {
    stringMessage = stringMessage + arrayNames[intCount] + " plays the " + arrayInstruments[intCount] + "\n"
}
alert(stringMessage)


// task 2

var stringTimeTable = ""

for (var x = 1; x <= 12; x++){
    for (var y = 1; y <= 12; y++){
        stringTimeTable = stringTimeTable + " " + x * y + " "
    }
    stringTimeTable = stringTimeTable + "\n"
}

alert(stringTimeTable)


// task 3

var stringEvenTimes = ""
var arrayEvenTable = []


for (var x = 1; x <= 12; x++) {
    arrayEvenTable[x] = []
    for (var y = 1; y <= 12; y++) {
        arrayEvenTable[x][y] = x*y
    }
}

for (var a = 1; a <= 12; a++){
    if (a % 2 === 0) {
        for (var b = 1; b <= 12; b++){
            stringEvenTimes = stringEvenTimes + " " + arrayEvenTable[a][b] + " "
        }
    }
    stringEvenTimes += "\n"
}

alert(stringEvenTimes)


// [[1],[2],[3]...]