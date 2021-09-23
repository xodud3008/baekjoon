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

    for (let i = 1; i <= N; i++) {
        A += '*';
        console.log(A);
    }


    process.exit();
});