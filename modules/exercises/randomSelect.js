
  //Your code here to select a random element from the array passed to the function.
  function randomFromArray(arr){
    let index = Math.floor(Math.random()*arr.length);
    return arr[index];
 }

//TODO: Export the randomFromArray function.
module.exports = {randomFromArray};