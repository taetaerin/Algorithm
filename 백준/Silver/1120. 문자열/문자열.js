const fs = require('fs')

let [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ')

let min = b.length-a.length
let answer=123456;

for(let i=0; i<=min; i++) {
    let cnt = 0
    for(let j=0; j<a.length; j++) {
        if(a[j] !== b[j+i]) {
            cnt++
        }
    }
    answer = Math.min(answer, cnt)
}

console.log(answer)