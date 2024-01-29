function findMinValue(arr){
  let min = arr[0];
  for (i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}

//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.

/*Within the function:
1) Define a new, empty array to hold the final sorted numbers.
2) Use the findMinValue function to find the minimum value in the old array.
3) Add the minimum value to the new array, and remove the minimum value from the old array.
4) Repeat parts b & c until the old array is empty.
5) Return the new sorted array.
6) Be sure to print the results in order to verify your code.*/

//Your function here...

//Sample arrays for testing:

let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//function 
function sortNumber(arr) {
	let sortedArray = [];
	while (arr.length > 0) {
		let minValue = findMinValue(arr);
		sortedArray.push(minValue);
		arr.splice(arr.indexOf(minValue), 1);	
	}
	return sortedArray;
}
console.log(sortNumber(nums1));
console.log(sortNumber(nums2));
console.log(sortNumber(nums3));



/* BONUS MISSION: Refactor your sorting function to use recursion below:
 */

function recursionSort(arr, sorted = []) {
	
	if (arr.length === 0) {
		return sorted;
	}
	let minValue = findMinValue(arr);
		sorted.push(minValue);
		arr.splice(arr.indexOf(minValue), 1);	
	//console.log(arr, sorted); // to show what is happening on each recursive pass
	// Call function with updated arrays
	return recursionSort(arr, sorted);
}
console.log("The Bonus Mission - Recursion sort :");

let nums1A = [5, 10, 2, 42];
let nums2A = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3A = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

console.log(recursionSort(nums1A));
console.log(recursionSort(nums2A));
console.log(recursionSort(nums3A));


