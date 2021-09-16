function compareTriplets(a, b) {
  let arrScore = [0,0];
  for(let i = 0; i < 3; i++){
      a[i] > b[i] ? arrScore[0]++ : a[i] < b[i] ? arrScore[1]++ : '';
  }
  return arrScore;
}

let arr1 = [1, 2, 3];
let arr2 = [2, 1, 5];

console.log(compareTriplets(arr1, arr2));
