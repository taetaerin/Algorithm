const fs = require('fs')

let a = fs.readFileSync('/dev/stdin').toString().trim().split('')
console.log(a.length)