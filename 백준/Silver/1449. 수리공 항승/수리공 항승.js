const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [n, m] = input.shift().split(' ')

let list = input[0].split(' ').sort((a,b) => a-b).map(Number)

let end = list[0] + (m-1);
let answer = 1;

for(let x of list) {
  if(x > end) {
      answer += 1
      end = x + (m-1)
  }
}

console.log(answer)