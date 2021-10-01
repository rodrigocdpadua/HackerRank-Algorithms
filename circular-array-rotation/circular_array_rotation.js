function circularArrayRotation(a, k, queries) {
    let aux;
    let arr = [];
    for(let i = 1; i <= k; i++){
        aux = a.pop();
        a.unshift(aux);
    }
    queries.map(q => {
        arr.push(a[q]);
    });
    return arr;
}

let ar = [3, 4, 5];
let rotation = 2;
let que = [1, 2];

console.log(circularArrayRotation(ar, rotation, que));