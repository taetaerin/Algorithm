function solution(n, computers) {
    var answer = 0;
    let visited = Array.from({length: n}, () => 0)
    
    
    function DFS(i) {
        visited[i] = 1;
        for(let j=0; j<n; j++) {
            if(computers[i][j] == 1 && visited[j] == 0) {
                DFS(j)
            }
        }
    }
    
    for(let i=0; i<n; i++) {
        if(visited[i] == 0) {
        
            DFS(i)
            answer += 1
        }
    }
    
    return answer;
}