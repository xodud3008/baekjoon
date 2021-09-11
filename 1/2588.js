const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
})
    .on('close', function () {
        console.log(input[0] * (input[1]%10))
        console.log(input[0] * Math.floor((input[1]%100)/10));
        console.log(input[0] * Math.floor(input[1]/100))
        console.log(input[0] * input[1])
        process.exit();
    });

// 입력하는 숫자를 한줄씩 입력해야 되는데 한줄에 입력하게
// 만들어서 계속 틀렸다고 표시됨