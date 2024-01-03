const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().trim();
let list = input.split('-')

let answer = []

for(let x of list) {
    if(x.includes('+')) {
        let plus = x.split('+').map(Number)
        answer.push(plus.reduce((a,b) => a+b))
    }else{
        answer.push(Number(x))
    }
}

console.log(answer.reduce((a,b) => a-b))