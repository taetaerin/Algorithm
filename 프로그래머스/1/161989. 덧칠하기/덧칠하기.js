function solution(n, m, section) {
    var answer = 0;
    let paintEnd = 0;
    for(let x of section) {
        if(paintEnd < x) {
            answer += 1
            paintEnd = x+m-1
        }
    }
    return answer;
}