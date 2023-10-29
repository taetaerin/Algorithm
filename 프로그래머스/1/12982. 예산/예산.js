function solution(d, budget) {
    var answer = 0;
    let total = 0;
    d.sort((a,b) => a-b)
    for(let i=0; i<d.length; i++) {
        total += d[i]
        if(total <= budget) {
            answer += 1
        }
    }
    return answer;
    
}