
// Callbacks

// Step 1: Create a higher-order function that will accept 3 parameters. The first two can take any argument. The last is your callback. This function should return your callback that passed the first two parameters as its argument.
function highOrder(param1, param2, cb) {
  return cb(param1, param2);
}
// Step 2: Create several functions that you will callback with the previous higher order function.
// The first will return the sum of two numbers.
function add(num1, num2) {
  return num1 + num2;
}
console.log(highOrder(2, 13, add), "Add Function");
console.log(highOrder(43154, 45345624, add));
console.log(highOrder(3, 26, add));
// The second will return the product of two numbers.
function multiply(num1, num2) {
  return num1 * num2;
}
console.log(highOrder(2, 13, multiply), "Multiply function",highOrder(2, 14, add), "Add Function", highOrder("Jay", "Leach", stringReturn));
console.table(highOrder(2, 13, multiply), "Multiply function",highOrder(2, 14, add))
// The third will return the modulus of the two numbers.
// The fourth will return the quotient of the two numbers.
// The fifth will return the square root of the two numbers.
// The sixth will accept a first and last name and return 'Hey, firstName lastName, youre a wicked cool dev'.
function stringReturn(firstString, secondString) {
  return `Hey, ${firstString} ${secondString}, youre a wicked cool dev`
}
console.log(highOrder("Jay", "Leach", stringReturn));
// The seventh will return whether the firstString is included the secondString.
// The eigth will return whether the firstNumber is greater than the secondNumber.
// The ninth will return whether the firstNumber is less than the secondNumber.
// The tenth will return whether the firstNumber is greater than or equal to the secondNumber.
// The eleventh will return whether the firstNumber is less than or equal to the secondNumber.
// The twelvth will return whether the firstNumber is equivalent to the secondNumber.
// The thirteenth will return a string 'Hey the number is firstNumber' if firstNumber is greater than the secondNumber. If it isn't, return a string 'Hey the number is secondNumber'



// Step 3: Check your work using console.log and invoke your higher order function.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'Book', 'Pen', 'Headphones', 'Candy'];

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback
  cb(arr.length);
}

getLength(items, (lengthoflist) => {
  console.log(lengthoflist);
});

function last(arr, cb) {
  // last passes the last item of the array into the callback
  cb(arr[arr.length - 1]);
}

last(items, (lastoflist) => {
  console.log(lastoflist)
})

function contains(item, arr, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if so, otherwise false.
  if(arr.includes(item)) {
    return cb(true);
  } else {
    return cb(false);
  }
}

contains('bob', items, function(value) {
  console.log(value);
})
