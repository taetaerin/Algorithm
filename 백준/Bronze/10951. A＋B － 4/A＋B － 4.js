const fs = require('fs')

let a = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i=0; i<a.length; i++) {
  let b = a[i].split(' ').map(Number)
  console.log(b[0]+b[1])
}
