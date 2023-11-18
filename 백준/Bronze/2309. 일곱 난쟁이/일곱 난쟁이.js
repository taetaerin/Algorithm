const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

let total = 0
for(let i=0; i<input.length; i++) {
    total += input[i]
}

let result = total-100

let arr
for(let i=0; i<input.length; i++) {
    for(let j=i+1; j<input.length; j++) {
        if(input[i]+input[j] == result) {
            arr = input.filter(item => item !== input[i] && item !== input[j])
        }
    }
}

arr = arr.sort((a,b) => a-b)
console.log(arr.join('\n'))