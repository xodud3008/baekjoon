const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin
});

let input = [];

rl.on('line', function (line){
    input.push(line);

}).on('close',function (){

    let X = []

    // 숫자 10개 입력
    for (let i = 0; i<=9; i++){
        input.push[i];
    }

    // 42로 나눈 나무지를 배열에 넣기
    for (let i = 0; i<=9; i++){
        X.push(Math.floor(input[i]%42));
    }

    // set 사용하여 중복 제거
    let set = new Set(X);
    let A = [...set];
    console.log(A.length)

    process.exit();
});

