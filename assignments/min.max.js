function miniMaxSum(arr) {
  // Write your code here
  const sortedArr = arr.sort((a, b) => a - b);
  let minimum = 0;
  // sortedArr => [1, 3, 5, 7, 9]
  // [1,3,5,7]
  arr.slice(0, 4).forEach(element => {
    minimum += element;
  });
  // minimum => 16
  const maximum = minimum - sortedArr[0] + sortedArr[4];
  // maximum = 16 - 1 + 9
  // OR
  let max = 0;
  arr.slice(1, 5).forEach(element => {
    max += element;
  });
  console.log(`${minimum} ${max}`);
}

miniMaxSum([1, 3, 5, 7, 9]);
