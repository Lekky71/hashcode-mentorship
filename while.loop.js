let count = 0;
let isBig = false;

while (!isBig) {
  console.log(count);
  if (count === 5) {
    console.log('I GOT 5!!!');
  }
  count++;
  if (count === 7) {
    isBig = true;
  }
}

// INFINITE LOOP
