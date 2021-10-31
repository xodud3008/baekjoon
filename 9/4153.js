let input = require('fs').readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

for (let N of input){
    let nums = N.split(' ').sort((a, b) => a-b)
    let num1 = nums.shift()
    let num2 = nums.shift()
    let num3 = nums.shift()
    if (parseInt(num1) === 0 && parseInt(num2) === 0 && parseInt(num3) === 0){
        break;
    }
    if (parseInt(num3)*parseInt(num3) === parseInt(num1)*parseInt(num1) + parseInt(num2)*parseInt(num2)){
        console.log('right')
    } else {
        console.log('wrong')
    }
}



