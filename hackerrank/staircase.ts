function staircase(n) {
  // Write your code here
  const space = ' ';
  const hash = '#';
  for (let i = 1; i <= n; i++) {
    const spaceToPrint = space.repeat(n - i);
    const hashToPrint = hash.repeat(i);
    console.log(spaceToPrint + hashToPrint);
  }

}
