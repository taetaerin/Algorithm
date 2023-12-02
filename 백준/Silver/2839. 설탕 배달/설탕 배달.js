const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim()

let count = 0;


while(1) {

  if(input < 0) {
    console.log(-1)
    break
  }

  else if(input % 5 == 0) {
    count += input/5
    console.log(count)
    break;
  }
  
  count += 1
  input -= 3

}
