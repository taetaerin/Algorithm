function solution(n) {
    var answer = 0;
    n = String(n).split('').map(Number)
    answer = n.reduce((a,b) => a+b)
    return answer;
}