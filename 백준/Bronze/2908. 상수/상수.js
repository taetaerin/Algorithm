const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ')

let a = input[0].split('').reverse().join('')
let b = input[1].split('').reverse().join('')

console.log( a>b ? a : b)