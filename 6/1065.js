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
    let count = 0;

    for (let i = 1; i<=N; i++){
        if (i<100){
            count ++;
        }
        else if (i >= 100 && Math.floor(i/100) - Math.floor(Math.floor(i/10)%10) === Math.floor(Math.floor(i/10)%10) - Math.floor(i%10) ){
            count++;
        }
    }

    console.log(count)
    process.exit();
});

