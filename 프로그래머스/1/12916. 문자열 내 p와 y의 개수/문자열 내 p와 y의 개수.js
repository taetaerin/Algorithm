function solution(s){
    s = s.toLowerCase()
    let a = 0;
    let b = 0;
    
    for(let x of s) {
        console.log(x)
        if(x === 'p') {
            a += 1
        }
        if(x === 'y') {
            b += 1
        }
    }
    const answer = a==b ? true : false
    return answer;
}