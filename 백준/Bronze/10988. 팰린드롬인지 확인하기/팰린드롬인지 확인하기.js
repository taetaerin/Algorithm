const fs = require('fs')

let a = fs.readFileSync('/dev/stdin').toString().trim().split('')

if(a.join('') === a.reverse().join('')) {
  console.log('1')
}else console.log('0')