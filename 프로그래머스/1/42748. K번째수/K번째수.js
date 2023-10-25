function solution(array, commands) {
    var answer = [];
    
    for(let i=0; i<commands.length; i++) {
        let [a, b, c] = commands[i]
        let newL = array.slice(a-1, b)
        newL.sort((a,b) => a-b)
        answer.push(newL[c-1])

    }
    
    return answer;
}