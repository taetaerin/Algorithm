const fs = require('fs')

let n = fs.readFileSync('/dev/stdin').toString().trim()

let money = 1000 - n
let answer = 0

while(true) {

  if(money == 0) {
    break
  }
  else if(money >= 500) {
      money -= 500
  }
  else if(money >= 100) {
    money -= 100
  } 
  else if(money >= 100) {
    money -= 100
  } 
  else if(money >= 50) {
    money -= 50
  } 
  else if(money >= 10) {
    money -= 10
  } 
  else if(money >= 5) {
    money -= 5
  } 
  else if(money >= 1) {
    money -= 1
  } 
  answer += 1
}

console.log(answer)
