const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = input.shift()

let answer = 0

for(let list of input) {
    let stack = [];
    for(let x of list) {
        if(x == stack[stack.length-1]) {
            stack.pop()
        }
        else {
            stack.push(x)
        }
        //stack.push(x)
        
    }
    if(stack.length == 0) {
        answer += 1
    }
}

console.log(answer)