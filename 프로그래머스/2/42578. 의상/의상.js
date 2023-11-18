function solution(clothes) {
    var answer = 1;
    
    let cH = new Map();

    for(let x of clothes) {
        let [n, m] = x
        if(cH.has(m)) {
            cH.set(m, cH.get(m)+1)
        }else {
            cH.set(m, 1)
        }
    }
    
    
    for (let [key, value] of cH) {
        //value에 +1하는 이유 : 안입는 경우 포함
        answer *= (value + 1);
    }

    //아예 안입는 경우는 빼주기
    answer -= 1;

    return answer;
}