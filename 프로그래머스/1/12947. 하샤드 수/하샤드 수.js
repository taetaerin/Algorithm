function solution(x) {
    let list = x.toString().split('').map(Number)
    let sum = list.reduce((a,b) => a+b)
    let answer = x%sum==0 ? true : false
    return answer;
}