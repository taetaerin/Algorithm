const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = input.shift()

input = input.map(i => Number(i))
const maxNum = Math.max(...input)

let dp = Array.from({length: maxNum+1})
dp[0] = [1, 0]
dp[1] = [0, 1]

for(let i=2; i<=maxNum; i++) {
    dp[i] = [dp[i-2][0] +dp[i-1][0], dp[i-2][1] +dp[i-1][1]]
}

for(let x of input) {
    console.log(dp[x].join(' '))
}