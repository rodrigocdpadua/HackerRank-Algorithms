function diagonalDifference(arr) {
  let diagPrimary = 0;
  let diagSecondary = 0;
  for (let n = 0; n < arr.length; n++){
      diagPrimary += arr[n][n];
      diagSecondary += arr[n][arr.length - 1 - n];
  }
  
  return Math.abs(diagPrimary - diagSecondary);
}

let arrarr = [[11, 2, 4], [4, 5, 6], [8, 10, -12]];

console.log(diagonalDifference(arrarr));