const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin
});

let input = [];

rl.on('line', function (line){
    input.push(line);

}).on('close',function (){

    let str = input[0].trim().split(' ');

    if (str[0] === ''){
        console.log(0)
    } else {
        console.log(str.length)
    }


});
