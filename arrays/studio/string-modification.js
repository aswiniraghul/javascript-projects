const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let newStr = str.slice(3) + str.slice(0,3);
console.log("newstr is: " + newStr);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`String ${str} is modified to ${newStr}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let lettersToRelocate = input.question("Please enter the number of letters to relocate: ");

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

let defaultLettersToRelocate = 3;
if (lettersToRelocate > 0 && lettersToRelocate <= str.length) {
    newStr = str.slice(lettersToRelocate) + str.slice(0,lettersToRelocate);
    console.log(`Moved ${lettersToRelocate} characters as entered by the user`);
    console.log(`newStr is ${newStr}`);
} else {
    newStr = str.slice(defaultLettersToRelocate) + str.slice(0,defaultLettersToRelocate);
    console.log(`Moved 3 characters by default since the number of letters to relocate is more than the length of the string`);
    console.log(`newStr is ${newStr}`);
}