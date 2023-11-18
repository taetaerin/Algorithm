const fs = require('fs')

let [nlen, N, mlen, M] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

N = N.split(' ').map(Number)
M = M.split(' ').map(Number)

let nH = new Map();

for(let x of N) {
    nH.set(x, 1)
}

let answer = []
for(let x of M) {
    if(nH.has(x)) {
        answer.push('1')
    }else{
        answer.push('0')
    }
}

console.log(answer.join(' '))