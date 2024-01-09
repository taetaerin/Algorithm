const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let n = Number(fs.readFileSync(filePath).toString().trim());

let dp = Array.from({length: n+1}, () => 0)
dp[0] = 0
dp[1] = 1
dp[2] = 3

for(let i=3; i<=n; i++) {
    dp[i] = (dp[i-1] + dp[i-2]*2) % 10007
}

console.log(dp[n])