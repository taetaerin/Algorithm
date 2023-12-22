const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = Number(input.shift())

let list = input.map((item) => item.split(' ').map(Number))

for(let i=1; i<n; i++) {
    for(let j=0; j<list[i].length; j++) {
        if(j==0) {
            list[i][j] += list[i-1][0]
        }
        else if(j == list[i].length -1) {
            list[i][j] += list[i-1][list[i-1].length-1]
        }
        else {
            list[i][j] += Math.max(list[i-1][j-1], list[i-1][j])
        }
    }
}

console.log(Math.max(...list[list.length-1]))