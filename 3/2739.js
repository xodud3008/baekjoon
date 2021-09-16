const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');

    let num = Number(input[0]);

    for(let i = 1; i<=9; i++){
        console.log(`${num} * ${i} = ${num * i}`)
    }
})
    .on('close', function () {
        process.exit();
    });