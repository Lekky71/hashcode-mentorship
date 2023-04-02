function divideBy2Until1(num) {
  if (num === 1) {
    console.log('Gotten to 1');
  } else {
    const numDivBy2 = num / 2;
    console.log(numDivBy2);
    divideBy2Until1(numDivBy2);
  }
}

divideBy2Until1(64);
