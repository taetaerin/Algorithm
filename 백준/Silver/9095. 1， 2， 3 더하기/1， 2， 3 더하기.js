const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = input.shift()
let list = input.map(Number)
let maxNum = Math.max(...list)

let dp = Array.from({length: maxNum+1}, () => 0)
dp[1] = 1
dp[2] = 2
dp[3] = 4

for(let i=4; i<= maxNum; i++) {
    dp[i] = dp[i-1] + dp[i-2] + dp[i-3]
}

let answer = []
for(let x of list) {
    answer.push(dp[x])
}

console.log(answer.join('\n'))