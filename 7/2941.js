const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin
});

let input = [];

rl.on('line', function (line){
    input.push(line);

}).on('close',function (){

    let str = input[0].trim();
    let arr = []

    for (let i = 0; i<str.length; i++){
        if (str[i] === 'c' && str[i + 1] === '='){
            arr.push(str[i] + str[i + 1])
            i++
        } else if(str[i] === 'c' && str[i + 1] === '-'){
            arr.push(str[i] + str[i + 1])
            i++
        } else if(str[i] === 'd' && str[i + 1] === 'z' && str[i + 2] === '=') {
            arr.push(str[i] + str[i + 1] + str[i + 2])
            i = i + 2
        } else if(str[i] === 'd' && str[i + 1] === '-'){
            arr.push(str[i] + str[i + 1])
            i++
        } else if(str[i] === 'l' && str[i + 1] === 'j'){
            arr.push(str[i] + str[i + 1])
            i++
        } else if(str[i] === 'n' && str[i + 1] === 'j'){
            arr.push(str[i] + str[i + 1])
            i++
        } else if(str[i] === 's' && str[i + 1] === '='){
            arr.push(str[i] + str[i + 1])
            i++
        } else if(str[i] === 'z' && str[i + 1] === '='){
            arr.push(str[i] + str[i + 1])
            i++
        } else {
            arr.push(str[i])
        }
    }
    console.log(arr.length)
});
