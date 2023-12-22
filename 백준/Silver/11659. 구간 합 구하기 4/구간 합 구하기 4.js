const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
let [n, m] = input.shift().split(' ').map(Number)

let list = input.shift().split(' ').map(Number)

let dp = Array.from({length: Number(n)+1} , () => 0)
dp[0] = 0
dp[1] = list[0]


for(let i=2; i<=n; i++) {
    dp[i] = dp[i-1] + list[i-1]
}

let result = []

for(let x of input) {
    let [start, end] = x.split(' ').map(Number)
    result.push(dp[end] - dp[start-1])
}

console.log(result.join('\n'))
