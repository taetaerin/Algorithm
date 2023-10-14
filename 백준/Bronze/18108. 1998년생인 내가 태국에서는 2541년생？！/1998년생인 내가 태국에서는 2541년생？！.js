const fs = require('fs')
const inputData = fs.readFileSync('/dev/stdin').toString()

console.log(parseInt(inputData)- 543)