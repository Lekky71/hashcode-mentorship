const age = 34;
// if (age >= 13 && age < 20) {
//   console.log('You are a teenager');
// } else {
//   console.log('You are NOT a teenager');
// }

// if (age >= 13 && age < 20) console.log('You are a teenager'); else console.log('You are NOT a teenager');
// Child, Teenager, adult, elder
// 0 - 12, 13 - 19, 20 - 55, 56 -

let person;
if (age <= 0) {
  throw new Error('Invalid age!!!!!');
} else if (age > 0 && age <= 12) {
  person = 'child';
} else if (age >= 13 && age < 20) {
  person = 'teenager';
} else if (age >= 20 && age <= 55) {
  person = 'adult';
} else {
  person = 'elder';
}

console.log(person);

switch (person) {
  case 'child':
    console.log('You are a mini human');
    break;
  case 'teenager':
    // console.log('You are growing up small smALL now');
    // break;
  case 'adult':
    // console.log('You are paying taxes now');
    console.log('You can go out on your own');
    break;
  case 'elder':
    console.log('You don dey old');
    break;
  default:
    console.log('You no fall into any category oo');
}
