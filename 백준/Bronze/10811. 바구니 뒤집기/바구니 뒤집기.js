const fs = require('fs')

let a = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let list = [];
let [b,c] = a[0].split(' ')

for(let i=1; i<=b; i++) {
  list.push(i)
}

for(let i=1; i<=c; i++) {
  let list2 = [];
  let [start, end] = a[i].split(' ').map(Number)
  for(let j=start-1; j<end; j++) {
    list2.push(list[j])
  }
  list2.reverse()
  list.splice(start-1, end-start+1, ...list2)
}

console.log(list.join(' '))