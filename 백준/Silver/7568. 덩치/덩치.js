const fs = require('fs')

let n = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let answer= Array.from({length: parseInt(n[0])}).fill(1)

let list = [];

for(let i=1; i<=n[0]; i++) {
    list.push(n[i].split(' ').map(Number))
}

for(let i=0; i<n[0]; i++) {
    let arr1 = list[i]
    for(let k=0; k<n[0]; k++) {
        let arr2= list[k]
        if(arr1[0] > arr2[0]) {
            if(arr1[1] > arr2[1]) {
                answer[k] += 1
            }
        }
    }
}

console.log(answer.join(' '))