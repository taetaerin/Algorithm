const fs = require('fs')

let a = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i=1; i<=a[0]; i++) {
  let b = a[i]
  console.log(b[0]+b[b.length-1])
}
