const fs = require('fs')

let a = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let b = a[0]
console.log(b[a[1]-1])
