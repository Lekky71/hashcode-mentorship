function getSum() {
  let sum = 0;
  for (let i = 1; i < 1000; i++) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
      sum += i; // sum = sum + i;
    }
  }
  return sum;
}

console.log(getSum());

// ASSIGNMENT IS TO SOLVE PROJECT EULER 2 - 6
// https://projecteuler.net
