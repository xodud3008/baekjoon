let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0]);
let answer = 1;

if (N === 0){
    console.log(answer)
} else {
    for (let i = 1; i<=N; i++){
        answer = answer * i
    }
    console.log(answer)
}

