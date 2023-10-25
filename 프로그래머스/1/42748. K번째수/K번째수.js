function solution(array, commands) {
    var answer = [];
    for(let x of commands) {
        let [a, b, c] = x
        let list =[]
        list =array.slice(a-1, b).sort((a,b) => a-b)
        answer.push(list[c-1])
    }
    return answer;
}