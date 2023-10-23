function solution(arr) {
    let answer= (arr.reduce((a,b) =>a+b) / arr.length)
    return answer;
}