const checkFive = require('../checkFive.js');
//const checkFive = require('../checkFive.js');

describe("checkFive", function(){

   test("Descriptive feedback...", function(){
      let output = checkFive(2);
      expect(output).toEqual("2 is less than 5.");
   });

});