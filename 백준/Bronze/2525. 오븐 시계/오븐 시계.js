const fs = require('fs')
let [a, b] = fs.readFileSync('/dev/stdin').toString().split('\n')
let [c, d] = a.toString().split(' ').map(Number)

b = Number(b)

let i = 0;
let j = 0;

if(d+b < 60) {
  i = c
  j = d+b
  
}else {
  i = c + Math.floor((d+b)/60);
  j = (d+b) % 60
}

if(i >= 24) i = i-24
console.log(i, j)
