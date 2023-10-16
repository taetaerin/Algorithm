const fs = require('fs')

let a = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [q, w] = a[0].split(' ').map(Number)

let list = new Array(q).fill(0);


for(let i=1; i<a.length; i++) {
  let [b, c, d] = a[i].split(' ').map(Number)
  for(let j=b-1; j<c; j++) {
    list[j] = d
  }
}

console.log(list.join(' '))