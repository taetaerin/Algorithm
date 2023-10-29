function solution(s) {
    var answer = '';
    let idx = parseInt(s.length/2)
    
    if(s.length % 2 != 0) answer += s[idx]
    else answer += s[idx-1] + s[idx]
    return answer;
}