var num = prompt("Please type in any number or roman numeral");

function toRoman(num) {
    
var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

// Need to create an if/else statement for arabic vs roman numeral.
// if ();
//  do something.
// else ();
//  do something else.


// Next step Loops through the indices of the decimalValue array.
  for (var i = 0; i < decimalValue.length; i++) {
    // Continue to loop while the value at the current index will fit into num.
    while (decimalValue[i] <= num) {
      // Add the Roman numeral & decrease num by the decimal equivalent.
      romanized += romanNumeral[i];
      num -= decimalValue[i];
    }
  }

};




// function toDecimal(num) {
    
// var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
// var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];


// };



// need to execute 2 different functions for user input either decimal or roman numeral.
//   if num === decimalValue[] {
//       return toRoman(num);
// } else num === romanNumeral[] {
//      return toDecimal(num);
// };


