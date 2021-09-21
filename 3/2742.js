const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split();

let answer = '';

// input의 타입을 숫자로 지정해야 함

for (let i = Number(input); i >= 1; i--) {
    answer += i + '\n';
}

console.log(answer);
