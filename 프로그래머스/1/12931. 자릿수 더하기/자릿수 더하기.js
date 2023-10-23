function solution(n) {
    var answer = 0;
    answer = n.toString().split('').map(Number).reduce((a,b) => a+b)
    return answer;
}