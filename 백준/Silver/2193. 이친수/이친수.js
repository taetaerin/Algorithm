const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let n = fs.readFileSync(filePath).toString().trim();

let dp = Array.from({length: Number(n)+1}, () => 0)

dp[1] = 1
dp[2] = 1

for(let i=3; i<=n; i++) {
    dp[i] = BigInt(dp[i-1]) + BigInt(dp[i-2])
}

console.log(String(dp[n]))