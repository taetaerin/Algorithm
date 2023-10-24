const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((item) => item.split(' '))

for(let i=1; i<=input[0]; i++) {
  answer = []
  for(let x of input[i]) {
    answer.push(x.split('').reverse().join(''))
  }
  console.log(answer.join(' '))
}