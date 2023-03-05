// Functions are a set of instructions that takes in parameter(s) and returns a value;

// Parameters => whatToBuy, Money, WhereToBuy[Optional]
// Returns => Food, Change[Optional]

// Instructions
// 1. walk to Moz entrance
// 2. Take bike to Buka entrance
// 3. Walk to WhereToBuy
// 4. Pay
// 5. Collect food
// 6. Collect change optionally
// 7. Walk back to Buka entrance
// 8. Take bike to Moz entrance
// 9. Walk to room
// 10. Deliver food
// 11. Wash your hand

function sayHello(name) {
  console.log('Hello', name);
}

sayHello('Leke');

// num is a parameter
function multiplyBy7(num) {
  return num * 7; // returned data
}

const result1 = multiplyBy7(5);
console.log(result1);

function getFullName(firstName, lastName, middleName) {
  const fullName = lastName + ' ' + firstName + ' ' + middleName;
  return fullName;
}

console.log(getFullName('Boluwatife', 'Ojo', 'Fiyinfoluwa'));
console.log(getFullName('Boluwatife', 'Tunde-Lawal', 'John'));
console.log(getFullName('Liberty', 'Fakolade', 'Semilore'));
