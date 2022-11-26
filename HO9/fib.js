//Simple function used to access elements on the html DOM
var $ = function (id) {
    return document.getElementById(id);
}

//Fibonacci series to show and the then runs a loop to create the output
var generate = function () {
    var intCount = parseInt($("total_fib").value);
    //validate user input, break with labled if statement
    valueCheck: if (isNaN(intCount) || intCount <= 1 || intCount >= 100) {
        alert("Please enter a number between 1-100")
        //sets the DOM values back
        $("total_fib").value = ""
        $("output").value = ""
        break valueCheck;
    } else {
        var i = 0;  // sets the first number in the Fibonacci series to 0
        var j = 1;  // sets the second number in the Fibonacci series to 1
        var k;      // k is calculated by adding i+j and represents the next Fibonacci number
        var stringOutput = [0, " 1"];// initialize array to include the first two numbers

        // calculates given Fibonacci numbers
        while (intCount > 2) {
            k = i + j
            i = j
            j = k
            // add number to array
            stringOutput.push(" " + k)
            intCount--
        }
        //sends output to html
        $("output").value = stringOutput;
    }

}

window.onload = function () {
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
}  