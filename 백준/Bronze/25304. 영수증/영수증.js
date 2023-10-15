const fs = require('fs')

let a = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let answer = 0;
for(let i=2; i< a.length; i++) {
  let b = a[i].split(' ').map(Number)
  answer += (b[0] * b[1])
}

if(answer == Number(a[0])) {
  console.log("Yes")
} else console.log("No")