const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split('')

let oneNum = 0;
let zeroNum = 0;

for(let i=0; i<input.length; i++) {
    if(input[i] == 1) {
        if(input[i] != input[i+1]) {
            oneNum +=1
        }
    }else {
        if(input[i] != input[i+1]) {
            zeroNum +=1
        }
    }
 }

console.log(Math.min(oneNum, zeroNum))