const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split('\\').map((el) => parseInt(el));
})
    .on('close', function () {
        console.log(input[0] * (input[1]%10))
        console.log(input[0] * Math.floor((input[1]%100)/10));
        console.log(input[0] * Math.floor(input[1]/100))
        console.log(input[0] * input[1])
        process.exit();
    });