const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
input.pop()

for(let x of input) {
    let stack = []
    for(let j of x) {
        if(j == '(' || j=='[') {
            stack.push(j)
        }
        else if(j== ')') {
            if(stack[stack.length-1] == '(') stack.pop()
            else stack.push(j)
        }
        else if(j== ']') {
            if(stack[stack.length-1] == '[') stack.pop()
            else stack.push(j)
        }
        
    }
    if(stack.length == 0) console.log("yes")
    else console.log('no')
}