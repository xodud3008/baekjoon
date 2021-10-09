const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin
});

let input = [];

rl.on('line', function (line){
    input.push(line);

}).on('close',function (){

    // 테스트 케이스 갯수
    let T = input[0]

    for (let i = 0; i<T; i++){
        // 정답 넣을 변수
        let answer = '';

        // 반복횟수 R, 문자열 S 공백으로 구분
        let R = input[i+1].split(' ')[0]
        let S = input[i+1].split(' ')[1]

        // repeat 메서드로 S의 각 문자 R번 반복
        for (let j = 0; j<S.length; j++){
            answer += S.split('')[j].repeat(R)
        }

        console.log(answer)
    }

});