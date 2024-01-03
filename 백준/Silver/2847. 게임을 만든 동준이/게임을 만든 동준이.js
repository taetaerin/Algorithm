const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
let n = input.shift()

let list = input.map(Number)

let reverseList = list.reverse()

let answer = 0

for(let i=0; i<reverseList.length; i++) {
    if(reverseList[i] <= reverseList[i+1]) {
        answer += reverseList[i+1] - reverseList[i] + 1
        reverseList[i+1] -= reverseList[i+1] - reverseList[i] + 1
    }
}

console.log(answer)