const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let n = Number(input[0])
let que = []

let result = []
for(let i=1; i<=n; i++) {
    let x = input[i]
    if(x.includes('push')) {
        let [a, b] = x.split(' ')
        que.push(b)
    }
    else if(x == 'front') {
        if(que.length == 0) result.push(-1)
        else result.push(que[0])
        
    }
    else if(x == 'back') {
        if(que.length == 0) result.push(-1)
        else result.push(que[que.length-1])
    }
    else if(x == 'size'){
        result.push(que.length)
    }
    else if(x == 'empty') {
        if(que.length == 0) result.push(1)
        else result.push(0)
    }
    else if(x == 'pop') {
        if(que.length != 0) {
            let num = que.shift()
            result.push(num)
        }
        else result.push(-1)
    }
}

console.log(result.join('\n'))

