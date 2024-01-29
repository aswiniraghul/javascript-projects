function checkFuel(level) {
  if (level > 100000){
    return 'green';
  } else if (level > 50000){
    return 'yellow';
  } else {
    return 'red';
  }
}

function holdStatus(arr){
  if (arr.length < 7) {
    return `Spaces available: ${7-arr.length}.`;
  } else if (arr.length > 7){
    return `Over capacity by ${arr.length-7} items.`;
  } else {
    return "Full";
  }
}

let fuelLevel = 200000;
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];

console.log("Fuel level: " + checkFuel(fuelLevel));
console.log("Hold status: " + holdStatus(cargoHold));

// Steal some fuel from the shuttle:
 
 
//a). Define an anonymous function and set it equal to a variable with a normal, non-suspicious name. The function takes one parameter. This will be the fuel level on the shuttle.

//b). You must siphon off fuel without alerting the TAs. Inside your function, you want to reduce the fuel level as much as possible WITHOUT changing the color returned by the checkFuel function.

//c). Once you figure out how much fuel to pump out, return that value.

//d). Decide where to best place your function call to gather our new fuel.


let checkFuelStatus = function(a) {
   if (checkFuel(a) === 'green') {
      return a - 100001;
   }
   else if (checkFuel(a) === 'yellow') {
      return a - 50001;
   }
   else {
      return a;
   }
};
let a=20000;
console.log("Fuel level: " + checkFuelStatus(a));

//method :2


// let adjustFuel = function(fuelLevel) {
//   // Determine how much fuel to pump out without changing the color
//   if (checkFuel(fuelLevel) === 'green') {
//       // No need to reduce fuel for 'green' status
//       return 0;
//   } else if (checkFuel(fuelLevel) === 'yellow') {
//       // Reduce fuel to bring it down to 'yellow' status
//       return fuelLevel - 50001;
//   } else {
//       // Reduce fuel to bring it down to 'red' status
//       return fuelLevel - 100001;
//   }
// };

// //let fuelLevel = 200000;

// // Adjust fuel level without changing the color
// let adjustedFuel = adjustFuel(fuelLevel);

// console.log("Adjusted Fuel level: " + adjustedFuel);
// console.log("New Fuel status: " + checkFuel(adjustedFuel));


 //Next, liberate some of that glorious cargo.
 

//a). Define another anonymous function with an array as a parameter, and set it equal to another innocent variable.

//b). You need to swipe two items from the cargo hold. Choose well. Stealing water ain’t gonna get us rich. Put the swag into a new array and return it from the function.

//c). The cargo hold has better security than the fuel tanks. It counts how many things are in storage. You need to replace what you steal with something worthless. The count MUST stay the same, or you’ll get caught and thrown into the LaunchCode brig.

//d). Don’t get hasty, matey! Remember to test your function.

// Finally, you need to print a receipt for the accountant. Don’t laugh! That genius knows MATH and saves us more gold than you can imagine.

let swipeItems = function(arr) {
  // Check if there are at least two items to swipe
  if (arr.length < 2) {
     console.log("Not enough items to swipe!");
     return [];
  }

  // Swiping two items
  let swag = arr.splice(0, 2);
  return swag;
};
let irs = function(fuelLevel, cargoHold) {
  // Swipe two items from the cargo hold
  let stolenItems = swipeItems(cargoHold);

  // Print the stolen items
  console.log("Stolen items: " + stolenItems);

  // Replace stolen items with worthless items to maintain the count
  for (let i = 0; i < stolenItems.length; i++) {
     cargoHold.push("worthless item");
  }

  // Print the modified cargo hold
  console.log("New cargo hold: " + cargoHold);

  // Print receipt for the accountant
  console.log("Receipt:");
  console.log("Fuel level: " + fuelLevel);
  console.log("Hold status: " + holdStatus(cargoHold));

  // Return the modified cargo hold
  return cargoHold;
};

// Call the irs function
irs(fuelLevel, cargoHold);

 
 
//a). Define a function called irs that can take fuelLevel and cargoHold as arguments.
	
//b). Call your anonymous fuel and cargo functions from within irs.

//c). Use a template literal to return, "Raided _____ kg of fuel from the tanks, and stole ____ and ____ from the cargo hold.


//    let irs = function(levelOfFuel, itemsInCargo {
//     let arr = deckMops(itemsInCargo);
//    return `Raided ${checkFuelStatus(fuelLevel)} kg of fuel from the tanks, and stole ${arr[0]} and ${arr[1]} from the cargo hold.`
// });


 
// let iris = function(fuelLevel, cargoHold) {
//   // Anonymous function for fuel
//   let nonSuspiciousFunction = function(level) {
//      if (level > 100000) {
//         return 'green';
//      } else if (level > 50000) {
//         return 'yellow';
//      } else {
//         return 'red';
//      }
//   };

//   // Anonymous function for cargo hold
//   let deckMops = function(arr) {
//      if (arr.length < 2) {
//         console.log("Not enough items to swipe!");
//         return [];
//      }
//      return arr.splice(0, 2);
//   };

//   // Call the anonymous functions for fuel and cargo
//   let fuelColor = nonSuspiciousFunction(fuelLevel);
//   let stolenItems = deckMops(cargoHold);

//   // Use a template literal to return the raid report
//   return `Raided ${fuelColor} kg of fuel from the tanks, and stole ${stolenItems[0]} and ${stolenItems[1]} from the cargo hold.`;
// };

// // Example usage
// //let fuelLevel = 200000;
// //let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];

// console.log(iris(fuelLevel, cargoHold));
