const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = input.shift()

let list = input[0].split(' ').map(Number)

let dp = Array.from({length: Number(n)}, () => 0)
dp[0] = list[0]

for(let i=1; i<n; i++) {
    dp[i] = Math.max(list[i], list[i]+dp[i-1])
}

console.log(Math.max(...dp))
