const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let list = []
for(let i=1; i<input.length; i++) {
  list.push(input[i])
}

let arr = [...new Set(list)]

let result  = arr.sort().sort((a,b) => a.length-b.length)


console.log(result.join('\n'))