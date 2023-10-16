const fs = require('fs')

let a = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let list = a[1].split(' ').map(Number)

let answer = 0;

for(let i=0; i<list.length; i++) {
  if(list[i] == a[2]) {
    answer += 1
  }
}

console.log(answer)