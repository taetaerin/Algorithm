const fs = require('fs')

let a = fs.readFileSync('/dev/stdin').toString().split('\n')

for(let i=0; i<a.length; i++) {
  let b = a[i].split(' ').map(Number)
  if((b[0]+b[1]) ==0) break;
  console.log(b[0]+b[1])
}
