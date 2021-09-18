const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);

    let n = Number(input[0])
    let x = 0;

    for (let i = 1; i <= n; i++){
        x = x + i;

    }
    console.log(x)

}).on('close', function () {

    process.exit();
});