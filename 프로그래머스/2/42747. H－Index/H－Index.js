function solution(citations) {
    var answer = 0;
    let n = citations.length;
    let maxNum = -Infinity;
    citations.sort((a,b) => a-b)
    
    for(let i=0; i<=n; i++) {
        let count = 0;
        for(let x of citations) {
            if(i <= x) {
                count += 1
            }
        }
        
        if(i <= count) {
            maxNum = i
        }
    }
    answer = maxNum;
    return answer;
}