// Prompt: Write a function that removes the last element of an array and returns it.

const myArr = [1, 2, 3, 4, 5, 6, 7];

function removeLastElement(arr) {
  // TODO: Implement the logic here
  const newlyPoppedArr = arr.pop();
  // console.log(arr);
  // console.log(newlyPoppedArr);
  return newlyPoppedArr;
}

removeLastElement(myArr);

// Prompt: Write a function that adds an element to the end of an array and returns the new length of the array.
function addElementToEnd(arr, element) {
  // TODO: Implement the logic here
  // console.log(arr.length);
  // arr.push(element);
  myArr.push(element);
  console.log(arr);
  console.log(myArr);
  console.log(arr === myArr);
  // console.log(arr.length);
  let arrLength = arr.length;
  return arrLength;
}

console.log(addElementToEnd(myArr, 8));
// console.log(myArr);
// Prompt: Write a function that removes the first element of an array and returns it.
function removeFirstElement(arr) {
  // TODO: Implement the logic here
}

// Prompt: Write a function that adds an element to the beginning of an array and returns the new length of the array.
function addElementToBeginning(arr, element) {
  // TODO: Implement the logic here
}

// Prompt: Write a function that returns a section of an array based on a start and end index.
function getArraySection(arr, start, end) {
  // TODO: Implement the logic here
}

// Prompt: Write a function that removes a section of an array and returns the removed elements.
function removeArraySection(arr, start, end) {
  // TODO: Implement the logic here
}
