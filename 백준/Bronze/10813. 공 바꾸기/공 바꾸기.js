const fs = require('fs')

let a = fs.readFileSync('/dev/stdin').toString().split('\n')
const [q, w] = a[0].split(' ').map(Number)

let list = [];

for(let i=1; i<=q; i++) {
  list.push(i)
}

for(let i=1; i<=w; i++) {
  let [b, c] = a[i].split(' ').map(Number)
  let k = list[b-1]
  list[b-1] = list[c-1]
  list[c-1] = k
}
console.log(list.join(" "))