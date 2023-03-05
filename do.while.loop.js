let count = 0;
let isBig = false;

do {
  console.log(count);
  if (count === 5) {
    console.log('I GOT 5!!!');
  }
  count++;
  if (count === 20) {
    isBig = true;
  }
} while (!isBig);
