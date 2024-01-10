// Declare and initialize the variables for exercise 1 here:
// 1.Declare and initialize the following variables for our space shuttle
let engineIndicatorLight =	"red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus	= spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;

let fuelLevel = 900;
let engineTemperature = 1200;

// BEFORE running the code, predict what will be printed to the console by the following statements:
// 2.Examine the code below. What will be printed to the console?

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}