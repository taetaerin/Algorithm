function solution(n, m) {
    var answer = [];
    let a = 0
    let b = 0
    let num = n>m? n : m
    for(let i=1; i<=num; i++) {
        if(n%i == 0 && m%i==0) {
            a = i
        }
    }
    
    b = (n*m) / a
    
    answer.push(a, b)
    return answer;
}