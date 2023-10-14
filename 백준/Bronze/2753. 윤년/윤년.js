const fs = require('fs')
const [a] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number)

if(a%4 == 0 && a%100 != 0 | a%400 == 0 ) console.log('1')
else console.log('0')