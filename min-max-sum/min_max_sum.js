function miniMaxSum(arr) {
  let arrSum = 0;
  let values = [];

  for(let i = 0; i < arr.length; i++){
      arrSum += arr[i];
  }
  for(let i = 0; i < arr.length; i++){
      values.push(arrSum - arr[i]);
  }

  console.log(Math.min(...values) + " " + Math.max(...values));
}

let arr = [1, 2, 3, 4, 5];

miniMaxSum(arr);