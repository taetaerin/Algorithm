const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let arr1 = input[1].split(' ').sort((a,b) => a-b)
let arr2 = input[3].split(' ').map(Number)

let list = []
for(let x of arr2) {
    let start = 0
    let end = arr1.length-1
    let res = false
    while(start <= end) {
        let mid = parseInt((start + end)/2)
        
        if(x < arr1[mid]) {
            end = mid-1
        }else if(x>arr1[mid]) {
            start = mid+1
        }else {
            res = true;
            break
        }
    }
    if(res) {
        list.push('1')
    }else{
        list.push('0')
    }
}

console.log(list.join('\n'))


