const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let n = input.shift()

input.sort((a,b) => a-b)

let hash = new Map();

let max = 1
for(let i=0; i<n; i++) {
  if(hash.has(input[i])) {
    max = Math.max(max, hash.get(input[i]) + 1)
    hash.set(input[i], hash.get(input[i]) + 1)
  }
  else {
    hash.set(input[i], 1)
  }
}

let arr=[];
for(let [key, value] of hash) {
  if(value == max) {
    arr.push(key)
  }
}


console.log(Math.round(input.reduce((a,b) => a+b) / n) == -0 ? 0:Math.round(input.reduce((a,b) => a+b) / n))
console.log(input[parseInt(n/2)])
console.log(arr.length==1 ? arr[0] : arr[1])
console.log(input[input.length-1] - input[0])

