const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin
});

let input = [];

rl.on('line', function (line){
    input.push(line);

}).on('close',function (){
    let N = Number(input[0]);

    // 숫자 배열로 변환하는 함수 : Array.map(Number)
    let A = input[1].split(' ').map(Number);

    // 오름차순으로 정렬하는 함수 : Array.sort((a,b) => a - b)
    A.sort((a, b) => a - b);

    console.log(A)
    console.log(A[0], A[A.length-1])

    process.exit();
});

