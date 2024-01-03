const { constants } = require('buffer');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
let n = input.shift()

let list = []

for(let i=1; i<input.length; i+=2) {
    list.push(input[i].split(' ').map(Number))
}

for(let x of list) {
    let answer = 0
    let num = x[x.length-1]
    for(let i=x.length-1; i>=0; i--) {
        if(x[i] < num) {
            answer += num - x[i]
        }else {
            num = x[i]
        }

    }
    console.log(answer)
}
