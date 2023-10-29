function solution(t, p) {
    var answer = 0;
    let list = []
    let n = p.length
    
    for(let i=0; i<=t.length-n; i++) {
        let a = t.slice(i, i+n)
        if(a<=p) list.push(a)
    }
    
    answer = list.length
    
    
    return answer;
}