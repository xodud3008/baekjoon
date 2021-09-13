const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ').map((el) => parseInt(el));
})
    .on('close', function () {
        if ((input[0]%4 === 0 && input[0]%100 !==0) || input[0]%400 === 0){
            console.log('1')
        } else {
            console.log('0')
        }
        process.exit();
    });