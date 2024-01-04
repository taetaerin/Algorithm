const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let n = fs.readFileSync(filePath).toString().trim();

let dp = Array.from({length: Number(n)+1}, ()=> 10000)
dp[0] = 0
dp[1] = 0

for(let i=2; i<=n; i++) {
    dp[i] = dp[i-1] + 1
    if(i % 2 == 0) {
        dp[i] = Math.min(dp[i], dp[i/2]+1)
    }
    if(i % 3 == 0) {
        dp[i] = Math.min(dp[i], dp[i/3]+1)
    }
}

console.log(dp[n])