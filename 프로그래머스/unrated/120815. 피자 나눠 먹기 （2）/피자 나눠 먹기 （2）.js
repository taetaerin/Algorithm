function solution(n) {
    var answer = 0;
    for(let i=1; i<=n*6; i++) {
        if((6*i)%n == 0) {
            console.log(i)
            answer = i
            break
        } 
    }
    return answer;
}