var num = prompt("Please type in any number or roman numeral");

//Need two different functions: toRoman & toDecimal for conversion of rom numerals to decimals and vice versa

function toRoman(num) {
    
var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

// Next step Loops through the indices of the decimalValue array.
  for (var i = 0; i < decimalValue.length; i++) {
    // Continue to loop while the value at the current index will fit into num.
    while (decimalValue[i] <= num) {
      // Add the Roman numeral & decrease num by the decimal equivalent.
      romanized += romanNumeral[i];
      num -= decimalValue[i];
    }
  }
    return toRoman(num);
};




function toDecimal(num) {
    
var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

var decimal = '';

  for (var i = 0; i < decimalValue.length; i++) {
  while (decimalValue[i] <= num) {
      decimal += romanNumeral[i];
      num -= decimalValue[i];
    }
  }
  return toDecimal(num);
 };





