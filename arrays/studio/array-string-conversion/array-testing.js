let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//2) 
function reverseCommas() {

	//TODO: 1. create and instantiate your variables.
	let check;
	let output;
	let strArray = [];
	let reversedString = "";
	//TODO: 2. write the code required for this step

	if (protoArray1.includes(",")) {
		console.log("Words are seperated by commas");
	} else if (protoArray1.includes(";")) {
		console.log("Words are seperated by semicolon");
	} else if (protoArray1.includes(" ")) {
		console.log("Words are seperated by space");
	} else if (protoArray1.includes(", ")) {
		console.log("Words are seperated by comma space");
	}

	if (protoArray1.includes(",")) {
		strArray = protoArray1.split(",");
		strArray.reverse();
		reversedString = strArray.join(",");
	}

	//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	return output;
}

//3)
function semiDash() {

	let check;
	let output;
	let strArray = [];
	let reversedString = "";
	//TODO: write the code required for this step

	if (protoArray2.includes(",")) {
		console.log("Words are seperated by commas");
	} else if (protoArray2.includes(";")) {
		console.log("Words are seperated by semicolon");
	} else if (protoArray2.includes(" ")) {
		console.log("Words are seperated by space");
	} else if (protoArray2.includes(", ")) {
		console.log("Words are seperated by comma space");
	}

	if (protoArray2.includes(";")) {
    	strArray = protoArray2.split(";");
    	strArray.sort();
    	reversedString = strArray.join("-");
	}
  
	return output;
}

//4)
function reverseSpaces() {

	let check;
	let output;
	let strArray = [];
	let reversedString = "";
  //TODO: write the code required for this step

	if (protoArray3.includes(",")) {
		console.log("Words are seperated by commas");
	} else if (protoArray3.includes(";")) {
		console.log("Words are seperated by semicolon");
	} else if (protoArray3.includes(" ")) {
		console.log("Words are seperated by space");
	} else if (protoArray3.includes(", ")) {
		console.log("Words are seperated by comma space");
	}

	if (protoArray3.includes(" ")) {
		strArray = protoArray3.split(" ");
		strArray.sort((a, b) => b.localeCompare(a)); //Ask reverse alphabet
		reversedString = strArray.join(" ");
	}

	return output;
}

//5)
function commaSpace() {

	let check;
	let output;
	let strArray = [];
	let reversedString = "";
	//TODO: write the code required for this step

	if (protoArray4.includes(",")) {
		console.log("Words are seperated by commas");
	} else if (protoArray4.includes(";")) {
		console.log("Words are seperated by semicolon");
	} else if (protoArray4.includes(" ")) {
		console.log("Words are seperated by space");
	} else if (protoArray4.includes(", ")) {
		console.log("Words are seperated by comma space");
	}

	if (protoArray4.includes(", ")) {
		strArray = protoArray4.split(", "); //Ask what is part b
		strArray.reverse();
		reversedString = strArray.join(",");
	}
  
	return output;
}

// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};
