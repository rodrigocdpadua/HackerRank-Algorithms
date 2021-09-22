function sockMerchant(n, ar) {
  let countType = {};
  let countPair = 0;
  ar.map(a => {
    if(countType.hasOwnProperty(a)){
      countType[a]++;
    } else{
      countType[a] = 1;
    }
  });
  Object.values(countType).map(value => {
    (value % 2) == 0 ? countPair += value/2 : countPair += (value-1)/2;
  });

  return countPair;
}

let ns = 9;
let arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];

console.log(sockMerchant(ns, arr));