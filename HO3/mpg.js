//input miles, force type integer
var intMiles = parseInt(prompt('Enter miles driven'));
if (intMiles == null) {
    alert('Canceled');
}

//input gallons, force type float
var floatGas = parseFloat(prompt('Enter gallons of gas used'));
if (floatMiles == null) {
    alert('Canceled');
}

//calculate mpg, display output
var floatMpg = parseFloat(floatMiles / floatGas);
alert('Your car has: ' + floatMpg + 'mpg');
