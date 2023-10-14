const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number)

input.sort((a,b) => b-a)

const [a, b, c] = input

if(a == b && b !== c) {
  console.log(1000+(a)*100)
}
else if(a == c && b !== a) {
  console.log(1000+(a)*100)
}
else if(c == b && b !== a) {
  console.log(1000+(b)*100)
}
else if(a !== b && b!==c && a!== c) {
  console.log(a*100)
}else{
  console.log(10000+(a)*1000)
}

