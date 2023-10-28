function solution(x) {
    let sum = String(x).split('').map(Number).reduce((a,b) => a+b)
    console.log(sum)
    
    const answer = (x%sum == 0) ? true : false
    return answer;
}