// continue; => To skip to the iteration

// break; => To stop the entire loop

// We want to log only odd numbers between 1 and 50.
// for (let i = 0; i < 50; i++) {
//   // Even number
//   if ((i % 2) === 0) {
//     continue;
//   }
//   console.log(i);
// }

// let num = 3;
// while (num < 100) {
//   console.log('We are working with', num);
//   if (num % 10 !== 0) {
//     num++; // num = num + 1; => num = 4 + 1; => num = 5;
//     continue;
//   }
//   console.log(num);
//   num++;
// }

// We are looking for a multiple of 15
for (let i = 1; i < 83; i += 2) {
  if (i % 15 === 0) {
    console.log('We found the number that is a multiple of 15', i);
    break;
  }
}
