const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let arr = input.map((item) => item.split(' ').map(Number))

let [n, m] = arr.shift()

let list = [];

for(let i=0; i<n; i++) {
    let res = [];
    for(let j=0; j<m; j++) {
        let num = arr[i][j] + arr[i+n][j]
        res.push(num)
    }
    list.push(res)
}

for(let x of list) {
    console.log(x.join(' '))
}