const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim()

let eng = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k' ,'l' ,'m' , 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let answer = ''

for(let i=0; i<eng.length; i++) {
  if(input.includes(eng[i])) answer+= input.indexOf(eng[i]) + ' '
  else answer += -1 + ' '
}

console.log(answer)