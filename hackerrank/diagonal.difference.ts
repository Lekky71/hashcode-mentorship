// function diagonalDifference(arr) {
//     // Write your code here
//     // arr[][];
//     let sumOfLeftDiagonal = 0;
//     let sumOfRightDiagonal = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sumOfLeftDiagonal += arr[i][i];
//         const j = arr.length - 1 - i;
//         sumOfRightDiagonal += arr[i][j];
//     }
//     return Math.abs(sumOfLeftDiagonal - sumOfRightDiagonal);
// }

function diagonalDifference(arr) {
  // Write your code here
  // arr[][];
  let diagonalDiff = 0;
  for (let i = 0; i < arr.length; i++) {
    diagonalDiff += arr[i][i];
    const j = arr.length - 1 - i;
    diagonalDiff -= arr[i][j];
  }
  return Math.abs(diagonalDiff);
}
