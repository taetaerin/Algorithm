const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim()

let sum = 0, answer=0
for(let i=1; i<=1000000; i++) {
    sum = i
    let num = String(i).split('')
    for(let k=0; k<num.length; k++) {
        sum += Number(num[k])
    }
    if(sum == input) {
        answer = i
        break
    }else {
        answer = 0
    }
}

console.log(answer)

