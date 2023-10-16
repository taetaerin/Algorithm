const fs = require('fs')

let a = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let list = a[1].split(' ').map(Number)

console.log(Math.min(...list), Math.max(...list))