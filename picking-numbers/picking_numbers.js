function pickingNumbers(a) {
  let lengthSubarray = [];
  a.map(each => {
    let countLength = 0;
      for(let i = 0; i < a.length; i++){
        if((each - a[i] == 1 || each - a[i] == 0)){
          countLength++;
        }
      }
      lengthSubarray.push(countLength);
  });
  return Math.max(...lengthSubarray);
}

arr = [];
for(let i = 0; i < 100; i++){
  arr.push(66);
}

console.log(pickingNumbers(arr));