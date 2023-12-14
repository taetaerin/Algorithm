const fs = require('fs')

let n = fs.readFileSync('/dev/stdin').toString().trim()

let answer = 0, five = 0, two = 0
let num = n % 5

if(num % 2 == 0) {
  five = parseInt(n / 5)
  two = parseInt((n%5) / 2)
}
else {
  five = parseInt(n / 5) - 1
  two = (n - (five * 5)) / 2
}

answer = five + two
let result = five*5 + two*2

if(five >= 0 && two >= 0) {
  if(result == n) {
    console.log(answer)
  }else {
    console.log(-1)
  }
}else {
  console.log(-1)
}