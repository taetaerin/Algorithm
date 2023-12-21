const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
let n = input.shift()

let list = input.map(item => item.split(" ").map(Number))

let dp = Array.from({length: Number(n)}, () => [0, 0, 0])

dp[0] = input[0].split(' ').map(Number)


for(let i=1; i<n; i++) {
    dp[i][0] = list[i][0] + Math.min(dp[i-1][1], dp[i-1][2])
    dp[i][1] = list[i][1] + Math.min(dp[i-1][0], dp[i-1][2])
    dp[i][2] = list[i][2] + Math.min(dp[i-1][0], dp[i-1][1])
}

console.log(Math.min(...dp[dp.length-1]))