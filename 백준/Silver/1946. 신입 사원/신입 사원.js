const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = input.shift()

let list = [];

for(let i=0; i<n; i++) {
  let num = input.shift()
  let res = input.splice(0, num)
  list.push(res.map(item => item.split(' ').map(Number)).sort((a,b) => a[0]-b[0]))
}

let answer = []

for(let x of list) {
  let count = 1
  let num = x[0][1]
  for(let i=1; i<x.length; i++) {
    if(num > x[i][1]) {
      num = x[i][1]
      count += 1
    }
    
  }
  answer.push(count)
}

console.log(answer.join('\n'))