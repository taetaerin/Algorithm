const fs = require('fs')

let [num, list, maxNum] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let lt = 0;
let rt = num-1
let sum =0, answer=0;

list = list.split(' ').sort((a,b)=>a-b).map(Number)

while(lt < rt) {
    sum = list[lt] + list[rt]
    if(sum == maxNum) {
        answer++
        lt++
        rt--
    }
    if(sum > maxNum) {
        rt--
    }
    if(sum < maxNum) {
        lt++
    }
}

console.log(answer)