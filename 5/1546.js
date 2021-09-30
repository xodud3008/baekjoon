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
    let A = input[1].split(' ').map(Number);

    // 오름차순으로 정렬하는 함수 : Array.sort((a,b) => a - b)
    A.sort((a, b) => a - b);

    M = A[A.length-1];
    let arr = []

    for (let i = 0; i<A.length; i++){
        arr.push(A[i]/M*100)
    }
    console.log(arr)

    // for문을 사용하여 합 구하기 => 틀림
    // let sum = 0.0;
    // for (let i = 0; i<arr.length; i++){
    //     sum = sum + arr[i];
    // }

    // 배열의 합 구하는 함수 사용 => 맞음
    let avg = arr.reduce((a, b) => a + b) / N;
    console.log(avg)


    process.exit();
});

