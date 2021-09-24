const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);

}).on('close', function () {

    let N = Number(input[0]);

    // Java는 for문 두번 돌리면 되지만 Node.js는 빈 문자열을 만들어서 하나씩 넣어준다.
    // Java처럼 풀면 가로로 안나오고 세로로 출력됨
    let A = '';
    let B = '';

    for (let i = 1; i <= N; i++) {
            A += '*';
        for (let j = 0; j < N-i; j++){
            B += ' ';
        }
        console.log(B+A);
        // 공백 부분 초기화 해줘야함.
        // 안하면 계속 플러스 되서 뒤로 밀린다.
        B = '';
    }
    process.exit();
});