function catAndMouse(x, y, z) {
  let range1;
  let range2;

  x <= z ? range1 = z - x : range1 = x - z;
  y <= z ? range2 = z - y : range2 = y - z;

  return range1 < range2 ? "Cat A" :
  range2 < range1 ? "Cat B" : 
  "Mouse C";
}

let cat1 = 2;
let cat2 = 5;
let mouse = 4;

console.log(catAndMouse(cat1, cat2, mouse));