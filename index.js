console.log('Hello World');

var age; // Declaration
console.log(age);
age = 47; // Instantiation / Assignment

var name = "Bolu";
var secondName = 'Liberty';

name = 'Coder';

let school = 'OAU';
const department = 'CSC';

school = 'UI';

const MULTIPLIER = 100;

console.log(name, secondName, school, department);
/*
  DATA TYPES
  1. Integer -> -50, 0, 45, 343, 35435
  2. Float -> 0.5, 2.7, 1.222, 9.81, 3.14, -2.5, -3434.34324321
  3. Character -> '?' 't' '\'
  4. String -> 'ufbuwqgfugqwegfvubqewuvbqew rverwqubvueqwbv ew bvweubfvqw3efgewrgf]weqrfugewqrgubfvquwer'
  5. Boolean -> true | false
  6. null
  7. undefined
 */
// Data types
name = undefined;
console.log(name);

const cost1 = 450 + 3.232;
console.log(cost1);

const NUM_OF_APPLES = 10;

const cost2 = NUM_OF_APPLES * 350.40;
console.log(cost2);

const pricePerApple = cost2 / NUM_OF_APPLES;
console.log(pricePerApple);

console.log(37 % 2);

let mentees = 5;

mentees++; // mentees = mentees + 1;
console.log('Mentees are', mentees);
mentees--; // mentees = mentees - 1;
console.log('Mentees are', mentees);

console.log(5 === 6);
console.log(5 !== '5');

console.log(5 > 'h'); // false

const age1 = 43;
const age2 = 20;

console.log(age1 > age2); // true
console.log(age2 > age1); // false

console.log(age2 < age1); // true

console.log(age2 <= 30); // true
console.log(age2 <= 20); // true

console.log(age2 > 31); // false
console.log(age2 >= 31); // false
console.log(age2 >= 16); // true

