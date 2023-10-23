function solution(s){
    var answer = true;
    s = s.toLowerCase()
    pnum = 0;
    ynum = 0
    
    for(let i=0; i<s.length; i++) {
        if(s[i] == 'p') {
            pnum +=1
        }
        if(s[i] == 'y') {
            ynum +=1
        }
    }
    
    if(pnum != ynum) answer=false

    return answer;
}