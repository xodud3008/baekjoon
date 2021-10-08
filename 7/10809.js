const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin
});

let input = [];

rl.on('line', function (line){
    input.push(line);

}).on('close',function (){

    let S = input[0];

    let A = [];
    let B = [];

    A.push(S.split(''))

    for (let i = 97; i <= 122; i++){
        B.push(S.indexOf(String.fromCharCode(i)));
    }

    console.log(B.join(" "));

});