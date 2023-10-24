function solution(price, money, count) {
    
    let t = 0;
    for(let i=1; i<=count; i++) {
        t += (price*i)
    }
    
    let answer = (t>=money) ? t-money : 0
    
    return answer;
}