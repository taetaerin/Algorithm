function solution(n, m) {
    var answer = [];
    let minNum = 0;

    for(let i=1; i<=m; i++) {
        if(n%i == 0 && m%i == 0) {
            minNum = i
        }
    }
    
    let maxNum = (n*m) / minNum
    
    answer.push(minNum, maxNum)
    return answer;
}