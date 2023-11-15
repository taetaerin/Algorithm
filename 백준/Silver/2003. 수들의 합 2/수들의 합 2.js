const fs = require('fs')

let [num, list] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [m, maxNum] = num.split(' ')

list = list.split(' ').map(Number)
let lt = 0;
let sum =0, answer=0;

for(let rt=0; rt<m; rt++) {
    sum += list[rt]
    if(sum == maxNum) {
        answer++
    }
    while(sum >= maxNum) {
        sum -= list[lt]
        lt++
        if(sum == maxNum) {
            answer++
        }
    }
}

console.log(answer)