function solution(price, money, count) {
    var answer = 0;
    let total = 0;
    
    for(let i=1; i<=count; i++) {
        total += (price * i)
    }

    
    if(total > money) answer = total - money
    else answer = 0
    
    return answer;
}