const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim()

let sum = 0, count = 0;
let i = 1;
while(sum < input) {
  sum += i
  i++
  count += 1
}

if(sum == input) {
  console.log(count)
}else {
  console.log(count-1)
}
