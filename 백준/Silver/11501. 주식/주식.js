const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = input.shift();
let result = []

for(let i=0; i<input.length; i+=2) {
    const N = input[i]
    let list = input[i+1].split(' ').map(Number)
    let maxNum = 0;
    let answer = 0;

    for(let i=N-1; i>=0; i--) {

      if(list[i] > maxNum) maxNum = list[i]
      else {
        answer += maxNum - list[i]
      }
    }
  console.log(answer)
}