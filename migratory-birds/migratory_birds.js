function migratoryBirds(arr) {
  let arrTypesCount = {};
  let mostFrequently = [0, 0];
  for(let i = 0; i < arr.length; i++){
    if(arrTypesCount.hasOwnProperty(arr[i])){
      arrTypesCount[arr[i]]++;
    } else{
      arrTypesCount[arr[i]] = 1;
    }
  }
  for(let [key, value] of Object.entries(arrTypesCount)){
    if(value > mostFrequently[1]){
      mostFrequently[0] = key;
      mostFrequently[1] = value;
    } else if(value == mostFrequently[1] && key < mostFrequently[0]){
      mostFrequently[0] = key;
      mostFrequently[1] = value;
    }
  }
  return mostFrequently[0];
}

let arrTypes = [1, 4, 4, 4, 5, 3];

console.log(migratoryBirds(arrTypes));