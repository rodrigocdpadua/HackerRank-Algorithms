function getTotalX(a, b) {
  let maxA = Math.max(...a);
  let minB = Math.min(...b);
  let arrFat = [];
  let verify = true;
  let elements = 0;

  for (let i = 1; maxA * i <= minB; i++){
    a.map(aI => {
      if(aI > (maxA * i)){
        if(aI % (maxA * i) != 0){
          verify = false;
        }
      } else {
        if((maxA * i) % aI != 0){
          verify = false;
        }
      }
    });

    if(verify){
      arrFat.push(maxA * i);
    } else{
      verify = true;
    }
  }

  arrFat.map(fat => {
    b.map(bI =>{
      if(bI > fat){
        if(bI % fat != 0){
          verify = false;
        }
      } else{
        if(fat % bI != 0){
          verify = false;
        }
      }
    });

    if(verify){
      elements++;
    } else{
      verify = true;
    }
  });

  return elements;
}

let arrA = [2, 4];
let arrB = [16, 32, 96];

console.log(getTotalX(arrA, arrB));