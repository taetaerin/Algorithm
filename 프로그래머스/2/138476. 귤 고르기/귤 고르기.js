function solution(k, tangerine) {
    var answer = 0;
    let hash = new Map();
    
    for(let x of tangerine) {
        if(hash.has(x)) {
            hash.set(x, hash.get(x)+1)
        }else{
            hash.set(x, 1)
        }
    }
    
    let list = Array.from(hash.values()).sort((a,b)=>b-a)
    
    let sum = 0
    for(let x of list) {
        sum += x
        answer += 1
        if(sum >=k) {
            break;
        }
    }
    return answer;
}