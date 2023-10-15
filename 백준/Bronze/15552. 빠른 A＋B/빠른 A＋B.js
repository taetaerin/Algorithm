const fs = require('fs')

let a = fs.readFileSync('/dev/stdin').toString().split('\n')

const max = a[0]
let answer = ''

for(let i=1; i<= max; i++) {
  let b = a[i].split(' ').map(Number)
  answer += (b[0] + b[1]) + '\n'
}

console.log(answer)