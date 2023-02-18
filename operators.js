const result1 = true && false;

console.log(!result1);
const result2 = true || false;
console.log(!result2);

const result3 = result1 && !result2;
console.log(!result3);


const result4 = !result1 || result2;
console.log('!!result4 is', !!result4);

const result5 = !result2 || result3 && !!!result4;
// false || false && false => false
console.log('result5 is', result5);

// BITWISE OPERATORS
const a = 232543254254;
const b = 54235235234;

const result6 = a & b;
// 1 0
// 1 1
// result
// 1 0
console.log(result6);
console.log(~b);

// Left Shift
console.log(4 << 1); // 4 * 2^1
// 1 0 0
// 1 0 0 0

console.log(4 << 3); // 4 x 2^3
// 1 0 0
// 1 0 0 0 0 0 -> 32

console.log(4 >> 1);
// 1 0 0
// 0 1 0 -> 2


console.log(13 >> 3);
// 1 1 0 1
// 0 1 1 0 - 1st
// 0 0 1 1 - 2nd
// 0 0 0 1 = 3rd -> 1

// ASSIGNMENT OPERATORS
let age1 = 32;
const age2 = 49;
age1 += age2;
// age1 = age1 + age2;
console.log(age1);
age1 -= age2;
// age1 = age1 - age2;
console.log(age1);
