const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number)
let list = input[1].split(' ').map(Number)

let sum = 0, lt=0, minNum=123456789;

if(list.reduce((a,b) => a+b) < m) minNum =0

for(let rt=0; rt<list.length; rt++) {
  sum += list[rt]

  while(sum >= m) {
    minNum = Math.min(minNum, rt-lt+1)
    sum -= list[lt]
    lt++ 
  }

}

console.log(minNum)



