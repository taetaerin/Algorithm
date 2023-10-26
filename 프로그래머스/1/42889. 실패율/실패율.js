function solution(N, stages) {
    var answer = [];
    let list = []
     let h = stages.length
    for(let i=1; i<=N; i++) {
        let cnt = 0
       
        for(let k=0; k<stages.length; k++) {
            if(i==stages[k]) {
                cnt += 1
            }
        }
        list.push({idx: i, v:cnt/h})
        h -= cnt
    
    }
    list.sort((a,b) => b.v - a.v)
    answer = list.map(item => item.idx)
 
    return answer;
    
}