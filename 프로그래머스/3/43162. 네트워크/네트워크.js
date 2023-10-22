function solution(n, computers) {
    var answer = 0;
    let visited = [false]
    
    function DFS(n) {
        visited[n] = true
        for(let i=0; i<computers.length; i++) {
            if(computers[n][i] == 1 && !visited[i]) {
                DFS(i)
            }
        }
    }
    
    for(let i=0; i<computers.length; i++) {
        if(!visited[i]) {
            DFS(i)
            answer += 1
        }
    }
    return answer;
}