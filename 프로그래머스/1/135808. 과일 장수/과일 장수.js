function solution(k, m, score) {
    var answer = 0;
    let a = Math.floor(score.length/m)
    console.log('a', a)
    
    score.sort((a,b) => b-a)
    console.log('score', score)
    
    for(let i=0; i<a; i++) {
        let list = []
        list.push(score.slice((m*i), (m*i)+m))
  
        answer += (list[0][m-1] * m)
  
        
    }
    
    return answer;
}