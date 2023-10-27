function solution(X, Y) {
    var answer = '';
    X = X.split('')
    Y = Y.split('')
    let list = []
    console.log(X,Y)

    for(let i=0; i<=9; i++) {
        let cur1 = X.filter((n) => Number(n) == i).length
        let cur2 = Y.filter((n) => Number(n) == i).length
        answer += String(i).repeat(Math.min(cur1, cur2))
        
    }
    
    if(answer.length == 0) return '-1'
    if(Number(answer) == 0) return '0'
    answer = answer.split('').reverse().join('')
    
    return answer;
}