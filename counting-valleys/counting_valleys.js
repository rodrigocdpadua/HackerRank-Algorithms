function countingValleys(steps, path) {
  let countValley = 0;
  let entredValley = false;
  //countPath=0: Sea Level // coutPath>0: mountain // countPath<0: Valley
  let countPath = 0;

  for(let i = 0; i < steps; i++){
    if(path[i] == "D"){
      countPath--;
      if(!entredValley && countPath < 0){
        entredValley = true;
        countValley++;
      }
    }else{
      countPath++;
      if(countPath >= 0){
        entredValley = false;
      }
    }
  }
  return countValley;
}

s = 8;
p = ["D", "D", "U", "U", "U", "U", "D", "D"];

console.log(countingValleys(s, p));