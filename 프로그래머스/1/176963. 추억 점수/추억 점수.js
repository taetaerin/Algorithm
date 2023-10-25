function solution(name, yearning, photo) {
    var answer = [];
    
    for(let i=0; i<photo.length; i++) {
        let hap =0;
        for(let j=0; j<photo[i].length; j++) {
            for(let k=0; k<name.length; k++) {
                if(name[k] == photo[i][j]) {
                    hap += yearning[k]
                }
            }
        }
        answer.push(hap)
    }
    return answer;
}