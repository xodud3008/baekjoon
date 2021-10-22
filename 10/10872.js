let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0]);
let answer = 1;

// 0팩토리얼은 1
if (N === 0){
    console.log(answer)
} else {
    // 0이 아닐 때는 해당 숫자까지 늘어나면서 곱하기
    for (let i = 1; i<=N; i++){
        answer = answer * i
    }
    console.log(answer)
}