const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((item) => item.split(' '))


let s = input[0][0]


let list = []
let answer = []


for(let i=1; i<=s; i++) {
  if(input[i][0] == 'push') {
    list.push(input[i][1])
  }
  if(input[i][0] == 'top') {
    if(list.length > 0) {
      answer.push(list[list.length -1])
    }
    else {answer.push(-1)}
  }
  if(input[i][0] == 'size') {
    answer.push(list.length)
  }
  if(input[i][0] == 'empty') {
    if(list.length > 0) {answer.push(0)}
    else {answer.push(1)}
  }
  if(input[i][0] == 'pop') {
    if(list.length > 0) {
      let a = list.pop()
      answer.push(a)
    }else{
      answer.push(-1)
    }
  }
}


console.log(answer.join('\n'))

