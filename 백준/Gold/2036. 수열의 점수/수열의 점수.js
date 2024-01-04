const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
let n = input.shift()

let plus = []
let minus =[]
let answer = 0n

for(let x of input) {
    if(x > 1) {
        plus.push(x)
    }else if(x<=0) {
        minus.push(x)
    }else {
        answer += 1n
    }
}

plus.sort((a,b) => b-a)
minus.sort((a,b) => a-b)


if(plus.length % 2 === 0) {
    for(let i=0; i<plus.length; i+=2) {
        answer +=  BigInt(plus[i] * plus[i+1])
    }
}else {
    for(let i=0; i<plus.length-1; i+=2) {
        answer +=  BigInt(plus[i] * plus[i+1])
    }
    answer += BigInt(plus[plus.length-1])
}


if(minus.length % 2 === 0) {
    for(let i=0; i<minus.length; i+=2) {
        answer +=  BigInt(minus[i] * minus[i+1])
    }
}else {
    for(let i=0; i<minus.length-1; i+=2) {
        answer +=  BigInt(minus[i] * minus[i+1])
    }
    answer += BigInt(minus[minus.length-1])
} 
console.log(answer.toString())