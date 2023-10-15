const fs = require('fs')

let a = fs.readFileSync('/dev/stdin').toString().trim()

for(let i=1; i<= a; i++) {
  console.log('*'.repeat(i))
}