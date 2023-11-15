const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i=1; i<=input[0]; i++) {
    let stack = [];
    let list = input[i].split('')
    for(let k=0; k<list.length; k++) {
        if(list[k] == '(') {
            stack.push('(')
        }else{
            if(stack.includes('(')) {
                stack.pop()
            }else {
                stack.push(')')
            }
        }
    }
    if(stack.length == 0) {
        console.log('YES')
    }else{
        console.log('NO')
    }
}