const fs = require('fs')

let a = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let b = a[1].split(' ').map(Number)

m = Math.max(...b)

let c = 0
for(let i=0; i<a[0]; i++) {
  c += (b[i]/m * 100)
}

console.log(c/a[0])