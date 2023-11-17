const fs = require('fs')

let n = fs.readFileSync('/dev/stdin').toString().trim()

let answer = 0;
for(let i=1; i<=n; i++) {
    if(i<100) {
        answer++
    }
    else{
        let num = String(i).split('').map(Number)
        if(num[0]-num[1] == num[1]-num[2]) {
            answer++
        }
    }
}

console.log(answer)