//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate{
constructor(name, mass,scores){
    this.name=name;
    this.mass=mass;
    this.scores=scores;
}
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

addScore(score) {
    this.scores.push(score);
}
// Add a method to average the scores
average() {
    let sum = 0;
    for (let i=0; i < this.scores.length; i++) {
        sum += this.scores[i];
    }
    return Math.round(10 * sum / this.scores.length) / 10;
}
//  Add a method to get the candidate's status
status() {
    let avg = this.average();
    if (avg >= 90) {
        return "Accepted";
    } else if (avg >= 80) {
        return "Reserve";
    } else if (avg >= 70) {
        return "Probationary";
    } else {
        return "Rejected";
    }
}

}


let BubbaBear =new CrewCandidate("Bubba Bear",135,[88,85,90]);
let MerryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let GladGator  = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

console.log(BubbaBear);
console.log(MerryMaltese);
console.log(GladGator);
//Add a score of 83 for Bubbabear
BubbaBear.addScore(83);
console.log(BubbaBear.scores);

//Test the .status() method on each candidate with the template literal:
// `___ earned an average test score of ___% and has a status of ___.`

let candidates = [BubbaBear,MerryMaltese,GladGator];
for (let i = 0; i < candidates.length; i++) {
	console.log(`\n${candidates[i].name} earned an average test score of ${candidates[i].average()}% and has a status of ${candidates[i].status()}.`)
}

// Use the .average() method to verify Merry's has an average 92.7 score
console.log(MerryMaltese.average());

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
let reserveCount = 0;
while (GladGator.status() !== "Reserve") {
    GladGator.addScore(100);
    reserveCount++;
}
console.log(GladGator.scores);
console.log(`\nIt took ${reserveCount} scores to get Glad Gator up to Reserve status!`);

let acceptedCount = 0;
while (GladGator.status() !== "Accepted") {
    GladGator.addScore(100);
    acceptedCount++;
}
console.log(GladGator.scores);
console.log(`\nIt took ${acceptedCount} scores to get Glad Gator up to Accepted status!`);


