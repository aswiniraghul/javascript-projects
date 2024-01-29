// const reverse = function(str) {
//     return str.split('').reverse().join('');
// };
// console.log(reverse("dog"));

// let logger = function(errorMsg) {
//     console.log("ERROR: " + errorMsg);
// };

// let userInput = -2;  // Assuming you have a variable userInput defined

// if (userInput < 0) {
//     logger("Invalid input");
// }

// function printMessage() {
//     console.log("The future is now!");
// }

// setTimeout(printMessage, 5000);
// setTimeout(function () {
//     console.log("The future is now!");
// }, 1000);

// let nums = [3.14, 42, 4811];

// // TODO: Write a mapping function
// // and pass it to .map()
// let halved = nums.map(function (n) {
//     return n / 2;
// });

// console.log(halved);

// let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

// // TODO: Write a mapping function
// // and pass it to .map()
// let firstInitials = names.map(function(name) {
//     return name.charAt(0);
// });

// console.log(firstInitials);

// function callMe(func) {
//     func();
// }

// callMe("Al");


// function removeI(arr) {
//     if (!arr.includes('i')) {
//         // Base case: 'i' not found in the array
//         // Return the final array
//         return arr;
//     } else {
//         // Recursive case: Remove one 'i' entry from the array
//         const index = arr.indexOf('i');
//         arr.splice(index, 1);
        
//         // Call removeI function again
//         return removeI(arr);
//     }
// }

// // Test the function with an example array
// const exampleArray = ['One', 'i', 'c', 'X', 'i', 'i', 54];
// const resultArray = removeI(exampleArray);

// console.log(resultArray);

// function factorial(integer) {
//     if (integer === 0 ) {
//         // Base case: solve the last step
//         // Return the result for 0! and 1!
//         return 1;
//     } else {
//         // Recursive case: call factorial function again
//         return integer * factorial(integer - 1);
//     }
// }

// // Test the function with an example
// const result = factorial(5);
// console.log(result); // Output: 120

// function decreasingSum(integer) {
//     if (integer === 1){
//     return integer;
//     } else {
//         return integer + (decreasingSum(integer-1));
//     //call decreasingSum function again
//     } 
    
// } result= decreasingSum(5);
// console.log(result);

function checkFuel(level) {
    if (level > 100000) {
        return 'green';
    } else if (level > 50000) {
        return 'yellow';
    } else {
        return 'red';
    }
}

function holdStatus(arr) {
    if (arr.length < 7) {
        return `Spaces available: ${7-arr.length}.`;
    } else if (arr.length > 7) {
        return `Over capacity by ${arr.length-7} items.`;
    } else {
        return "Full";
    }
}

let fuelLevel = 70000;
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];

console.log("Fuel level: " + checkFuel(fuelLevel));
console.log("Hold status: " + holdStatus(cargoHold));

let siphonedFuel = 0;
let nothingToSee = function(num) {
    if (num > 100000) {
        siphonedFuel = num - 100001;
        fuelLevel = 100001;
        return siphonedFuel;
    } else if (num > 50000) {
        siphonedFuel = num - 50001;
        fuelLevel = 50001;
        return siphonedFuel;
    } else {
        siphonedFuel = num;
        fuelLevel = 0;
        return siphonedFuel;
    }
}

let garbageArray = ["banana peels", "coffee grounds"];
let valuableBooty = [];
let notSuspicious = function(arr) {
    valuableBooty[0] = arr[4];
    arr[4] = garbageArray[0];

    valuableBooty[1] = arr[6];
    arr[6] = garbageArray[1];
    return arr;
}

function irs(fuelLevel, cargoHold) {
    nothingToSee(fuelLevel);
    notSuspicious(cargoHold);
    return `Raided ${siphonedFuel}kg of fuel from the tanks, and stole ${valuableBooty[0]} and ${valuableBooty[1]} from the cargo hold.`;
}

console.log(irs(fuelLevel, cargoHold));