const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const list = input[1].split(' ').sort((a,b) => a-b).map(Number)

let answer = 0
let sum = 0;
for(let x of list) {
  sum += x
  answer += sum
}

console.log(answer)