let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let A = Number(input[0]);
let B = Number(input[1]);
let C = Number(input[2]);

let X = C - B;

if (X <= 0){
    console.log(-1)
} else {
    console.log(Math.floor(A/X) + 1)
}