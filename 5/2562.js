const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin
});

let input = [];

rl.on('line', function (line){
    input.push(line);

}).on('close',function (){

    let A = input.map((x) => Number(x))

    let N = A[0];
    let count = 0;

    for (let i = 1; i<9; i++){
        if (N < A[i]){
            N = A[i];
            count = i;
        }
    }
    console.log(N);
    console.log(count + 1);

    process.exit();
});

