const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin
});

let input = [];

rl.on('line', function (line){
    input.push(line);

}).on('close',function (){

    let number = Number(input[0]);

    for (let i = 1; i <= number; i++) {
        let N = 0;
        let A = 0;

        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] === 'O') {
                N++;
            } else {
                N = 0;
            }
            A += N;
        }
        console.log(A);
    }
    process.exit();
});

