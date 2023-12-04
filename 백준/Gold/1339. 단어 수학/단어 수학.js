const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let n = input.shift()

let hash = new Map();

for(let x of input) {
  for(let i=0; i<x.length; i++) {
    let count = Math.pow(10, x.length-(i+1))
    if(hash.has(x[i])) {
      hash.set(x[i], hash.get(x[i]) + count)
    }else{
      hash.set(x[i], count)
    }
  }
}

let hashSort = Array.from(hash.entries()).sort((a,b) => b[1] - a[1])

let answer = 0;
let num = 9;

for(let [k, j] of hashSort) {
  answer += num * j
  num -=1
}

console.log(answer)