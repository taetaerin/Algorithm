const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(' ')
input.shift()

let sixList = [];
let oneList = [];

for(let x of input) {
  const[sixPrice, onePrice] = x.split(' ').map(Number)
  sixList.push(sixPrice)
  oneList.push(onePrice)
}

sixList.sort((a,b) => a-b)
oneList.sort((a,b) => a-b)

let answer = Infinity;

answer = Math.min(answer, oneList[0] * n)
answer = Math.min(answer, sixList[0] * parseInt(n/6) + oneList[0] * parseInt(n%6))
answer = Math.min(answer, sixList[0] * (parseInt(n/6 + 1)))

console.log(answer)
