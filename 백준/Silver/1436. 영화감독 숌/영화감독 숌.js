const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim()

let list = []

for(let i=666; i<666*10000; i++) {
    let result = String(i).split('').join('')
    if(result.includes('666')) {
        list.push(i)
    }
}

console.log(list[input-1])