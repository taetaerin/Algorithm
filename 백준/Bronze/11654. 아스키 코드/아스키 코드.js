const fs = require('fs')

let a = fs.readFileSync('/dev/stdin').toString().trim()
console.log(a.charCodeAt())