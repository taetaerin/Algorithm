const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let maxLen = -Infinity

for(let x of input) {   
    maxLen = Math.max(maxLen, x.length)
}

let answer = []

for(let i=0; i<maxLen; i++) {
    for(let x of input) {
        answer.push(x[i])
    }
}

let list = answer.filter((item) => item != undefined)
console.log(list.join(''))