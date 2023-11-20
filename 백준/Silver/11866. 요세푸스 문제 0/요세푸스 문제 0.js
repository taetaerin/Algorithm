const fs = require('fs')

let [N, K] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

let list = Array.from({length: N}, (v, i) => i+1)
//console.log(list)
let answer = [];
for(let i=0; i<N; i++) {
    for(let j=0; j<K-1; j++) {
        list.push(list.shift())
    }
    answer.push(list.shift())
}

console.log('<'+answer.join(', ')+'>')