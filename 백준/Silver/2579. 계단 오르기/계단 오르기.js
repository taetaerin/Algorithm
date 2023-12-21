const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
let n = input.shift()

let dp = Array.from({length: n+1}, () => [0, 0 , 0])

for(let i=1; i<=n; i++) {
    dp[i][0] = Math.max(dp[i-1][1],  dp[i-1][2])
    dp[i][1] = dp[i-1][0] + input[i-1] 
    dp[i][2] = dp[i-1][1] + input[i-1] 
}



console.log(Math.max(dp[dp.length-1][1],dp[dp.length-1][2]))

