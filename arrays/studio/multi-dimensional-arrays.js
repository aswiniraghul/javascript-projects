let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

let foodArray = food.split(",");
foodArray.sort();
console.log("foodArray is " + foodArray);

let equipmentArray = equipment.split(",");
equipmentArray.sort();
console.log("equipmentArray is " + equipmentArray);

let petsArray = pets.split(",");
petsArray.sort();
console.log("petsArray is " + petsArray);

let sleepAidsArray = sleepAids.split(",");
sleepAidsArray.sort();
console.log("sleepAidsArray is " + sleepAidsArray);

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

let cargoHold = [foodArray, equipmentArray, petsArray, sleepAidsArray];
console.log("cargoHold is " + cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

const input = require('readline-sync');
let selectedCabinet = input.question("Select a cabinet (0-3):");
console.log("selectedCabinet is " + selectedCabinet);

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

if (selectedCabinet > 0 && selectedCabinet < cargoHold.length) {
    let cabinetContents = cargoHold[selectedCabinet];
    console.log(`The selected cabinet contents are ${cabinetContents}`);
} else {
    console.log(`User queried unavailable cabinet`);
}

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

let selectedCabinetNew = input.question("Select a cabinet (0-3):");
console.log("selectedCabinetNew is " + selectedCabinetNew);
let selectedItem = input.question("Select an item:");
console.log("selectedItem is " + selectedItem);

if (selectedCabinetNew > 0 && selectedCabinetNew < cargoHold.length) {
    let cabinetContentsNew = cargoHold[selectedCabinetNew];
    console.log(`The selected cabinet contents are ${cabinetContentsNew}`);
    if (cabinetContentsNew.includes(selectedItem)) {
        console.log(`Cabinet ${selectedCabinetNew} DOES contain '${selectedItem}'.`);
    } else {
        console.log(`Cabinet ${selectedCabinetNew} DOES NOT contain '${selectedItem}'.`);
    }
} else {
    console.log(`User queried unavailable cabinet`);
}