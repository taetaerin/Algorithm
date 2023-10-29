function solution(sizes) {
    var answer = 0;
    let a = [];
    let b = [];
    
    for(let x of sizes) {
        x.sort((a,b) => b-a)
        a.push(x[0])
        b.push(x[1])
    }
    
    answer = Math.max(...a) * Math.max(...b)
    return answer;
}