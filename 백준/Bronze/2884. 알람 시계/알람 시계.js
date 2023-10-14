const fs = require('fs')
const [a, b] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number)

let i = 0;
let j = 0;

if(b < 45) {
  j = 60 - (45-b)
  if(a != 0) {
    i = a-1
  }else i = 23
}else {
  j = b - 45
  i = a
}


console.log(i+" "+j)