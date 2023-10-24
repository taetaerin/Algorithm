function solution(s) {
    var answer = '';
    s = s.split(' ');

    for(let j=0; j<s.length; j++) {
        for(let i = 0; i < s[j].length; i++) {
            if(i % 2 === 0) {
                answer += s[j][i].toUpperCase();
            } else {
                answer += s[j][i].toLowerCase();
            }
        }
        if(j < s.length-1) {
            answer+= ' '
        }
    }

    return answer;
}

