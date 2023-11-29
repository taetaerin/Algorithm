const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0])
let list = input[1].split(' ').map(Number)
list = list.sort((a,b) => a-b)

let sum = 0, lt=0, rt=n-1, minNum=Infinity;
let arr = [0, 0];

while(lt<rt) {
  sum = list[lt] + list[rt]
   
  if(Math.abs(sum) < minNum) {
    minNum= Math.abs(sum)
    arr[0] = list[lt]
    arr[1] = list[rt]
  }

  if(sum > 0) {
    rt -=1
  }
  else {
    lt +=1
  }
}

console.log(arr.join(' '))