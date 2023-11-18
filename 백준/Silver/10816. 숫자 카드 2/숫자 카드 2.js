const fs = require('fs')

let [nlen, N, mlen, M] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

N = N.split(' ').map(Number)
M = M.split(' ').map(Number) 

let NH = new Map();

for(let x of N) {
    if(NH.has(x)) {
        NH.set(x, NH.get(x) + 1)
    }else{
        NH.set(x, 1)
    }
}

let answer =[]

for(let x of M) {
    if(NH.has(x)) {
        answer.push(NH.get(x))
    }
    else{
        answer.push(0)
    }
}

console.log(answer.join(' '))