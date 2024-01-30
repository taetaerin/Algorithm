const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let [n, list] = fs.readFileSync(filePath).toString().trim().split('\n');
n = Number(n)


list = list.split(' ').map(Number)

let dp = Array.from({length: n}, () => 1)


for(let i=1; i<n; i++) {
    let value= [1]
    for(let j=0; j<i; j++) {
        if(list[i] > list[j]) {
            value.push(dp[j] + 1)
        }
    }
    dp[i] = Math.max(...value)
}

console.log(Math.max(...dp))