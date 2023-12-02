const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [n, m] = input[0].split(' ').map(Number)

input.shift()

input.sort((a,b) => b-a)

let answer = 0;

while(m > 0) {
  for(let x of input) {

    if(m < x) {
      continue;
    }
    else{
      answer += parseInt(m/x)
      m = m - (x * parseInt(m / x))
      if(m == 0) {
        console.log(answer)
        break;
      }
    }
  }

}

