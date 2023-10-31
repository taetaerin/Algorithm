function solution(score) {
    var answer = [];
    let list = []
    let rank = new Array(score.length).fill(1)
    
    for(let i=0; i<score.length; i++) {
        let [a,b] = score[i]
        list.push((a+b)/2)
    }
    console.log(list)
     for(let i=0; i<score.length; i++) {
        for(let k=0; k<score.length; k++) {
            if(list[i] < list[k]) {
                rank[i] += 1
            }
        }
     }
    
    answer = rank
    return answer;
    
}