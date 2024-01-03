function solution(k, dungeons) {
    var answer = 0;
    let visited = Array.from({length: dungeons.length}, ()=> 0)
    
    function DFS(v, c) {
        for(let i=0; i<dungeons.length; i++) {
            if(visited[i] == 0 && dungeons[i][0] <= v) {
                visited[i] = 1
                DFS(v-dungeons[i][1], c+1)
                visited[i] = 0
            }
            answer = Math.max(answer, c)
        }
        
        
        
    }
    
    DFS(k, 0)

    return answer;
}