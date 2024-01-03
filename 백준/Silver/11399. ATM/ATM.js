const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
let n = input.shift()
let list = input.shift().split(' ').map(Number).sort((a,b) => a-b)
let dp = Array.from({length: n}, ()=>0);
dp[0] = list[0]

for(let i=1; i<list.length; i++) {
    dp[i] = dp[i-1] + list[i]
}

console.log(dp.reduce((a,b) => a+b))
