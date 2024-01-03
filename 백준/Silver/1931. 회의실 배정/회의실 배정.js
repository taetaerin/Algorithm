const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
let n = input.shift()

let list = input.map(i=> i.split(' ').map(Number))
let sort_list = list.sort((a,b) => {
    if(a[1] < b[1]) {
        return -1
    }
    else if(a[1] == b[1]) {
        return a[0] - b[0]
    }
})

let answer = 1
let num = sort_list[0][1]

sort_list.shift()
for(let x of sort_list) {
    if(x[0] >= num) {
        num = x[1]
        answer += 1
    }
}

console.log(answer)