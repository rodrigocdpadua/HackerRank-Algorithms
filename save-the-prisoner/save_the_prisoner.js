function saveThePrisoner(n, m, s) {
  let prisoner;
  let rest = m % n;
  
  if(rest == 0 && s == 1){
    return n;
  }
  
  prisoner = (s + rest - 1) % n;
  if(prisoner == 0){
    return n;
  }
  
  return prisoner;
}

let n_prisoner = 5;
let candy = 2;
let start = 2;

console.log(saveThePrisoner(n_prisoner, candy, start));