const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let [n, m] = input.shift().split(' ').map(Number)
let list = input.map((item) => item.split(' ').map(Number))


let dp = Array.from({length: m+1}, () => 0)
let answer = 0;

for(let x of list) {
    let [w, v] = x
    for(let i=m; i>=w; i--) {
        dp[i] = Math.max(dp[i], dp[i-w] + v)
        answer = Math.max(answer, dp[i])
    }
    
}

console.log(answer)