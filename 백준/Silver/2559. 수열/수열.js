const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [n, m] = input[0].split(' ').map(Number)
let list = input[1].split(' ').map(Number)
let sum = 0;

for(let i=0; i<m; i++) sum += list[i]

let answer=sum

for(let rt=m; rt<n; rt++) {
    sum += (list[rt]-list[rt-m])
    answer = Math.max(answer, sum)
}

console.log(answer)