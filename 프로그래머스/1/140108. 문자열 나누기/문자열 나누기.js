function solution(s) {
    var answer = 0;
    let a = 0
    let b= 0
    let first = s[0]
    
    for(let i=0; i<s.length; i++) {
        if(first == s[i]) {
            a +=1
        }else {
            b += 1
        }
        if(a == b) {
            answer += 1
            first = s[i+1]
        }
        console.log(a, b, answer)
    }
    if(a !== b) {
        answer += 1
    }
    return answer;
}