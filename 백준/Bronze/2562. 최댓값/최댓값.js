const fs = require('fs')

let a = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

console.log(Math.max(...a))
console.log(a.indexOf(Math.max(...a)) + 1)