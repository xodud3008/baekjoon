const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);

}).on('close', function () {

    let T = Number(input[0]);

    let test = [];

    // input[0]에 테스트 횟수 T가 이미 있기 때문에 1부터 시작해야 함
    for (let i = 1; i <= T; i++){
        test.push(input[i].split(' '));
    }

    // 테스트 케이스 입력하기
    for (let i = 0; i < T; i++){
        let A = Number(test[i][0]);
        let B = Number(test[i][1]);

        console.log('Case #' + (i+1) + ': ' + A + ' + ' + B + ' = ' + Number(A + B));
    }
    process.exit();
});