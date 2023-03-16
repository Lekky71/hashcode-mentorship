const person1 = {
  name: 'Hashcode',
  2: false,
  scores: [43, 34, 56, 56],
  getAddress: (name) => {
    return 'OAU';
  }
};
console.log(person1);

person1.name = 'Bolu';
delete person1.name; // remove object property
person1.school = 'OAU';
console.log(person1);

// Object class
console.log(person1.hasOwnProperty('favoriteFood'));
if (person1.school) {
  console.log('send scholarship');
}

if (person1.book) {
  console.log('send library ticket');
}

const doesNotHaveBook = !person1.book;
console.log('doesNotHaveBook is', doesNotHaveBook);

const hasABook = !!person1.book;
console.log('hasABook is', hasABook);

// Object methods
const keys1 = Object.keys(person1);
console.log(keys1);
console.log(Object.values(person1));
// console.log(Object.entries(person1));

for (const entry of Object.entries(person1)) {
  console.log(`Key is ${entry[0]} and Value is ${entry[1]}`);
}
Object.defineProperty(person1, 'age', {
  value: 40,
});
console.log(person1); // age does not show up but it exists.
