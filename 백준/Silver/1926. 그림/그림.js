const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
let [n, m] = input.shift().split(' ')
let answer = [];
let board = input.map(item => item.split(' ').map(Number))

let count = 0

let dx = [0, 1, -1, 0]
let dy = [1, 0, 0, -1]

function DFS(x, y) {
    count += 1
    board[x][y] = 0;
    for(let k=0; k<4; k++) {
        let nx = x + dx[k]
        let ny = y + dy[k]

        if(nx >=0 && ny >= 0 && nx < n && ny < m && board[nx][ny] == 1) {
            DFS(nx, ny)
        }
    }

}

for(let i=0; i<n; i++){
    for(let j=0; j<m; j++) {
        count = 0;
        if(board[i][j] == 1) {
            DFS(i, j)
            answer.push(count)
        }
    }
}

console.log(answer.length)
console.log(answer.length === 0 ? 0 : Math.max(...answer))

