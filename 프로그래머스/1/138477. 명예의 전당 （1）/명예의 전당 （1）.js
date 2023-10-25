function solution(k, score) {
    var answer = [];
    let list = []
    for(let i=0; i<score.length; i++) {
        list.push(score[i])
        list.sort((a,b) => a-b)
        if(list.length > k) {
            list.shift()
        }
        answer.push(list[0])
   
    }
    return answer;
}