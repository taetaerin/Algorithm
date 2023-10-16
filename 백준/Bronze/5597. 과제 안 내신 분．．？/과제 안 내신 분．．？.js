const fs = require('fs')

let a = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number)
let b = []
for(let i=1; i<=30; i++) {
  if(a.includes(i)) continue;
  b.push(i)
}

for(let i=0; i<b.length; i++) {
  console.log(b[i])
}