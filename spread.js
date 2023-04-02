const people = ['Bolu', 'Bolu', 'Liberty', 'Peter', 'Ife'];

const newPeeps1 = [];
const newPeeps2 = [];

newPeeps1.push(people); // Pushing this as an array element
newPeeps2.push(...people);

console.log(newPeeps1, newPeeps1.length);
console.log(newPeeps2, newPeeps2.length);
