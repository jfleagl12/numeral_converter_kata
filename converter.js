var num = prompt("Please type in any number or roman numeral");

var num1 = function(num) {
    
var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

// Need to create an if/else statement for arabic vs roman numeral.
// if ();
//  do something.
// else ();
//  do something else.


// Next step Loops through the indices of the decimalValue array.
  for (var index = 0; index < decimalValue.length; index++) {
    // Continue to loop while the value at the current index will fit into num.
    while (decimalValue[index] <= num) {
      // Add the Roman numeral & decrease num by the decimal equivalent.
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

//   return something;
};

