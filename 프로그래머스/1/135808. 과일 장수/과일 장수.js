function solution(k, m, score) {
    var answer = 0;
    let a = parseInt(score.length/m)
    score.sort((a,b) => b-a)
    console.log(score)

    for(let i=0; i<a; i++) {
 
        let list = score.slice(m*i, (m*i)+m)   
        answer += m * list[list.length-1]
    }
    return answer;
}