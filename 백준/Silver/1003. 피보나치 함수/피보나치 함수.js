const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = input.shift()
let list = input.map(Number)
let maxNum = Math.max(...list)

let dp = Array.from({length: maxNum+1}, () => [0,0])
dp[0] = [1, 0]
dp[1] = [0, 1]

for(let i=2; i<=maxNum; i++) {
    dp[i][0] = dp[i-1][0] + dp[i-2][0]
    dp[i][1] = dp[i-1][1] + dp[i-2][1]
}

for(let x of list) {
    console.log(dp[x][0], dp[x][1])
}