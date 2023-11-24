const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('');

let list = []

for(let x of input) {
  list.push(x)
}

console.log(list.sort((a,b) => b-a).join(''))