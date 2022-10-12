//Declare variables intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade
//Get user input to determine grade
//Calculate floatTotalPts (sum of HW and exam pts)
//Get user input on whether the course is audit pass/fail (1) or letter grade (2)
//If the grade option is audit, evaluate total score based upon 80% cutoff scorefor pass/fail
//Else determine letter grade based upon the typical A = 90%, B - 80%, etc.
//Output stringFinalGrade

var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;


floatHwPts = parseFloat(prompt("Please enter final HW pts (0-30):"));
floatMidPts = parseFloat(prompt("Please enter Midterm pts (0-35):"));
floatFinPts = parseFloat(prompt("Please enter Final pts (0-35):"));

//add total pts 
floatTotalPts = parseFloat(floatHwPts + floatMidPts + floatFinPts);

//pass or fail
intGradeOption = parseInt(prompt("Letter grade (1) or pass/fail (2):"));


if (intGradeOption === 1) {
    if (floatTotalPts >= 90) {
        stringFinalGrade = "A";
    } else {
        if (floatTotalPts >= 80 && floatTotalPts < 90) {
            stringFinalGrade = "B";
        } else {
            if (floatTotalPts >= 70 && floatTotalPts < 80) {
                stringFinalGrade = "C";
            } else {
                if (floatTotalPts >= 60 && floatTotalPts < 70) {
                    stringFinalGrade = "D";
                } else {
                    if (floatTotalPts >= 60 && floatTotalPts < 70) {
                        stringFinalGrade = "D";
                    } else {
                        if (floatTotalPts < 60) {
                            stringFinalGrade = "F";
                        }
                    }
                }
            }
        }
    }
} else {
    if (floatTotalPts > 50) {
        stringFinalGrade = "Pass"
    } else {
        stringFinalGrade = "Fail"
    }
}

alert("Your final grade is: " + stringFinalGrade);