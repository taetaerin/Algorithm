const fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = input.shift()

let m = input.shift()
let visited = Array.from({length: Number(n)+1}, () => 0)
visited[1] = 1


//그래프 
let graph = Array.from({length: Number(n)+1}, () => [])

for(let x of input) {
  let [start, end] = x.split(' ').map(Number);
  graph[start].push(end)
  graph[end].push(start)
}

let answer = 0;
function DFS(n) {
  for(let x of graph[n]) {
    if(visited[x] == 0) {
      visited[x] = 1
      answer += 1
      DFS(x)
    }
  }
}


DFS(1)

console.log(answer)