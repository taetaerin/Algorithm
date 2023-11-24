const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = input.shift()

let list = input.sort((a,b) => {
  if(a.split(' ')[1] != b.split(' ')[1]) {
    return a.split(' ')[1] - b.split(' ')[1]
  }else {
    return a.split(' ')[0] - b.split(' ')[0]
  }
})
console.log(input.join('\n'))