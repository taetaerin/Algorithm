const fs = require('fs')

let a = fs.readFileSync('/dev/stdin').toString()

a = Number(a)

for(let i=1; i<=9; i++) {
  console.log(a, "*", i, "=", a*i)
}