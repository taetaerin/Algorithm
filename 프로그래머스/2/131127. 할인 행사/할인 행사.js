function solution(want, number, discount) {
    var answer = 0;
    let n = discount.length;
    for(let i=0; i<=n-10; i++) {
        let list = discount.slice(i, i+10) 
        let result = [];
        
        for(let x of want) {
            result.push(list.filter((item) => item == x).length)
        }
        
        if(result.join('') == number.join('')) {
            answer += 1
        }
        
    }
    return answer;
}