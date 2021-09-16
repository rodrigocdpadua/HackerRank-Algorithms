function compareTriplets(a, b) {
  var arrScore = [0,0];
  for(var i = 0; i < 3; i++){
      a[i] > b[i] ? arrScore[0]++ : a[i] < b[i] ? arrScore[1]++ : '';
  }
  return arrScore;
}

arr1 = [1, 2, 3];
arr2 = [2, 1, 5];

console.log(compareTriplets(arr1, arr2));