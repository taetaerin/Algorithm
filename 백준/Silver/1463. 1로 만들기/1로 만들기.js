const fs = require('fs');

let n = fs.readFileSync('/dev/stdin').toString().trim();
n = Number(n);

let dp = Array.from({ length: n + 1 }, () => 10000);

dp[0] = 0;
dp[1] = 0;

const arr = [1, 2, 3];

for (let i = 2; i <= n; i++) {
    for (let x of arr) {
        if (i % x === 0) {
            dp[i] = Math.min(dp[i], dp[i / x] + 1);
        } else {
            dp[i] = Math.min(dp[i], dp[i - 1] + 1);
        }
    }
}

console.log(dp[n]);