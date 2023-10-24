function solution(t, p) {
    var answer = 0;
    ts = t.length
    ps = p.length
    for(let i=0; i<=ts-ps; i++) {
        let a = t.slice(i, (i+ps))
        if(a <= p) {
            answer += 1
        }
    }
    return answer;
}