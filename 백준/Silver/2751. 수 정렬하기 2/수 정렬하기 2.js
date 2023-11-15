const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let list = [];
for(let i=1; i<=input[0]; i++) {
    list.push(input[i])
}

list.sort((a,b) => a-b)

console.log(list.join('\n'))