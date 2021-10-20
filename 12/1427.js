let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let N = input[0].split('')

N.sort(function(a, b)  {
    return b - a;
});

console.log(N.join(''))