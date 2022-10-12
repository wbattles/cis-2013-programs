var $ = function (id) {
    return document.getElementById(id);
}

var calculate = function () {
    var floatHwPts, floatMidPts, floatFinPts, floatTotalPts, stringPassFail, stringFinalGrade;
    floatHwPts = parseFloat($("hw_points").value);
    floatMidPts = parseFloat($("midterm_points").value);
    floatFinPts = parseFloat($("final_points").value);
    stringPassFail = ($("pass_fail").value);
    floatTotalPts = floatHwPts + floatMidPts + floatFinPts
    if (stringPassFail === "grade") {
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
    $("letter_grade").value = stringFinalGrade;

}

function limiter(hw_points) {
    if ($("hw_points").value < 0) $("hw_points").value = 0;
    if ($("hw_points").value > 35) $("hw_points").value = 30;
}

function limiter2(midterm_points) {
    if ($("midterm_points").value < 0) $("midterm_points").value = 0;
    if ($("midterm_points").value > 35) $("midterm_points").value = 35;
}

function limiter3(final_points) {
    if ($("final_points").value < 0) $("final_points").value = 0;
    if ($("final_points").value > 35) $("final_points").value = 35;
}

window.onload = function () {
    $("calc").onclick = calculate;
}