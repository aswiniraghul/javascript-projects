//Exercise #1: Construct for loops that accomplish the following tasks:
    //a. Print the numbers 0 - 20, one number per line.
     
   for (let i=0; i<=20 ; i++) {
    console.log(" The numbers are",+i);
  }
   
  
  //b. Print only the ODD values from 3 - 29, one number per line.
    console.log("The odd values from 3-29 :")
   for (let i = 3; i <= 29; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
  }


    //c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
   
    console.log("The even numbers 12 to -14 in decending order is :")    
  for (let i = 12; i >= -14; i--) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
  
  //d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */
   console.log(" The numbers 50 -20 in decending order is :");
    for (let i = 50; i >= 20; i--) {
      if (i % 3 === 0) {
          console.log(i);
      }
  }


//Exercise #2: 
//Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].

let string = "LaunchCode";
let names = [1, 5, 'LC101', 'blue', 42];


//Construct ``for`` loops to accomplish the following tasks:
  //a. Print each element of the array to a new line.
  console.log("Array elements are :")
for (let i = 0; i < names.length; i++) {
   console.log(names[i]);
}

 // b. Print each character of the string - in reverse order - to a new line. */ 
  let reversed = "";

  console.log("The Strings in reverse order is :")
  
    for (let i = 0; i<string.length; i++) {
    reversed = string[i] + reversed;
   }
  
  console.log(reversed);




//*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:

 // a. One array contains the even numbers, and the other holds the odds.
  
  let Array = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
  let evens = [];
  let odds = [];
  
  for (let i = 0; i < Array.length; i++) {
    if (Array[i] % 2 === 0) {
      evens.push(Array[i]);
    } else {
      odds.push(Array[i]);
    }
  }

 // b. Print the arrays to confirm the results.

  console.log(evens);
  console.log(odds);
