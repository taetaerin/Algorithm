const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split('')

let b = 0;

for(let i=0; i<input.length; i++) {
  if('ABC'.includes(input[i])) b += 3
  else if('DEF'.includes(input[i])) b += 4
  else if('GHI'.includes(input[i])) b += 5
  else if('JKL'.includes(input[i])) b += 6
  else if('MNO'.includes(input[i])) b += 7
  else if('PQRS'.includes(input[i])) b += 8
  else if('TUV'.includes(input[i])) b += 9
  else if('WXYZ'.includes(input[i])) b += 10
}

console.log(b)