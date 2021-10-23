let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0]);

let arr = [0, 1];

for (let i = 0; i<N; i++){
    arr.push(arr[i] + arr[i+1])
}
console.log(arr[N])