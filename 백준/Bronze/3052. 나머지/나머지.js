const fs = require('fs')

let a = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
let b = []

for(let i=0; i<a.length; i++) {
  b.push(a[i] % 42)
}

b= [...new Set(b)]

console.log(b.length)