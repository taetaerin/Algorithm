const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n,L] = input.shift().split(' ').map(Number)
let list = input[0].split(' ').map(Number).sort((a,b) => a-b)
let last = 0;
let answer = 0;

for(let x of list) {
    if(x > last) {
        last = x + L - 1;
        answer += 1
    }
}

console.log(answer)