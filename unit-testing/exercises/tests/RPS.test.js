const rps= require('../RPS.js');
const assert = require('assert');

test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function(){
   let output = rps.whoWon('rock','paper');
   expect(output).toBe("Player 2 wins!");
});

test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function(){
   let output = rps.whoWon('paper','scissors');
   expect(output).toBe("Player 2 wins!");
});
it("should return 'Player 2 wins!' when first input is 'paper' and second input is 'scissors'", function() {
   let output = rps.whoWon('paper', 'scissors');
   assert.strictEqual(output, 'Player 2 wins!');
});

it("should return 'Player 2 wins!' when first input is 'scissors' and second input is 'rock'", function() {
   let output = rps.whoWon('scissors', 'rock');
   assert.strictEqual(output, 'Player 2 wins!');
});