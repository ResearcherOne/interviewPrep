"use strict";

function atoiPositiveOnly ( numberString ) {
	const numberLenght = numberString.length;
	var total = 0;
	
	for ( var i = 0; i < numberLenght; i++ ) {
		const currentChar = numberString.charAt(i);
		total *= 10;
		total += parseInt(currentChar);
	}
	
	return total;
}

function atoi ( numberString ) {
	const numberLenght = numberString.length;
	var total = 0;
	var isNegative = false;
	
	for ( var i = 0; i < numberLenght; i++ ) {
		const currentChar = numberString.charAt(i);
		if( i == 0) {
			isNegative = (currentChar == '-');
		} else {
			total *= 10;
			total += parseInt(currentChar);		
		}
	}
	if (isNegative) total *= -1;
	
	return total;
}

const stringNumberPositive = "12679";
const stringNumberNegative = "-12679";

const positiveResult = atoiPositiveOnly(stringNumberPositive);
const negativeResult = atoiPositiveOnly(stringNumberNegative);

const positiveResultAtoi = atoi(stringNumberPositive);
const negativeResultAtoi = atoi(stringNumberNegative);

console.log("Postive Result: " + positiveResult + "/"+stringNumberPositive);
console.log("Wrong Negative Result: " + negativeResult + "/"+stringNumberNegative);

console.log("Postive Result: " + positiveResultAtoi + "/"+stringNumberPositive);
console.log("Wrong Negative Result: " + negativeResultAtoi + "/"+stringNumberNegative);