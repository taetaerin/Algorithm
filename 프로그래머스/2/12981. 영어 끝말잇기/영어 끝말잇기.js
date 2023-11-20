function solution(n, words) {
    var answer = [0, 0];
    
    for(let i=0; i<words.length; i++) {
        let num = i%n+1
        let turn = Math.ceil((i+1)/n)
        
        if(i > 0) {        
            if(words[i][0] !== words[i-1][words[i-1].length-1] || i > words.indexOf(words[i])){
                return [num, turn]
            }
        }
        
    }

    return answer;
}