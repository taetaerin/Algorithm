const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let n = input.shift()

input.sort((a,b) => a-b)

let list = [];

for(let i=0; i<n; i++) {
  list.push(input[i] * (n-i))
}

console.log(Math.max(...list))