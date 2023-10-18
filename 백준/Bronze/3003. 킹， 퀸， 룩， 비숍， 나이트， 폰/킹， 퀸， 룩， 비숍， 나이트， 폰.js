const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

let a = [1, 1, 2, 2, 2, 8]

let b = [];

for(let i=0; i<a.length; i++) {
  b.push(a[i] - input[i])
}
console.log(b.join(' '))