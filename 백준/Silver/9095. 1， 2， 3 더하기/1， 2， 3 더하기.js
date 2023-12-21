const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift()

let dp = Array.from({length: 11}, () => 0) 
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;


for(let i=4; i<=10; i++) {
    dp[i] = dp[i-3] + dp[i-2] + dp[i-1]
}

for(let x of input) {
    console.log(dp[x])
}
