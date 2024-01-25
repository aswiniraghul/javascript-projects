// function reverse(str) {
//    let lettersArray = str.split('');
//    let reversedLettersArray = lettersArray.reverse();
//    return reversedLettersArray.join('');
   
   
//}
function funPhrase(stringInput) {
   let modifiedString;
 
   if (stringInput.length <= 3) {
       // Retrieve only the last character for strings with lengths of 3 or less
       modifiedString =stringInput.slice(-1);
   } else {
       // Retrieve only the first 3 characters for strings with lengths larger than 3
       modifiedString = stringInput.slice(0, 3);
   }
 
   // Use a template literal to return the phrase
   return `We put the '${modifiedString}' in '${stringInput}'.`;
 }
 
 // Test case
 let str = 'Functions rock!';
 let result = funPhrase(str);
 
 // Print the returned phrase
 console.log(result);
 