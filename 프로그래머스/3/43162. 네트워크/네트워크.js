function solution(n, computers) {
    var answer = 0;
    let visited = Array.from({length: n}, () => 0)
    
    function DFS(k) {
        visited[k] = 1

        for(let i=0; i<n; i++){
            if(computers[k][i] == 1 && visited[i] == 0) {
                DFS(i)
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
