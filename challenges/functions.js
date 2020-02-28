
// Callbacks

// Step 1: Create a higher-order function that will accept 3 parameters. The first two can take any argument. The last is your callback. This function should return your callback that passed the first two parameters as its argument.

function consume(x, y, cb) {
  return cb(x, y);
}

/* Step 2: Create several functions that you will callback with the previous higher order function.
The first will return the sum of two numbers.
The second will return the product of two numbers.
The third will return the modulus of the two numbers.
The fourth will return the quotient of the two numbers.
The fifth will return the square root of the two numbers.
The sixth will accept a first and last name and return 'Hey, firstName lastName, youre a wicked cool dev'.
The seventh will return whether the firstString is included the secondString.
The eigth will return whether the firstNumber is greater than the secondNumber.
The ninth will return whether the firstNumber is less than the secondNumber.
The tenth will return whether the firstNumber is greater than or equal to the secondNumber.
The eleventh will return whether the firstNumber is less than or equal to the secondNumber.
The twelvth will return whether the firstNumber is equivalent to the secondNumber.
The thirteenth will return a string 'Hey the number is firstNumber' if firstNumber is greater than the secondNumber. If it isn't, return a string 'Hey the number is secondNumber'
*/
function add(num1, num2) {
  return num1 + num2;
}

// The second will return the product of two numbers.
function multiply(num1, num2) {
  return num1 * num2;
}
// The third will return the modulus of the two numbers.
function remainder(num1, num2) {
  return num1 % num2;
}
// The fourth will return the quotient of the two numbers.
function divide(num1, num2) {
  return num1/num2;
}
// The fifth will return the square root of the two numbers.
function square(num1, num2) {
  let var1 = Math.sqrt(num1);
  let var2 = Math.sqrt(num2);
  // return var1 + " " + var2;
  return `${var1} ${var2}`;
}
// The sixth will accept a first and last name and return 'Hey, firstName lastName, youre a wicked cool dev'.
function stringReturn(firstName, lastName) {
  return `Hey, ${firstName} ${lastName}, youre a wicked cool dev`;
}
// The seventh will return whether the firstString is included the secondString.
function stringIncludes(firstString, secondString) {
  return secondString.includes(firstString);
}
// The eigth will return whether the firstNumber is greater than the secondNumber.
function numCompare1(x, y) {
  return x > y;
}
// The ninth will return whether the firstNumber is less than the secondNumber.
function numCompare2(x,y) {
  return x < y;
}
// The tenth will return whether the firstNumber is greater than or equal to the secondNumber.
function numCompare3(x,y) {
  return x >= y;
}
// The eleventh will return whether the firstNumber is less than or equal to the secondNumber.
function numCompare4(x,y) {
  return x <= y;
}
// The twelvth will return whether the firstNumber is equivalent to the secondNumber.
function numCompare5(x,y) {
  return x === y;
}
// The thirteenth will return a string 'Hey the number is firstNumber' if firstNumber is greater than the secondNumber. If it isn't, return a string 'Hey the number is secondNumber'
function numCompare6(x, y) {
  if(x > y) {
    return `Hey the number is ${x}`;
  } else {
    return `Hey the number is ${y}`;
  }
}


// Step 3: Check your work using console.log and invoke your higher order function.
console.log(consume(1, 2, add), "This is to add");
console.log(consume(2, 2, multiply));
console.log(consume(2, 3, remainder));
console.log(consume(2, 4, divide));
console.log(consume(4, 16, square));
console.log(consume('bob', 'bobbington', stringReturn));
console.log(consume('bob', 'bob went to the store', stringIncludes));
console.log(consume(2,5, numCompare1));
console.log(consume(2,5, numCompare2));
console.log(consume(2,5, numCompare3));
console.log(consume(2,5, numCompare4));
console.log(consume(2,5, numCompare5));
console.log(consume(2,5, numCompare6));
