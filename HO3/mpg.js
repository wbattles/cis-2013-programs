var floatMiles = parseFloat(prompt('Enter miles driven'));
if (floatMiles == null) {
    alert('Canceled');
}

var floatGas = parseFloat(prompt('Enter gallons of gas used'));
if (floatMiles == null) {
    alert('Canceled');
}

var floatMpg = parseFloat(floatMiles / floatGas);
alert('Your car has: ' + floatMpg + 'mpg');
