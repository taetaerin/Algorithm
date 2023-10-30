function solution(number, limit, power) {
    var answer = 0;
    let list = [];
    
    for(let i=1; i<=number; i++) {
        let a = 0
        for(let k=1; k<=Math.sqrt(i); k++) {
            if(i%k == 0) {
                a+=2
                if(i/k == k) {
                    a -=1
                }
            }
        }
        if(a > limit) list.push(power)
        else list.push(a)
    }
    
    console.log(list)
    answer = list.reduce((a,b) => a+b)
    return answer;
}