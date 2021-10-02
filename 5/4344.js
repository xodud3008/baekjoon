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


    for (let i = 1; i<=N; i++){
        // 테스트 케이스 점수 입력
        let A = input[i].split(' ').map(Number);

        // for문 한번 돌때마다 sum과 avg를 초기화 해주어야 각각의 케이스에 맞는 계산 결과를 구할 수 있다.
        let sum = 0;
        let avg = 0;

        // 합계와 평균값 구하기 
        for (let j = 1; j<A.length; j++){
            sum = sum + A[j]
            avg = sum/A[0];
        }

        // 평균값보다 큰 점수 갯수 구하기
        let count = 0;
        for (let x = 1; x<A.length; x++){
            if (A[x] > avg){
                count ++;
            }
        }

        // 소수 3째자리 까지 구해야 하기 때문에 toFixed 사용
        console.log((count/A[0]*100).toFixed(3)+'%');
    }

    process.exit();
});

