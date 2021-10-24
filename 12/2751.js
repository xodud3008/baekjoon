let input = require('fs').readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

input.shift();

let answer = input.sort((a, b) => a - b);

// 메모리 초과, 시간 초과를 위해 최대한 console.log를 줄였지만
// 이것도 시간이 엄청 오래 걸림...
console.log(answer.join('\n'));