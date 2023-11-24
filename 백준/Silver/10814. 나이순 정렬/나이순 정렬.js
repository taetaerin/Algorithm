const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const list = input.shift()

input.sort((a,b) => a.split(' ')[0] - b.split(' ')[0])

console.log(input.join('\n'))
