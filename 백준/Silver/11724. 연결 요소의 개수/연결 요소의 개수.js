const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
const [n, m] = input.shift().split(' ')

const graph = Array.from({length: Number(n)+ 1}, () => [])
let visited = Array.from({length: Number(n)+ 1}, () => 0)

for(let x of input) {
    let [start, end] = x.split(' ').map(Number)
    graph[start].push(end)
    graph[end].push(start)
}

let answer = 0

function DFS(n) {
    for(let x of graph[n]) {
        if(visited[x] == 0) {
            visited[x] = 1
            DFS(x)
        }
    }
}

for(let i=1; i<=n; i++) {
    if(visited[i] == 0) {
        answer += 1
        DFS(i)
    }
}

console.log(answer)