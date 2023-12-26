const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
let n = input.shift()
let answer = [];
let count = 0;
let board = input.map(item => item.split('').map(Number))

let dx = [0, 1, -1, 0]
let dy = [1, 0, 0, -1]

function DFS(x, y) {
    board[x][y] = 0;
    count += 1

    for(let k=0; k<4; k++) {
        let nx = x + dx[k]
        let ny = y + dy[k]

        if(nx >= 0 && ny >= 0 && nx < n && ny < n && board[nx][ny] == 1) {
            DFS(nx, ny)
        }
    }
}


for(let i=0; i<n; i++) {
    for(let j=0; j<n; j++) {
        count = 0
        if(board[i][j] == 1) {
            DFS(i, j)
            answer.push(count)
        }
    }
}

console.log(answer.length)
console.log(answer.sort((a,b) => a-b).join('\n'))