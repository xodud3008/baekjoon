const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin
});

let input = [];

rl.on('line', function (line){
    input.push(line);

}).on('close',function (){

    let str = input[0].toUpperCase(); // 입력한 문자
    let Alphbet = []; // 알파벳 배열
    let arr = []; // 알파벳 갯수만큼 0을 넣은 배열

    for (let i = 65; i<=90; i++){
        Alphbet.push(String.fromCharCode(i))
    }

    for (let i = 0; i<26; i++){
        arr[i] = 0;
    }

    for (let i = 0; i<str.length; i++){
        for (let j = 0; j<arr.length; j++){
            if (str[i] === Alphbet[j]){
                arr[j]++;
            }
        }
    }

    let count = 0;

    for (let i = 0; i<arr.length; i++) {
        if (Math.max.apply(null, arr) === arr[i]) {
            count++;
        }
    }
    if (count >1){
        console.log('?')
    } else if (count === 1){
        console.log(Alphbet[arr.indexOf(Math.max.apply(null, arr))]) // 인덱스 번호의 문자
    }

    // console.log(arr.indexOf(Math.max.apply(null, arr))) // 최대값 인덱스 번호
    // console.log(Alphbet[arr.indexOf(Math.max.apply(null, arr))]) // 인덱스 번호의 문자

});
