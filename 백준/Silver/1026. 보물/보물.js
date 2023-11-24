const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = input.shift()

let alist = input[0].split(' ').sort((a,b) => a-b)
let blist = input[1].split(' ').sort((a,b) => b-a)

let sum = 0;
for(let i=0; i<input[0].split(' ').length; i++) {
  sum += parseInt(alist[i])*parseInt(blist[i])
}

console.log(sum)