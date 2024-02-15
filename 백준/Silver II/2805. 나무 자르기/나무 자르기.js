const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input.shift().split(' ').map(Number);
const tree = input.shift().split(" ").map(Number);

let lt=0;
let rt = Math.max(...tree)
let result = -123456789

while (lt <= rt) {
    let middleNum = parseInt((lt + rt) / 2)
    let sum = 0

    for(let x of tree) {
        if(middleNum <= x) {
            sum += x - middleNum
        }
    }

    if(sum >= m) {
        result = Math.max(middleNum, result)
    }

    if(sum > m) {
        lt = middleNum + 1
    }else {
        rt = middleNum -1
    }   
}

console.log(result)