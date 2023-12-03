const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0])

let distance = input[1].split(' ').map(Number)
let price = input[2].split(' ').map(Number)

let min = price[0]
let answer = BigInt(0);
for(let i=0; i<price.length-1; i++) {
  if(min >= price[i]) {
    min = price[i]
  }
  answer += BigInt(min) * BigInt(distance[i])
}

console.log(String(answer))