const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let n = fs.readFileSync(filePath).toString().trim();

let dp = Array.from({length: 46}, () => 0)
dp[0] = 0
dp[1] = 1

for(let i=2; i<=n; i++) {
    dp[i] = dp[i-2] + dp[i-1]
}

console.log(dp[n])