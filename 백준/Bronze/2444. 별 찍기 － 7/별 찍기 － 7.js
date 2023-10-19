const fs = require('fs')

let input = Number(fs.readFileSync('/dev/stdin').toString().trim())

for(let i=0; i<input; i++) {
  let a = ' '.repeat(input-(i+1))
  let b = "*".repeat(2*i+1)
  console.log(a+b)
}

for(let i=(input -1); i>0; i--) {
  let a = ' '.repeat(input-i)
  let b = "*".repeat(2*(i-1)+1)
  console.log(a+b)
}