const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

let n = input[0]
let stack =[]
for(let i=1; i<=n; i++) {
    if(input[i] == 0) {
        stack.pop()
    }else{
        stack.push(input[i])
    }
}

if(stack.length == 0) {
    console.log(0)
}else{
    console.log(stack.reduce((a,b)=>a+b))
}