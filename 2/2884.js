const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');

    H = Number(input[0]);
    M = Number(input[1]);

    if (M < 45){
        if (H === 0){
            console.log('23' + ' ' + (M + 60 - 45))
        } else if (H > 0){
            console.log((H - 1) + ' ' + (M + 60 - 45))
        }
    } else {
        console.log(H + ' ' + (M - 45))
    }

})
    .on('close', function () {
        process.exit();
    });