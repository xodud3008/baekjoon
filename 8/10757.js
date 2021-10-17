let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let A = BigInt(input[0]);
let B = BigInt(input[1]);

// BigInt를 사용하면 마지막에 n이 붙음 => toString을 붙여줘야 한다
console.log((A + B).toString());
