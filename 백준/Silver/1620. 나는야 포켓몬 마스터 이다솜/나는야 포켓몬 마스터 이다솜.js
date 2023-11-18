const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(' ').map(Number)

let hs = new Map();

for(let i=1; i<=n; i++) {
    hs.set(input[i], i)
}


let answer = []
for(let i=n+1; i<input.length; i++){
    if(isNaN(input[i])) {
        answer.push(hs.get(input[i]))
    }else{
        answer.push(input[input[i]])
    }
}

console.log(answer.join('\n'))

