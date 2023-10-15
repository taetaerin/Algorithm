const fs = require('fs')

let a = fs.readFileSync('/dev/stdin').toString().split('\n')

for(let i=1; i<= a[0]; i++) {
  let b = a[i].split(' ').map(Number)
  console.log(b[0] + b[1])
}