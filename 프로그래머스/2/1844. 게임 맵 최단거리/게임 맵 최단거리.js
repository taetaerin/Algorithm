function solution(maps) {
    let answer = 1;
    let visited = maps
    // 북 동 남 서
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    let que = [];
    const n = maps.length;
    const m = maps[0].length;
    
    que.push([0,0])
    //방문하면 0으로 처리
    visited[0][0] = 0
    
    while(que.length) {
        let s = que.length
        for(let i=0; i<s; i++) {
            let [x, y] = que.shift()
            for(let j=0; j<4; j++) {
                let nx = x+dx[j]
                let ny = y+dy[j]
                
                if(nx>=0 && ny >=0 && nx<n && ny<m 
                   && visited[nx][ny] == 1) {
                    if(nx == n-1 && ny == m-1){return answer+1}
                    visited[nx][ny] = 0
                    que.push([nx, ny])
                }
            }
        }
        answer += 1
    }
    return -1;
}