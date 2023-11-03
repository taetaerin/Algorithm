function solution(rank, attendance) {
    var answer = 0;
    let list = []
    
    for(let i=0; i<rank.length; i++) {
        if(attendance[i] == true) {
            list.push({idx: i,rank:rank[i]})
        }
    }
    
    list = list.sort((a,b) => a.rank - b.rank)
    console.log(list)
    answer = 10000 * list[0].idx + 100 * list[1].idx + list[2].idx
    return answer;
}