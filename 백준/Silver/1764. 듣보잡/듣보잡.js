const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let hash= new Map()
let answer = []
for(let i=1; i<input.length; i++) {
    if(hash.has(input[i])) {
        hash.set(input[i], hash.get(input[i])+1)
        if(hash.get(input[i]) == 2) {
            answer.push(input[i])
        }
    }else{
        hash.set(input[i], 1)
    }
}

answer = answer.sort()
console.log(answer.length+"\n" +answer.join("\n"))
