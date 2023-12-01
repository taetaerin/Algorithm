const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = input.shift()

let list = []

for(let x of input) {
  list.push(x.split(' '))
}

list = list.sort((a,b) => {
  if(a[1] == b[1]) {
    if(a[2] == b[2]) {
      if(a[3] == b[3]) {
        if(a[0] > b[0]) {
          return 1
        }else {
          return -1
        }
      }
      return b[3] - a[3]
    }
    return a[2] - b[2]
  }
  return b[1] - a[1]

})

console.log(list.map(item => item[0]).join('\n'))
