const fs = require('fs')

let a = fs.readFileSync('/dev/stdin').toString()
let answer = 0;
for(let i=1; i<= a; i++) {
  answer += i
}
console.log(answer)