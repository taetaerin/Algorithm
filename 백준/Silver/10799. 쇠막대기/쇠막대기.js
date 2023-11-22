const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split('')

let answer = 0;
let stack = []

for(let i=0; i<input.length; i++) {
    let x = input[i]
    if(x== '(') {
        stack.push(x)
    }else{
        if(input[i-1] == '(') {
            stack.pop()
            answer += stack.length
        }else{
            stack.pop()
            answer += 1
        }
    }
}

console.log(answer)