const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = input[0]

for(let i=0; i<n; i++) {
    let [a, location] = input[1+2*i].split(' ')
    let list = input[2+2*i].split(' ').map(Number)
    let cnt = 1
    
    while(1) {
        let item = list.shift()
        if(Math.max(...list) > item && location == 0) {
            list.push(item)
            location = list.length -1
        }
        else if(Math.max(...list) <= item && location==0) {
            console.log(cnt)
            break
        }
        else if(Math.max(...list) > item) {
            list.push(item)
            location -=1

        }
        else if(Math.max(...list) <= item) {
            cnt ++
            location -=1
        }
    }
}
