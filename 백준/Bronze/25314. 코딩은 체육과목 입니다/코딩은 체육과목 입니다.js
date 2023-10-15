const fs = require('fs')

let a = fs.readFileSync('/dev/stdin').toString().trim()
let answer = ''

for(let i=0; i<a/4; i++) {
  answer += 'long '
}

console.log(answer+'int')