const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin
});

let input = [];

rl.on('line', function (line){
    input.push(line);

}).on('close',function (){

    // A(65) ~ Z(90)
    let str = input[0]
    let count = 0;

    for (let i = 0; i<26; i++){
        if (str[i] === 'A' || str[i] === 'B' || str[i] === 'C'){
            count = count + 3;
        } else if (str[i] === 'D' || str[i] === 'E' || str[i] === 'F'){
            count = count + 4;
        } else if (str[i] === 'G' || str[i] === 'H' || str[i] === 'I') {
            count = count + 5;
        } else if (str[i] === 'J' || str[i] === 'K' || str[i] === 'L') {
            count = count + 6;
        } else if (str[i] === 'M' || str[i] === 'N' || str[i] === 'O') {
            count = count + 7;
        } else if (str[i] === 'P' || str[i] === 'Q' || str[i] === 'R' || str[i] === 'S') {
            count = count + 8;
        } else if (str[i] === 'T' || str[i] === 'U' || str[i] === 'V') {
            count = count + 9;
        } else if (str[i] === 'W' || str[i] === 'X' || str[i] === 'Y' || str[i] === 'Z') {
            count = count + 10;
        }
    }
    console.log(count)




});
