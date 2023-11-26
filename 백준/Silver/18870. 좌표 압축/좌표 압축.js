const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = input[0]

let list = input[1].split(' ').map(Number)

let newList = input[1].split(' ').map(Number).sort((a,b) => a-b)
newList = [...new Set(newList)]

let answer = [];

for(let i=0; i<n; i++) {
  let lt = 0; let rt = newList.length-1;
  
  while(lt <= rt) {
    let mid = parseInt((lt + rt)/2)
    if(list[i] == newList[mid]) {
      answer.push(mid)
      break
    }
    else if(list[i] > newList[mid]) {
      lt = mid+1
    }
    else if(list[i] < newList[mid]) {
      rt = mid-1
    }

  }
}

console.log(answer.join(' '))