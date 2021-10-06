const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin
});

let input = [];

rl.on('line', function (line){
    input.push(line);

}).on('close',function (){

    let N = input[0];
    let A = input[1];

    A = String(A).split('');

    let sum = 0;

    for (let i = 0; i<A.length; i++){
        sum = sum + Number(A[i]);
    }
    console.log(sum);
});

