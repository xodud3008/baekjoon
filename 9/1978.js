let input = require('fs').readFileSync('/dev/stdin', 'utf8').toString().trim()

let N = input[0]
let arr = input[1].split(' ')
let count = 0;

function isPrime(num) {
    // TODO: 여기에 코드를 작성합니다.
    if(num <= 1){
        return false;
    }
    if(num === 2) {
        return true;
    }
    if(num % 2 === 0){
        return false;
    }
    let sqrt = parseInt(Math.sqrt(num));

    for (let i = 3; i <= sqrt; i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

for (let i = 0; i<N; i++){
    if (isPrime(arr[i]) === true){
        count++
    }
}
console.log(count)