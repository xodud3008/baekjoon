const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin
});

let input = [];

rl.on('line', function (line){
    input.push(line);

    let N = Number(input);
    let count = 0;

    while(true){
        let sum = Math.floor(input/10) + (input%10);
        input = (input%10)*10 + (sum%10);
        count++;
            if(N === input){
                break;
            }
    }
    console.log(count);

}).on('close',function (){




        // A = Math.floor(C/10);
            // B = C%10;
            // C = B + String((A+B)%10);
            // count++;
            // console.log(C, count);
            //
            // A = Math.floor(C/10);
            // B = C%10;
            // C = B + String((A+B)%10);
            // count++;
            // console.log(C, count);
            //
            // A = Math.floor(C/10);
            // B = C%10;
            // C = B + String((A+B)%10);
            // count++;
            // console.log(C, count);
            //
            // if (C === N){
            //     break;
            // }


    process.exit();
});

