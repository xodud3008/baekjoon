const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin
});

let input = [];

rl.on('line', function (line){
    input.push(line);

}).on('close',function (){

    let A = input[0];
    let B = input[1];
    let C = input[2];

    let N = A * B * C;

    // console.log(N);

    X = String(N).split('');
    // console.log(X)

    for (let i = 0; i<=9; i++){
        // count 위치 중요!!
        // for문 안에서 선언해야 for문 시작할 때 초기화 됨
        let count = 0;
        for (let j = 0; j<X.length; j++){
            if (Number(X[j]) === i){
                count++;
            }
        }
        console.log(count);
    }

    process.exit();
});

