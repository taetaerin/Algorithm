const fs = require('fs')

let a = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [cnt, k] = a[0].split(' ').map(Number)
let list = a[1].split(' ').map(Number)

let answer= ''
for(let i=0; i<list.length; i++) {
  if(list[i] < k) {
    answer += list[i].toString() + " "
  }
}

console.log(answer)