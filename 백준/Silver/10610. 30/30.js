const fs = require('fs')

let n = fs.readFileSync('/dev/stdin').toString().trim()
let list = n.split('').map(Number)


if(!list.includes(0)) {
  console.log(-1)
  return
}

let sum = list.reduce((a,b) => a+b)

if(sum % 3 == 0) {
  console.log(list.sort((a,b) => b-a).join(''))
}else{
  console.log(-1)
}