function solution(s, n) {
    var answer = '';
    for(let i=0; i<s.length; i++) {
        let code = s.charCodeAt(i)
        
        if(code >= 65 && code <= 90) {
            code += n
            if(code > 90) {
                code -= 26
            }
        }
        
        if(code >= 97 && code <= 122) {
            code += n
            if(code > 122) {
                code -= 26
            }
        }
        
        let b = String.fromCharCode(code)
        answer += b
    }
    return answer;
}