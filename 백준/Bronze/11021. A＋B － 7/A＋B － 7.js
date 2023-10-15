const fs = require('fs')

let a = fs.readFileSync('/dev/stdin').toString().split('\n')

const max = a[0]

for(let i=1; i<= max; i++) {
  let b = a[i].split(' ').map(Number)
  console.log(`Case #${i}: ${b[0]+b[1]}`)
}
