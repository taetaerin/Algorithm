function solution(d, budget) {
    var answer = 0;
    let t = 0;
    d = d.sort((a,b) => a-b)
    console.log(d)

    for(let i=0; i<d.length; i++) {
        t += d[i]
        if(t <= budget) {
            answer = i+1
        }
    }
    return answer;
}