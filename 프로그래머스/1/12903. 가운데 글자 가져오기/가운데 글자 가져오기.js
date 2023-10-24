function solution(s) {
    var answer = '';
    let size = s.length;
    if(size % 2 == 1) answer = s[Math.floor(size/2)]
    else answer =  s[Math.floor(size/2)-1] + s[Math.floor(size/2)] 

    return answer;
}