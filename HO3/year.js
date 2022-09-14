//declare varaible, hungarian camelCase
var floatAge, floatDays, intWeeks, floatMonths, intFortnights

//input age in years, force type float
floatAge = parseFloat(prompt('Enter your age'));
if (Number.isInteger(floatAge) === false) {
    alert('Wrong')
} else {
    //perform the calculations
    floatDays = parseFloat(floatAge * 365.25)
    intWeeks = parseInt(floatAge * 52)
    floatMonths = parseFloat(floatAge * 12)
    intFortnights = parseInt(floatDays / 14)

    //display the results, new line for each value
    alert('You are... ' + '\n' +
        floatAge + ' years old' + '\n' +
        floatDays + ' days old' + '\n' +
        intWeeks + ' weeks old' + '\n' +
        floatMonths + ' months old' + '\n' +
        intFortnights + ' fornights old');
}



