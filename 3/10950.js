const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);

}).on('close', function () {

    let T = Number(input[0]);

    let test = [];

    for (let i = 1; i <= T; i++){
        test.push(input[i].split(' '));
    }

    for (let i = 0; i < T; i++){
        let A = Number(test[i][0]);
        let B = Number(test[i][1]);

        console.log(A + B);
    }
        process.exit();
    });