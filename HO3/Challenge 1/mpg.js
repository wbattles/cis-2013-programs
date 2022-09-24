var intMiles, floatGas, floatMpg

//input miles, force type integer
intMiles = parseInt(prompt('Enter miles driven'));
if (intMiles == null) {
    alert('Canceled');
}

//input gallons, force type float
floatGas = parseFloat(prompt('Enter gallons of gas used'));
if (floatGas == null) {
    alert('Canceled');
}

//calculate mpg, display output
floatMpg = parseFloat(intMiles / floatGas);
alert('Your car has: ' + floatMpg + ' mpg');
