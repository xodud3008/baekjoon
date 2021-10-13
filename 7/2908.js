const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin
});

let input = [];

rl.on('line', function (line){
    input.push(line);

}).on('close',function (){

    // 두 수를 한 줄에 입력
    let A = input[0].split(' ')[0]
    let B = input[0].split(' ')[1]

    // 각 숫자의 순서를 반대로(세자리 수만 입력하고 0이 없기 때문에)
    let Aa = A[2] + A[1] + A[0]
    let Bb = B[2] + B[1] + B[0]

    // 숫자 비교
   if (Aa > Bb){
       console.log(Aa)
   } else {
       console.log(Bb)
   }


});
