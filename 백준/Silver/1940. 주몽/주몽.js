const fs = require('fs')

let [n, m, list] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

list = list.split(' ').map(Number)
list = list.sort((a,b) => a-b)

let lt=0; rt=n-1;
let sum=0, answer=0;

while(lt<rt) {
    sum = list[lt] + list[rt]
    if(sum < m) {
        lt++
    }
    if(sum > m) {
        rt--
    }
    if(sum == m) {
        answer++
        lt++
        rt--
    }
}
console.log(answer)