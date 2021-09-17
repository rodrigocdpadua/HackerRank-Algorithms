function birthday(s, d, m) {
  let sumBar = 0;
  let count = 0;
  
  for(let i = m-1; i < s.length; i++){
    for(let j = 0; j < m; j++){
      sumBar += s[i-j];
    }
    if(sumBar == d){
      count++;
    }
    sumBar = 0;
  }
  
  return count;
}

let arr = [2,2,1,3,2];
let day = 4;
let month = 2;

console.log(birthday(arr, day, month));