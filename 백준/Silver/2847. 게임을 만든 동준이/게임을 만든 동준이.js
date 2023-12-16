const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

input.shift()
input.reverse()

let num = input[0]
let answer = 0;

for(let i=1; i<input.length; i++) {

  if(input[i] >= num) {
    while(1) {
      if(input[i] < num) {
        num = input[i]
        break;

      }else {
        input[i] = input[i] - 1
        answer += 1
      }
    }
  }
  else {
    num = input[i]
  }

}

console.log(answer)