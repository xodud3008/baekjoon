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

        if (input[0] <= 100 && input[0] >= 90){
            console.log('A')
        } else if(input[0] <=89 && input[0] >= 80){
            console.log('B')
        } else if(input[0] <= 79 && input[0] >= 70){
            console.log('C')
        } else if (input[0] <= 69 && input[0] >= 60){
            console.log('D')
        } else {
            console.log('F')
        }
        process.exit();
    });