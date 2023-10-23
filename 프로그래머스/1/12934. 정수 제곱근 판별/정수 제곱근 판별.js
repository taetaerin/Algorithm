function solution(n) {
    var answer = -1;
    for(let i=1; i<= Math.sqrt(n); i++) {
        if(n == i*i) {
            answer = (i+1)*(i+1)
        }
    }
    return answer;
}