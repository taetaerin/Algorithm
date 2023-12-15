const fs = require('fs')

let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')
let arr = input.map((item) => item.split(' ').map(Number))


let maxNum = -Infinity;
let n = 0;
let m = 0;

for(let i=0; i<9; i++) {
    for(let j=0; j<9; j++) {
        let num = arr[i][j]
        if(num >= maxNum) {
            maxNum = Math.max(maxNum, num)
            n = i+1;
            m = j+1;
        }
    }
}

console.log(maxNum)
console.log(n, m)