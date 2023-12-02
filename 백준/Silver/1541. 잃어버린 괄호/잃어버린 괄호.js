const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split('-')

let list = [];

for(let x of input) {
  if (x.includes('+')) {
    let num = x.split('+')
    list.push(num.map(Number).reduce((a,b) => a+b))
  }
  else {
    list.push(Number(x))
  }
}

console.log(list.reduce((a,b) => a-b))