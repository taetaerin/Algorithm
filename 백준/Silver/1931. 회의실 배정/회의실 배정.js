const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = input.shift()

let list= []

for(let x of input) {
  list.push(x.split(' '))
}

let arr = list.sort((a,b) => {
  if(a[1] == b[1]) {
    return a[0] - b[0]
  }else {
    return a[1] - b[1]
  }
})

let finNum = 0;
let answer = 0;

for(let x of arr) {
  if(parseInt(x[0]) >= parseInt(finNum)) {
    answer +=1
    finNum = x[1]
  }
}

console.log(answer)