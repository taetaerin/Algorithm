function solution(n) {
    var answer = 0;
    
    const num = n.toString(2).split('').filter(i => i == 1).length
    //console.log(num)
    
    let b = n+1
    
    while(b > n) {
        let b_num = b.toString(2).split('').filter(i => i ==1).length
        if(b_num == num) {
            answer = b
            break;
        }
        b += 1
    }
    return answer;
}