const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((item) => item.split(' '))

const board = {
  "A+": 4.5, A0: 4.0,
	"B+": 3.5, B0: 3.0,
	"C+": 2.5, C0: 2.0,
	"D+": 1.5, D0: 1.0,
	F: 0.0
}

let sum = 0;
let t = 0;
for(let [a, b, c] of input) {
  if(c==="P") {
    continue
  }

  sum += Number(b)*board[c]
  t += Number(b)
}

console.log(sum/t)