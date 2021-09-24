const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);

}).on('close', function () {

    let N = +input[0].split(' ')[0];
    let X = +input[0].split(' ')[1];
    let A = input[1].split(' ');
    let result = [];

    for (let i = 0; i < A.length; i++) {
        if (A[i] < X) {
            result.push(A[i]);
        }
    }
    console.log(result.join(' '));

    process.exit();
});