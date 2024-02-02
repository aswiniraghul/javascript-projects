// Code your crewMass function here:


// Code your fuelRequired function here:


// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };


 // Here is an updated crew array with only 3 pre-selected candidates
crew = [candidateA, candidateC, candidateE];



// Code your orbitCircumference function here:

function orbitCircumference(altitude) {
	const RADIUSOFEARTH = 6371; // km
	let orbitRadius = RADIUSOFEARTH + altitude;
	return Math.round(2 * Math.PI * orbitRadius);
}

// Code your missionDuration function here:

function missionDuration(numOrbits, alt = 2000, speed = 28000) {
	let circumference = orbitCircumference(alt);
	let distance = numOrbits * circumference;
	// round time here so it will be rounded in message
	let time = Math.round(100 * distance / speed) / 100; 
	console.log(`The mission will travel ${distance} km around the planet, and it will take ${time} hours to complete.`);
	return time;
}

// Code your oxygenExpended function here:

function oxygenExpended(candidate, alt = 2000, speed = 28000) {
	let duration = missionDuration(3, alt, speed);
	let oxygen = Math.round(candidate.o2Used(duration) * 1000) / 1000;
	return `${candidate.name} will perform the spacewalk, which will last ${duration} hours and require ${oxygen} kg of oxygen.\n`
}



// Select a crew member randomly and print their oxygen expenditure

let selectedCandidate = selectRandomEntry(crew);
console.log(oxygenExpended(selectedCandidate));

// Do it again but provide different values for altitude and speed

selectedCandidate = selectRandomEntry(crew);
console.log(oxygenExpended(selectedCandidate, 3000, 25000));


//Bonus mission

function selectRandomEntry(arr) {
	let input = Math.floor(Math.random() * arr.length);
	return arr[input];
}

// Define a function to select a crew member by oxygen use and determine the candidate for the spacewalk

function selectByOxygenUse(arr) {
	let candidate = arr[0];
	for (let i=1; i < arr.length; i++) {
		if (arr[i].o2Used(1) < candidate.o2Used(1)) {
			candidate = arr[i];
		}
	}
	return candidate;
}

// Select a new candidate by oxygen use

let selectedCandidateBonus = selectByOxygenUse(crew);
console.log(oxygenExpended(selectedCandidateBonus)); 


// Code your crewMass function here:

function crewMass(arr) {
	let mass = 0;
	for (let i=0; i < arr.length; i++) {
		mass += arr[i].mass;
	}
	return Math.round(mass * 10) / 10;
}

const ROCKET_MASS = 75000;

// Code a helper function just to calculate the total mass

function getTotalMass(arr) {
	 return crewMass(arr) + ROCKET_MASS; 
}

// Code your fuelRequired function here:

function fuelRequired(arr) {
	return Math.ceil(getTotalMass(arr) * 9.5) + safetyMargin(arr); 
}

// Code a function to calculate the safety margin

function safetyMargin(arr) {
	let Margin = 100 * arr.length;
	for (let i=0; i < arr.length; i++) {
		if (arr[i].species === "cat" || arr[i].species === "dog") {
			Margin += 100;
		}
	}
	return Margin;
}

// Print a statement with the launch mass and the fuel required
console.log(`The mission has a launch mass of ${getTotalMass(crew)} kg and requires ${fuelRequired(crew)} kg of fuel.\n`);
