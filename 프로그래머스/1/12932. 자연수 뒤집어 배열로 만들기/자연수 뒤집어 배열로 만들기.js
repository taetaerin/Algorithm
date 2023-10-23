function solution(n) {
    var answer = [];
    answer = n.toString().split('').reverse().map(item => Number(item))
    return answer;
}