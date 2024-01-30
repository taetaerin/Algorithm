const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let [n, list] = fs.readFileSync(filePath).toString().trim().split('\n');
n = Number(n)

list = list.split(' ').map(Number)


let dp = Array.from({length: n}, () => 0)
dp[0] = list[0]

for(let i=1; i<n; i++) {
    dp[i] = list[i]
    for(let j=0; j<i; j++) {
        if(list[i] > list[j] && dp[i] < dp[j] + list[i]) {
            dp[i] = dp[j] + list[i]
        }
    }

}
console.log(Math.max(...dp))