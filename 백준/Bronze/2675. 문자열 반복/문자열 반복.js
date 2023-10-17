const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i=1; i<=input[0]; i++) {
  let [a, b] = input[i].split(' ')
  let answer = ''
  for(let j=0; j<b.length; j++) {
    answer += b[j].repeat(a)
  }
  console.log(answer)
}