const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let arr1 = input[1].split(' ')
let arr2 = input[2].split(' ')

arr1.push(...arr2)
answer = arr1.sort((a,b) => a-b).join(' ')
console.log(answer)