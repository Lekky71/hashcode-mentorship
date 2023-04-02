console.log(multiplyBy7(10));

// scope
function hello() {
  let message = 'how far'; // This is in function scope
}
// num is a parameter
function multiplyBy7(num) {
  const divider = 5;
  console.log(divider);

  return num * 7; // returned data
}

