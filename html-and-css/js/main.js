console.log("Hello from main.js");

// Variables
let variable = "Petras";
const manoNamasKuriamAsGyvenu = 3;

// Scope
const global = "global const variable";
let global2 = "global let variable";
function test() {
  let local = "local Variable";
  console.log(local); // I can display the global variable because it is of global scope
}
test();

// Type off
typeof 50; // number
typeof "Lorem ipsum"; // string
typeof []; // object
typeof function () {}; // function

// Object
const person = {
  firstName: "John",
  lastName: "Smith",
};

const anotherPerson = {
  John: 30,
  Smith: 40,
};

console.log(person.firstName); // for returning values
console.log(person["lastName"]); // for reusable values

// Arrays popular methods
const theArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];
const array2 = [999, 999, 999, 888, 777];
// append array
theArray.push(10);

// delete last value from the array
theLastvalue = theArray.pop();

// delete first value from the array
theFirstValue = theArray.shift();

// Adds the value to the start of the array
theArray.unshift(1);

// join the array by a certain separator, default ,
newElement = theArray.join(",");

// reverse order the array
theArray.reverse();

// sorting elements
theArray.sort();

//combining two arrays
// newList = theArray.concat(array2);
newList = [...theArray, ...array2];
console.log(newList);

// for each element in the list do something
newList.forEach((x) => {
  console.log(x);
});

// map each element to new values
mappedArray = newList.map((x) => {
  return x * x;
});
// console.log(mappedArray);

// check if array includes a certain value
console.log(newList.includes(1)); // true
console.log(newList.includes(17)); // false

// filter the array by a certain logic
const filteredArray = newList.filter(function (e) {
  return e % 2 == 0;
});
console.log(filteredArray);

//find the Index of the array value
console.log(newList.indexOf(999));

//slice the list and return sliced values
console.log(newList.slice(0, 2));

//splice, splice(indexToDeleteFrom, amountOfvaluesToDelete, valuesToReplaceWith)
newList.splice(0, 10, 9);
console.log(newList);

// get the length of the array
console.log(newList.length);
