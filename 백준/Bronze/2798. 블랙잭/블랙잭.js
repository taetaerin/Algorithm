const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [n, m] = input[0].split(' ').map(Number)
let list = input[1].split(' ').map(Number)

let result = []

for(let i=0; i<n; i++) {
    for(let k=i+1; k<n; k++) {
        for(let j=k+1; j<n; j++) {
            result.push(list[i]+list[k]+list[j])
        }
    }
}

let answer = 0;
for(let x of result) {
    if(x <= m) {
        answer = Math.max(answer, x)
    }
}

console.log(answer)