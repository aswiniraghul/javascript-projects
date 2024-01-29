//The following concept check assumes that only positive integers are passed to the function.

function factorial(integer){
  if (integer===0 ||integer===0) {
    return integer;
  } else {
    return integer*(factorial(integer-1));
  }
}

// console.log(factorial(4));

//Skill boost! Add validation to return an error message if the function is passed a string, negative number or a decimal value.
// function factorial(integer) {
//   // Base case
//   if (integer === 0 || integer === 1) {
//       return 1;
//   } else {
//       // Recursive case
//       return integer * factorial(integer - 1);
//   }
// }

// // Testing the factorial function
// let result1 = factorial(4); // 4! = 4*3*2*1 = 24
// console.log("Factorial of 4:", result1);

// let result2 = factorial(5); // 5! = 5*4*3*2*1 = 120
// console.log("Factorial of 5:", result2);
