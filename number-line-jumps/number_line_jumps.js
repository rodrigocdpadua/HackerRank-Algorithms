function kangaroo(x1, v1, x2, v2) {
  let kanFront = [];
  let kanBack = [];
  
  // Define which kangaroo is front and back
  if(x1 > x2){
      kanFront[0] = x1;
      kanFront[1] = v1;
      kanBack[0] = x2;
      kanBack[1] = v2;
  } else {
      kanFront[0] = x2;
      kanFront[1] = v2;
      kanBack[0] = x1;
      kanBack[1] = v1;
  }
  
  if(kanFront[1] >= kanBack[1]){
      return "NO";
  }
  
  while(kanBack[0] <= kanFront[0]){
      if(kanBack[0] == kanFront[0]){
          return "YES";
      }
      kanBack[0] += kanBack[1];
      kanFront[0] += kanFront[1];
  }
  
  return "NO";
}

let x1 = 0;
let v1 = 3;
let x2 = 4;
let v2 = 2;

console.log(kangaroo(x1, v1, x2, v2));