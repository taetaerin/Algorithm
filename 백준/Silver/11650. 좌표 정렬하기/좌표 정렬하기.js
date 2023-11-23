const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = input[0]

let list = []

for(let i=1; i<=n; i++) {
  let res = input[i].split(' ').map(Number)
  list.push(res)
}

list.sort((a,b) => {
  if(a[0] == b[0]) {
    return a[1] - b[1]
  }else {
    return a[0] - b[0]
  }
})

let answer = []

for(let x of list) {
  let res = x.join(' ')
  answer.push(res)
}

console.log(answer.join('\n'))

