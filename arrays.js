// Arrays
// An Array is a data-structure that hold a collection of values.
// 20, 30, 40, 100, 9, 4, 5, 3.0

const getHonours = require('./functions.2');

const arr1 = [25, 23, 45, 90, 350, 230, 43, 80];
const arr2 = ['hello', 'my', 'food', 'chair', 'free', 'book'];
const arr3 = [25, 'hello', true, false, 'yo'];

let age = 34;
let school = 'oau';

const arr4 = [school, age, 'age'];
/*
  key -> value
  0 -> oau
  1 -> 34
  2 -> age
 */
// ARRAY OPERATIONS
// Index
let firstOne = arr3[0];
console.log(arr3[8]); // undefined
// Length
// Total number of elements in the array
const arr4Size = arr4.length;
console.log(Object.keys(arr4));
console.log(arr4);

const arr11LessThan100 = arr1.filter(x => {
  return x <= 100;
});
console.log(arr11LessThan100);

const furniture = arr2.find(y => y === 'chair');
// const furniture = arr2.find(y => {
//   return y === 'chair';
// });
console.log(furniture);

arr1.forEach(element => {
  // console.log(element + 500);
});

const scores = [3.4, 5.0, 2.4, 0.6, 4.78, 3.21, 1.56];

scores.forEach(score => {
  console.log(getHonours(score));
});

console.log(arr4.includes('age')); // true
console.log(arr4.includes(89)); // false
console.log(arr2.includes('my', 2));
console.log(arr2.indexOf('my'));
console.log(arr2.join());
console.log(arr2.join('-'));

console.log(arr2.pop());
console.log(arr2);
arr2.push('magazine');
console.log(arr2);
arr2.shift();
console.log(arr2);
console.log(arr2.slice(0, 3));
console.log(arr2);

// Sort by ascending order
const sortedArr1 = arr1.sort((x, y) => x - y);
console.log(sortedArr1);
