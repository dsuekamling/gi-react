// Exercise: Array Methods
// Your task is to add the missing logic to a transformToObjects() function that transforms a list of numbers into a list of JavaScript objects.

// For the provided input [1, 2, 3] the transformToObjects() function should return [{val: 1}, {val: 2}, {val: 3}].

function transformToObjects(numbers) {
	// create an empty array to store the objects
let objects = [];

// loop through the numbers array
for (let i = 0; i < numbers.length; i++) {
  // create a new object with a 'val' property set to the current number
  let obj = { val: numbers[i] };
  
  // add the new object to the array of objects
  objects.push(obj);
}

// return the array of objects
return objects;
}

// example usage
let numbers = [1, 2, 3];
let objects = transformToObjects(numbers);
console.log(objects); // should output [{val: 1}, {val: 2}, {val: 3}]
