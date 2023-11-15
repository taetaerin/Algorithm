const fs = require('fs')

let num = fs.readFileSync('/dev/stdin').toString().trim()

let lt=1, sum=0, answer=0;

for(let rt=1; rt<=num; rt++) {
    sum += rt
    while(sum > num) {
        sum -= lt
        lt++
    }
    if(sum == num) {
        answer++
    }
}

console.log(answer)